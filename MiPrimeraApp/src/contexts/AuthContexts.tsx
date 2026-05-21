

//1. Tipado de objeto principal del contexto

import {createContext, useContext, useState} from "react";

type User={
    email:string;
    psw?:string
}|null;


type AuthContextType  ={
    user: User|null;
    login:(email:string, psw: string)=>boolean;
    logout:()=> void;
}

//Cracion de cpontextooo
const AuthContext =createContext <AuthContextType | null>(null );

//4to. expoasición de contexto en forma de hook personalizado
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context)  throw  new  Error ("useAuth debe usarse en el AuthProvider")
    return context;
}



// 3. Crear el Provider (Permite mantenereste ontexto o info a nivel de aplicacion)(es un componente): por medio
// del cual se maneja el estado hloball

//
export const AuthProvider=({children}:{children:React.ReactNode})=>{
    //const [user, setUser]= useState<User> ({email: "misap@unitec.edu"});

    //inicializacion de estado con objeto nulo(vacio)
    const [user, setUser] = useState<User>(null);

    const login=(email:string): boolean =>{
        const allowed=email.endsWith(".edu");
        if (allowed){
            setUser({email});
        }
        return allowed


    }
    const logout=()=>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
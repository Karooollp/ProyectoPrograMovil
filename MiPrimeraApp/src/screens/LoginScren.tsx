import { View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import {useAuth} from "../contexts/AuthContexts";

export default function LoginScreen({navigation} :any){
    const [email, setEmail] = useState('mjsalinas@unitec.edu');

    //Se llamo una variable loca proveniente de AuthContextType el cual esta tipado en Auth
    const [psw, setPsw] = useState('');
    const {login}= useAuth();

   const handleLogin = () => {
    try {
        const allowed = login(email, psw);
        if(allowed) {
            navigation.navigate("Home", {email})
        }else {
            console.log("NO TIENE ACCESOOO")
        }} catch (error) {
      console.log(error);
    }
  };

    return(
        <View>
            <CustomInput placeholder={"Ingresa tu correo"} value={email} onChange={setEmail}/>
            <CustomInput type={"password"} placeholder={"Ingresaa tu contraseña"} value={psw} onChange={setPsw}/>
             <CustomButton title={"Iniciaar session"} onPress={ handleLogin  }/>
        </View>

    );
};
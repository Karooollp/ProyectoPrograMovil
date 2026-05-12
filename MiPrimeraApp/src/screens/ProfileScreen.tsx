import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { navigationref } from "../navigation/NavigationService";



export default function ProfileScreen ({navigation}:any){
    const handleLogout=()=>{
        if (navigationref.isReady()){}
        navigationref.reset({
            //INDICE DEL ARREGLO ROTES Q MUESTRA LA VISTAAL HACER RESET 
            index:0,

            //ARREGLO DE OBJETOS    PARA QUE CADA ONJECT REOPRRSENTA EN EL NUEVO HISTORIAL DE STACK 
            routes:[{name:"Login"}]
        })
    }

    const HandleGotoLogin=()=>{
        navigation.navigate("Login")

    }

    navigation.navigate("Login");

    return(
        <View>
            <Text>Bienvenidos a Profile </Text>
            <CustomButton title={"CERRAR SESION "} onPress={handleLogout} />
            <CustomButton title={"IR A LOGIN "} onPress={HandleGotoLogin} />

        </View>
        
    );
  
}
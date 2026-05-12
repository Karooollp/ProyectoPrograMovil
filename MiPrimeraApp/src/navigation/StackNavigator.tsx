import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScren";
import HomeScreen from "../screens/HomeScreens";
import tabNavigator from "./TabsNavigator";

//1. definir un stack y declarar tipado 
export type RootStackParamList={
    Login:undefined,
    Home:{email:string},
    UserTabs:undefined,
}

//Crear el stack navigator el cual va a manejar la navegación 
const Stack =createNativeStackNavigator <RootStackParamList>();

//Utilizar el stack
export default function StackNavigator (){
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login"component={LoginScreen}/>
            <Stack.Screen name="Home"component={HomeScreen}/>
            <Stack.Screen name="UserTabs"component={tabNavigator}/>
        </Stack.Navigator>
    )

}
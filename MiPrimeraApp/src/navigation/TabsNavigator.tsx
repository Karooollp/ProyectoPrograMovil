//Declarar tipado ce patallas y parametros

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingScreen";

type TabsParamList={
    Profile:undefined
    Settings:undefined
}
//Crear el tab navigatoor q manejara navegacion por pestañas

const Tab= createBottomTabNavigator<TabsParamList>();

//utilizar el tabNavigator

export default function TabNavigator(){

    return(
        <Tab.Navigator>
           <Tab.Screen name ="Profile" component={ProfileScreen}/>
           <Tab.Screen name ="Settings" component={SettingsScreen}/>


           
        </Tab.Navigator>

    );
}
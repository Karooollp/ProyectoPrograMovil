//Declarar tipado ce patallas y parametros

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

type TabsParamList={
    Profile:undefined
    Settings:undefined
}
//Crear el tab navigatoor q manejara navegacion por pestañas

const Tab= createBottomTabNavigator<TabsParamList>();

//utilizar el tabNavigator

export default function TabNavigator(){
    



    return(
 
 <Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: "#583535",
  }}
>
  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    options={{
      title: "My Profile",
      tabBarIcon: ({ color, size }) => (
        <Ionicons 
          name="person"
          size={size}
          color={color}
        />
      ),
    }}
  />

    <Tab.Screen
    name="Settings"
    component={SettingsScreen}
    options={{
      title: "Settings",
      tabBarIcon: ({ color, size }) => (
        <Ionicons 
          name="settings"
          size={size}
          color={color}
        />
      ),
    }}
  />
</Tab.Navigator>

    );
}
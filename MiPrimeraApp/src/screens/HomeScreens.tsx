import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import {useAuth} from "../contexts/AuthContexts";
type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ route, navigation }: Props) {
    // RECPCION DE EMAIL POR PARAMETRO DE RUTA
    //const { email } = route.params;

    //Uso de usuario de email desde context
    const {user}=useAuth();
  const handleLoadSettings =()=>{
    navigation.navigate ("UserTabs");
  }

  return (
    <View>
          <StatusBar style="auto" />
      <Text> Bienvenidos {user?.email}, a Home</Text>
      <CustomButton title={"GO TO USER SETTINGS"} onPress={handleLoadSettings} />
    </View>
  );
}

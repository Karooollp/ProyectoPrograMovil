import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/StackNavigator";
import CustomButton from "../components/CustomButton";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ route, navigation }: Props) {
  const { email } = route.params;
  const handleLoadSettings =()=>{
    navigation.navigate ("UserTabs");
  }

  return (
    <View>
      <Text> Bienvenidos {email}, a Home</Text>
      <CustomButton title={"GO TO USER SETTINGS"} onPress={handleLoadSettings} />
    </View>
  );
}

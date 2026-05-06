import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primera App Movil de Misap</Text>
      <StatusBar style="auto" />
     <CustomButton
      title={"App"} 
      onPress={()=>{
        console.log("Press desde boton App");

     }}
     />

     <CustomButton
      title={"Secundary Button"} 
      onPress={()=>{
        console.log("Press desde boton se secundario");

     }}
     />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

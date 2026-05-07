import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primera App Movil de Misap</Text>
      <StatusBar style="auto" />
      
      <CustomInput 
        type={'number'} 
        placeholder={''} 
        value={''} 
        onChange={function (text: string): void {} }  />
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
     variant="secondary"
     />

     <CustomButton
      title={"Tertiary Button"} 
      onPress={()=>{
        console.log("Press desde boton se secundario");
     }}
     variant="tertiary"
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {

  //definición de una variabe de estadoen ReacN
const [inputValue, setInputValue]=useState("");

  return (
    <View style={styles.container}>
      <Text>Primera App Movil de Misap</Text>
      <StatusBar style="auto" />

      <CustomInput 
        type={'number'} 
        placeholder={''} 
        value={inputValue} 
        onChange={setInputValue }  />
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
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

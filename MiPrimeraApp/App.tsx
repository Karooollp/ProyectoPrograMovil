import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {

  //definición de una variabe de estadoen ReacN
const [email, setEmail]=useState("");
const [contraseña, setContraseña]=useState("");
const [name, setName]=useState("");
const [number, setNumber]=useState("");


  return (
    <View style={styles.container}>
      <Text>Primera App Movil de Misap</Text>
      <StatusBar style="auto" />

      <CustomInput 
        type={'text'} //tambien se puede borrar xq text es nada xd 
        placeholder={'Ingresa tu nombre '} 
        value={name} 
        onChange={setName }
       />

      <CustomInput 
        type={'number'}
        placeholder={'Ingresa tu numero '} 
        value={number} 
        onChange={setNumber }
       />
       <CustomInput 
        type={'email'} 
        placeholder={'micorreo@@gmail.com'} 
        value={email} 
        onChange={setEmail }
       />
      <CustomInput 
        type={'password'} 
        placeholder={'Ingresa tu contraseña crack'} 
        value={contraseña} 
        onChange={setContraseña }
       />

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

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";


type Props={
    type: "text"|"email"|"pasword"|"number";
    placeholder: string;
    value:string;
    onChange:(text:string)=> void

}


export default function CustomInput({type,placeholder,value, onChange}: Props){
    const [isSecureText, setIsSecureText]=useState(true)
    const icon:  typeof Ionicons["name"] |undefined=
    type==="email"?"at":
        type==="pasword"? "lock-closed":  undefined

    return (
        //wrapper
         <View style={styles.wrapper}>
            <View style={styles.inputContainer}>
                <Ionicons  name={icon as any }size={25} color="#00000"/>

                <TextInput
                    placeholder ={placeholder}
                    value={value}
                    onChangeText={onChange}
                    style={styles.input}
                    secureTextEntry={isSecureText} 
            />
            <TouchableOpacity
            onPress={
                ()=>{
                    setIsSecureText(!isSecureText)
                }
            }
            >
                <Ionicons name={isSecureText? "eye":"eye-off"} size={20} />
            </TouchableOpacity>
        </View>
         </View>
    );
}


const styles=StyleSheet.create({
    wrapper:{
        marginBottom:10,
    },

    inputContainer:{
    //width:"100%",
        //Distribucion de ccomponentes 
       flexDirection:"row",
       alignItems:"center",
        marginTop:10,

       //estilización de contenido 
        borderColor: "gray",
        borderWidth:1,
        borderRadius:9,
        backgroundColor:"#e3dbdb",
        paddingHorizontal:15,
    },

    input:{
        width:"80%",
        paddingVertical: 10,
        paddingHorizontal:10,


    }
})
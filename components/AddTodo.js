import React, {useState} from 'react'
import{View, Text, StyleSheet, TextInput} from 'react-native';


export default function AddTodo() {
    const [text, setText] = useState('')

   const changeHandler = (val) => {
        setText(val);
   } 
  return (
    <View>
        <Text style={styles.title}>AddTodo</Text>
        <View>
            <TextInput style={styles.input}
            required
            placeholder='E.g Build An App....'
            onChangeText={(val)=>changeHandler(val)}
            />
            
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    title:{
        fontSize: 23,
        marginTop:16,
        color: "#40E0D0",
        
    },
    input:{
        borderWidth:1,
        borderColor:"#40E0D0",
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        fontSize:20

    }
})

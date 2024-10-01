import React from 'react'
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
      height:80,
      paddingTop:38,
      backgroundColor:'#40E0D0'
    },
    title:{
        textAlign:'center',
        color:'#F7F7F7',
        fontSize:26,
        fontWeight:'bold'
    }

});
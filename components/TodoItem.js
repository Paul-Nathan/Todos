import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TodoItem({item, handleDelete}) {
  return (
    <TouchableOpacity onPress={()=>handleDelete(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name = 'delete' size={18} color='#40E0D0'/>
        <Text>{item.text}</Text>
            </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        padding:16,
        marginTop:16,
        borderColor:"#40E0D0",
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: 10,
        fontSize:20
    }
})

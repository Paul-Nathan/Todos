import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function TodoItem({item, handleDelete}) {
  return (
    <TouchableOpacity onPress={()=>handleDelete(item.key)}>
        <Text style={styles.item}>
            {item.text}
            </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:"#40E0D0",
        borderStyle: 'dashed',
        borderWidth: 2,
        borderRadius: 10
    }
})

import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import { useState } from 'react';
import { StyleSheet, Keyboard, Text, View, TextInput, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback} from 'react-native';


export default function App() {
  const[todos, setTodos]= useState([
    {text:'Prayer Devotion', key:'1'},
    {text:'House Chores', key:'2'},
    {text:'Physical Exercise', key:'3'},
    {text:'Go to Bath', key:'4'}
  ])

  const handleDelete=(key)=>{
    setTodos((prevText)=>{
      return prevText.filter((item)=>item.key!==key) 
  })
    
  }

  const submitHandler =(text)=>{

    if(text.length > 3){
      setTodos((prevText)=>{
        return[
          {text:text, key:Math.random().toString()},
          ...prevText
        ];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')
        }
      ])
    }
      
  
    
  }

return (
    <TouchableWithoutFeedback onPress={() => {
     Keyboard.dismiss()
      // console.log('dismissed keyboard');
    }}>
      <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
           data={todos}
           renderItem={({item})=>(
            <TodoItem item={item} handleDelete={handleDelete}/>
           )}
          />
        </View>
      </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:45, 
    backgroundColor: '#fff',
    flex: 1
  },
  list:{
    flex: 1,
    marginTop: 25,
    
  }
});

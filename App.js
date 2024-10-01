import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity} from 'react-native';


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
return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo/>
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


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
  },
  content:{
    padding:45, 
  },
  list:{
    marginTop: 25,
  }
});

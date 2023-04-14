import React,{useState} from "react";
import { Button, FlatList, KeyboardAvoidingView,Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import {UseReduce} from '../reducers/ListTodo';
import { styles } from "./Home/style";


let id = {
    count:Math.random()
}
export  const Home=()=>{
    const [name,setName] = useState('')
    const [state,dispatch] = UseReduce()

    const handleAdd=()=>{
        dispatch({
            type:"Add",
            payload:{
                title: name,
                id: id.count,
                done: false
            }
        })
        setName('')
    }
    return(
      <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
            <FlatList
                style={styles.list}
                data={state}
                renderItem={({item})=><View style={styles.item}><Text style={styles.textItem} >{item.title}</Text><TouchableOpacity
                    style={styles.btn}
                >
                    <Text style={styles.btnIcon}>X</Text>
                </TouchableOpacity>
                
                </View>}
              
            />
            <View style={styles.inputArea}>
        
                <TextInput 
                    style={styles.input}
                    placeholder="Digite aqui"
                    value={name}
                    onChangeText={e=>setName(e)}
                 
                />
                <TouchableOpacity style={styles.btnAdd}  onPress={handleAdd}>
                <Text style={styles.btnIcon}>Adicionar</Text>
                </TouchableOpacity>
           
            </View>
      </KeyboardAvoidingView>
    );
}
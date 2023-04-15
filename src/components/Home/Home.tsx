import React,{useState,useLayoutEffect} from "react";
import { Button, FlatList, KeyboardAvoidingView,Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import {UseReduce} from '../../reducers/ListTodo';
import { styles } from "./style";
import {useNavigation} from '@react-navigation/native';

export  const Home=()=>{
    const navagation = useNavigation()

    const [name,setName] = useState('')
    const [state,dispatch] = UseReduce()
   
    const handleAdd=()=>{
            dispatch({
                type:"Add",
                payload:{
                    title: name,
                    id: Math.random().toString(),
                    done: false
                }
            })
            setName('')
      
        }
        
       
    const handleOrder = ()=>{
        dispatch({
            type:"order"
        })
    }
    useLayoutEffect(()=>{
        navagation.setOptions({
            headerRight:()=><TouchableOpacity onPress={handleAdd} 
            style={styles.btnHeader}>
                
                <Text style={styles.btnIcon}>Adicionar</Text></TouchableOpacity>,
            headerLeft:()=><TouchableOpacity 
            onPress={handleOrder}
                style={styles.btnHeader}
            ><Text style={styles.btnIcon}>Ordenar</Text></TouchableOpacity>
        })
    }

    ,[name,state])


    return(
        
      <KeyboardAvoidingView style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >       
            <Text style={{textAlign:"center",fontWeight:"bold",marginVertical:10,fontSize:16,color:"#C71585"}}>Quantidades de items: {state.length}</Text>
            
            <FlatList
                style={styles.list}
                data={state}
                renderItem={({item})=><View style={styles.item}><Text style={styles.textItem} >{item.title}</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={()=>
                        dispatch({
                            type:"del",
                            payload:{
                                id: item.id
                            }
                        })
                    }
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
               
               
            </View>
      </KeyboardAvoidingView>
    );
}
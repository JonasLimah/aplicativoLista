import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Home} from '../../components/Home/Home'
import { Button } from 'react-native'

export const Pages =()=>{
const Stack = createNativeStackNavigator()


    return(
        <Stack.Navigator >
            <Stack.Screen name=' ' component={Home}  
               options={{
                title: ' ',
                headerStyle: {
                  backgroundColor: '#C71585',
                  
                 
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                
                
                
              }} 
            />
        </Stack.Navigator>
    );
}
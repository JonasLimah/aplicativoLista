import {useReducer} from 'react'



type list ={
    id?: number,
    title: string,
    done?: boolean
}
type action ={
    type: string,
    payload?:{
        id: number,
        title: string,
        done:boolean
    }
}

const initialState:list[] =[]
const reducer = (state:list[],action:action)=>{
    switch(action.type){
        case "Add" :
            if(action.payload?.title){
                let newItem = [... state]
                newItem.push({
                    title:action.payload.title
                })
                return newItem
            }
        break
    }
    return state
}

export const UseReduce = ()=>{
    return useReducer(reducer,initialState)
}
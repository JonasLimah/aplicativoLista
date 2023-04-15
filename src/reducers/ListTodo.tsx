import {useReducer} from 'react'




type list ={
    id: string,
    title: string,
    done?: boolean
}
type action ={
    type: string,
    payload?:{
        id?: string,
        title?: string,
        done?:boolean
    }
}
let id ={
    count:0
}
const initialState:list[] =[]
const reducer = (state:list[],action:action)=>{
    switch(action.type){
        case "Add" :
            if(action.payload?.title ){
                let newItem = [... state]
                newItem.push({
                    title:action.payload.title,
                    id:Math.random().toString(),
                    done:false
                })
                return newItem
            }
        break
        case "del" :
            if(action.payload?.id){
                let newstate = [... state]
                newstate = newstate.filter(item=>item.id !== action.payload?.id)
                return newstate
            }
        break
        case "order":
            {let newstate = [...state]
            newstate=newstate.sort((a,b)=>a.title>b.title?1:-1);
            return newstate}
    
        
    }
    return state
}

export const UseReduce = ()=>{
    return useReducer(reducer,initialState)
}
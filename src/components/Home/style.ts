import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
    },
    lengthContainer:{
        margin:10
    },
    list:{
        height:'50%',
        margin: 5,
        backgroundColor: "#C0C0C0",
        padding: 10,
        borderRadius:10,
       
        
    },
    item:{
        backgroundColor:"#F0FFF0",
        height: 50,
        padding:10,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:10
       
    },
    textItem:{
        fontSize:15,
        fontWeight:"bold",
        color:'#C71585'
    },
    btn:{
        width: 25,
        height:25,
        backgroundColor:"#C71585",
        borderRadius:12.5,
        alignItems:"center",
        justifyContent:"center",
        
    },
    btnIcon:{
        color: '#fff',
        fontWeight:'bold'
    },
    inputArea:{
        flex:2,
        backgroundColor: '#D3D3D3',
        borderRadius:10,
        margin:5,
       
    },
    input:{
        marginTop:10,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:10,
        paddingVertical:15,
        paddingHorizontal:5,
        margin:5,
        backgroundColor:'#fff',
       
        
    },
    btnHeader:{
        paddingVertical:10,
        borderRadius:10,
        borderColor:"#fff",
        borderWidth:1,
        width:100,
        height:40,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:5
    }

   
  });
  
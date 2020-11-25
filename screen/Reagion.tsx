import React, { useEffect, useState } from 'react'
import { View,Text,TextInput,StyleSheet} from 'react-native';
import { State, TouchableOpacity} from 'react-native-gesture-handler'
import {useDispatch,useSelector} from 'react-redux';

import {getdata} from '../redux/action/action'
import {connect} from 'react-redux';




   export const Reagion =({navigation}:any)=>{
    const dispatch =useDispatch();
    const [inputValue,inputvalue]=useState('');
   //const posts:any=useSelector((state:any)=>state.app.post)
  // console.log(posts);
 //  async  componentWillMount(){
 //   dispatch(getdata());
    
 // }
 //   useEffect(()=>{
      
   //   dispatch(getdata());
      
   // })

    const submitcountry=()=>{
        //console.log(inputValue);
     // getdata(inputValue,navigation)
    dispatch( getdata(inputValue,navigation))
    }
    
    return(
        
        <View>
            <TextInput style={styles.input} onChangeText={(value:string)=>inputvalue(value)}>
            

            </TextInput>
            <TouchableOpacity onPress={ ()=> submitcountry()}   style={styles.Button} >
                <Text>Submit</Text>
            </TouchableOpacity>
          
        </View>
    )

}
const styles = StyleSheet.create({
    input: {
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth:1,
        marginBottom:20,
        padding: 5
      },
      Button: {
        backgroundColor: '#0984e3',
        borderRadius: 5,
        marginBottom: 20,
        height: 40,
        justifyContent: 'center'
    
      },

})
import React, { useEffect, useState } from 'react'
import { View,Text,TextInput} from 'react-native';
import { State, TouchableOpacity} from 'react-native-gesture-handler'
import {useDispatch,useSelector} from 'react-redux';

import {getdata} from '../redux/action/action'
import {connect} from 'react-redux';




   export const Reagion =( navigation:any)=>{
    const dispatch =useDispatch();
    const [inputValue,inputvalue]=useState('');
   const posts:any=useSelector((state:any)=>state.app.post)
   console.log(posts);
 //  async  componentWillMount(){
 //   dispatch(getdata());
    
 // }
    useEffect(()=>{
      
      dispatch(getdata());
      
    })

    const submitcountry=()=>{
        console.log("dd");
      // console.log(posts[0]);
       navigation.navigate('Country',{
            selectedReagion:inputValue
      })
     

      

    }
    
    return(
        
        <View>
            <TextInput onChangeText={(value:string)=>inputvalue(value)}>
            

            </TextInput>
            <TouchableOpacity onPress={ ()=> submitcountry()} >
                <Text>Submitttt</Text>
            </TouchableOpacity>
          
        </View>
    )

}

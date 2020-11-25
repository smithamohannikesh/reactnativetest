import { useLinkProps } from '@react-navigation/native';
import React, { useState } from 'react';
import{Text ,TextInput,TouchableOpacity,View} from 'react-native';
import {connect} from 'react-redux';
import {Astroidsearch} from '../redux/action/astroidAction';

type Props={
    Astroidsearch:Function,
    Navigation:{
        navigate:Function
    }
}

const AstroidSearch =(props:Props)=>{
    const [id,setId]=useState("");
     const handlechange=(value:string)=>{
         setId(value);
    }
    const changeSubmit=()=>{
        console.log(id);
        props.Astroidsearch(id);
        props.Navigation.navigate("Asroid");


    }
    return(
        <View>
            <TextInput onChangeText= {(value:string)=>handlechange(value)} value={id}>
            </TextInput>
            <TouchableOpacity   onPress={()=>changeSubmit()} disabled={id.length===0}>
            <Text  >submit</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>RandomSearch</Text>
            </TouchableOpacity>
        </View>
    )
}
export default connect(null,{Astroidsearch})(AstroidSearch)
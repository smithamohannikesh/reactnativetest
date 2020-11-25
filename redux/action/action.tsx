

import React from 'react';
import http from '../../http/http';
import CONSTS from '../../constants/constants' 

export const getdata=(inputValue:string,navigation:any)=>{
    
    //console.log("function");
    return async(dispatch:any)=>{
        
        try{
           // console.log("resuldata");
                    const response: any = await http.get(`countries`);
                    //console.log(response);
                // const response = await fetch(`https://api.first.org/data/v1/countries`);
                    if (response ) {
                       // console.log("resultData");
                      //  const resultData = await response.json()
                        //const post=resultData.inputValue;
                        console.log(response.data);
                            dispatch({ type: CONSTS.GET_REAGION,post:response.data })
                        
                    }
                    else {
                       // console.log("resuldata");
                    }

                navigation.navigate('Country');
        } catch (error) {
            console.log(error);
            throw new Error(error);
            
        }

    }
}

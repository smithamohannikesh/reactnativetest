

import React from 'react';
import http from '../../http/http';
import CONSTS from '../../constants/constants' 

export const getdata=()=>{
    
    return async(dispatch:any)=>{
       // console.log({http});
try{
    
    const response: any = await http.get(`countries`);
    if (response && response.data) {
        
       // const resultData = await response.json()
        console.log(response);
        dispatch({ type: CONSTS.GET_REAGION, response })
        
    }
} catch (error) {
    throw new Error(error);
}

}
}

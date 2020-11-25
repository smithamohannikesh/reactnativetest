

import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
export const Country = () => {
    const posts:any=useSelector((state:any)=>state.app.post)
    const [country,setcountry]=React.useState<any>([]);
    console.log("-------")
    const inputValues:any=useSelector((state:any)=>state.inputValue)
    
    
    React.useEffect(()=>{
        
        const countries = Object.keys(posts.data).map((rs:any) => {
          //  console.log(posts.data[rs].country);
            return posts.data[rs].country
        })
        setcountry(countries);

        
    }
    ,[posts]

    )
    return (
        <ScrollView testID="details-wrapper" >
           {country.map((respose:any)=><Text key={respose} >{respose}</Text>)
           }
        </ScrollView>
    )
}

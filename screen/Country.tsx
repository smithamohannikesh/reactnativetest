

import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
export const Country = (selectedReagion: string) => {
    const posts:any=useSelector((state:any)=>state.app.post)
    return (
        <ScrollView testID="details-wrapper" >
            <Text >
                {posts.selectedReagion}
            </Text>
        </ScrollView>
    )
}

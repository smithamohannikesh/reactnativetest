

import * as React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export const Country = (props: any) => {
    const post: any = props.route.params.selectedReagion
    return (
        <ScrollView testID="details-wrapper" >
            <Text >
                {JSON.stringify(post, null, 10)}
            </Text>
        </ScrollView>
    );
}

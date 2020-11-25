import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AstroidSearch from '../screens/AstroidSearch'
const stack =createStackNavigator();

const Navigation =() =>{
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                    name='AstroidSearch'
                    component={AstroidSearch}
                    options ={{title:'astroid search',
                    headerStyle: {
                        backgroundColor: '#e67e22'
                      }
                                          
                }

                    }
                />
            </stack.Navigator>
        </NavigationContainer>
    )

}
export default  Navigation;
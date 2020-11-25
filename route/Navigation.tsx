import { NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Reagion} from '../screen/Reagion';
import {Country} from '../screen/Country';
import React from 'react';
const stack=createStackNavigator();
  const Navigation =()=>{
      return(
          <NavigationContainer>
              <stack.Navigator>
                  <stack.Screen
                    name="Reagion"
                    component={Reagion}
                    options={
                        {
                            title:"Region",
                            headerStyle:{
                                backgroundColor:"gray"

                            }

                        }
                    }

                  />
                  <stack.Screen
                    name="Country"
                    component={Country}
                    options={
                        {
                            title:"Country",
                            headerStyle:{
                                backgroundColor:"gray"

                            }

                        }
                    }

                  />
              </stack.Navigator>
          </NavigationContainer>
      )
  }
  export default Navigation;
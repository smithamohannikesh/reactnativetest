
import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Navigation from './route/Navigation';
const App=()=>{
 
  return(
       <Provider store={store}>
         <Navigation/>
       </Provider>
  )
}

export default App;

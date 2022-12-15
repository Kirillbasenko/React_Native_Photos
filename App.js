import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from "react"
import { Provider } from 'react-redux';

import Full from './src/navigation/AppNavigation';
import {bootstrap} from "./src/bootstrap"
import store from "./src/store"


export default function App() {
    const [isReady, setIsReady] = useState(false)

  if(!isReady){
    return ( 
      <AppLoading 
        startAsync={bootstrap} 
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
        />
      )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Full/>
      </NavigationContainer>
    </Provider>
    
  );
}

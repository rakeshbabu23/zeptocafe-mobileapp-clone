
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigators/AppNavigator'
import UserProvider from './src/store/userContext';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { Text } from 'react-native';

const App = () => {

  return (
    <UserProvider>
      <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
   

    </UserProvider>
    
  )
}

export default App;

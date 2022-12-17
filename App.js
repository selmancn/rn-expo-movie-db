// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Home'
import DetailScreen from './src/Detail';

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#333c4e'
  },
  headerTintColor: 'white',
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={headerOptions} />
        <Stack.Screen name="Detail" component={DetailScreen} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../category'
import Sub_Category from '../sub_category'

function HomeCategory() {
  return (

    <Category onPress={()=>props.navigation.navigate('Screen1')}></Category>
   
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categorias" component={HomeCategory} />
        <Stack.Screen name="Screen1" component={Sub_Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
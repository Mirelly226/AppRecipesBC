import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home';
import Description from './description'
import { Image } from 'react-native';
import Review from './review';

 const Stack = createStackNavigator();
 export default function StackHome() {
    return (
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={HomeScreen}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#FC5B27' },
                    headerTitleAlign: 'center',
                    headerTitle: (props) => (
                        <Image
                          style={{ width: 200, height: 50 }}
                          source={require('../../assets/Logo.png')}
                          resizeMode='contain'
                        />
                    ),
                }}
            />
            <Stack.Screen name="Descripción Receta" component={Description}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#FC5B27' },
                }}
            />
            <Stack.Screen name="Reseñas" component={Review}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#FC5B27' },
                }}
            />
        </Stack.Navigator>
    );
}
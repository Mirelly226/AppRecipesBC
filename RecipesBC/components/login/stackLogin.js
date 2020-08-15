import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login';
import Register from './register'
const Stack = createStackNavigator();

export default function Login() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Iniciar Sesión" component={LoginScreen} />
            <Stack.Screen name="Registro" component={Register} />
        </Stack.Navigator>
    );
}
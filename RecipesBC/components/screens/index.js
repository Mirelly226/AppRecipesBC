import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home';
import Description from './description'

const Stack = createStackNavigator();
function StackHome() {
    return (
        
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={HomeScreen} />
                <Stack.Screen name="Descripcion Receta" component={Description} />
                <Stack.Screen name="Reseñas" component={Description} />
            </Stack.Navigator>
        
    );
}

export default StackHome;
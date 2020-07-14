import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recipes from './recipes';
import Category from '../category';
import Description from './description'
import {  Image } from 'react-native';
import Review from '../screens/review';

const Stack = createStackNavigator();

export default function StackCategory() {
    return (

        <Stack.Navigator initialRouteName="Categorías">
            <Stack.Screen name="Categorías" component={Category}
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
            <Stack.Screen name="Recetas por Categoría" component={Recipes}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#FC5B27' },
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
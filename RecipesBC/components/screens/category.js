import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recipes from './recipes';
import Category from '../category';
import Description from '../screens/description'


const Stack = createStackNavigator();

function StackCategory() {
    return (
        
            <Stack.Navigator>
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Recetas" component={Recipes} />
                <Stack.Screen name="Descripcion Receta" component={Description} />
                <Stack.Screen name="Reseñas" component={Description} />
            </Stack.Navigator>
        
    );
}

export default StackCategory;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Account from './account';
import StackHome from './screens/index';
import StackCategory from './screens/category';


const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
                            iconName = focused
                                ? 'home'
                                : 'home';
                        } else if (route.name === 'Categorías') {
                            iconName = focused ? 'list-ul' : 'list-ul';
                        } else if (route.name === 'Cuenta') {
                            iconName = focused ? 'user' : 'user';
                        }
                        return <FontAwesome name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Inicio" component={StackHome} />
                <Tab.Screen name="Categorías" component={StackCategory} />
                <Tab.Screen name="Cuenta" component={Account} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}







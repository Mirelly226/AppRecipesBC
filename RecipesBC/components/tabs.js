import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import StackAccount from './screens/stackAccount';
import StackHome from './screens/stackHome';
import StackCategory from './screens/stackCategory';


const Tab = createBottomTabNavigator();

export default function Home() {
    return (
       
            <Tab.Navigator
                initialRouteName="Inicio"
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
                    activeTintColor: '#FC5B27',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Inicio" component={StackHome}/>
                <Tab.Screen name="Categorías" component={StackCategory} />
                <Tab.Screen name="Cuenta" component={StackAccount} />
            </Tab.Navigator>
       
    );
} 
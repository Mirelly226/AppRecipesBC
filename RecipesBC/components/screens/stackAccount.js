import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../account';


const Stack = createStackNavigator();
function StackAccount() {
    return (  
            <Stack.Navigator initialRouteName="Perfil de Usuario">
                <Stack.Screen name="Perfil de Usuario" component={Account} 
                    options={{
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: '#FC5B27' },
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        
    );
}

export default StackAccount;
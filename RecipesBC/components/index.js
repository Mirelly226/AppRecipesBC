import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from "./login/context";
import Home from './tabs';
import Login from './login/stackLogin';



const RootStack = createStackNavigator();
function RootStackScreen({ user }) {
    return (
        <RootStack.Navigator headerMode="none">
            {user === null ? (

                <RootStack.Screen name="App" component={Login} headerMode="none" />
            ) : (

                    <RootStack.Screen name="Auth" component={Home} />
                )
            }
        </RootStack.Navigator>
    )
}

function App() {

    const [user, setUser] = useState(null);
    const authContext = useMemo(() => {
        return {
            login: () => {
                setUser("1");
            }
        }
    })
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <RootStackScreen user={user} />
            </NavigationContainer>
        </AuthContext.Provider>

    );
}


export default App;




import React from 'react';
import { createAppContainer,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './components/login/login';
import Home from './components/tabs';



const appNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  Inicio:{screen:Home}
},{
  initialRouteName:'Inicio'
})

export default createAppContainer (appNavigator);


import { createStackNavigator } from '@react-navigation/stack';
import App from '../App'
import Home from '../Home'
import Settings from '../Settings'
import React from 'react';

const Stack = createStackNavigator();

const MyStack = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

export default MyStack
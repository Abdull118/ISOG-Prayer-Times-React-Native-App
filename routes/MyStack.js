import { createStackNavigator } from '@react-navigation/stack';
import App from '../App'
import Home from '../Home'
import React from 'react';

const Stack = createStackNavigator();

const MyStack = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default MyStack
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from '../screens/TodoList';
import Login from '../screens/auth/Login';

const AppStack = createStackNavigator();

// Enums for App Screens
export const AppScreens = {
    Login: 'Login',
    TodoList: 'TodoList',
 }

//  Export Stack Navigator for App Screens, Will load login screen first 
const AppNavigator = () => {
    return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name={AppScreens.Login} component={Login} />
            <AppStack.Screen name={AppScreens.TodoList} component={TodoList} />
        </AppStack.Navigator>
    );
};
export default AppNavigator;

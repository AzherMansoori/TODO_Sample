/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TodoList from '../screens/TodoList';
import Login from '../screens/auth/Login';

const AuthStack = createStackNavigator();
export const AppScreens = {
    Login: 'Login',
    TodoList: 'TodoList',
 }
const AuthFlowNavigator = () => {

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name={AppScreens.Login} component={Login} />
            <AuthStack.Screen name={AppScreens.TodoList} component={TodoList} />
        </AuthStack.Navigator>
    );
};
export default AuthFlowNavigator;

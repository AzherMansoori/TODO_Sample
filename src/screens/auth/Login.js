/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';
import {AppScreens} from '../../navigators/AppNavigator';

export default function Login(props) {
  const {navigation} = props;
  useEffect(() => {
    authenticate();
  }, []);

  async function authenticate() {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      navigation.replace(AppScreens.TodoList);
    }
  }
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

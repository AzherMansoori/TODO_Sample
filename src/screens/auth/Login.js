/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';
import {AppScreens} from '../../navigators/AppNavigator';

export default function Login(props) {
  const {navigation} = props;
  const [isPinAvailable, setPinAvailable] = useState(true);
  // invoking expo authentication on login component mount.
  useEffect(() => {
    authenticate();
  }, []);

  // Call authenticateAsync will propmt user for device pin or fingerprint depend upon availability
  async function authenticate() {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.error === 'not_enrolled') {
      // If Device PIN is not available display message to set PIN.
      setPinAvailable(false);
    } else if (result.success) {
      // After Successful authentication redirect to todo list.
      navigation.replace(AppScreens.TodoList);
    }
  }
  // Open Device Security Settings to set Secure PIN
  const openSettings = () => {
    Linking.sendIntent('android.settings.SECURITY_SETTINGS');
  };

  return (
    <View style={styles.container}>
      {!isPinAvailable ? (
        <>
          <Text style={styles.text}>
            Seems you have not enrolled Secure PIN in your device. Click below
            to add
          </Text>
          <TouchableOpacity
            onPress={() => openSettings()}
            style={styles.button}>
            <Text style={[styles.text, {color: '#fff'}]}>Open Settings</Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontWeight: '500',
  },
  button: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'darkblue',
    width: '100%',
    height: 45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

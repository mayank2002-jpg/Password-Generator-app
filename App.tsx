import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//Form Validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 Characters')
    .max(16, 'Should be max of 16 character')
    .required('length is required'),
});

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

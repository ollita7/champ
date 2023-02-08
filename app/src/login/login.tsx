import React, {useRef, useState} from 'react';
import {Button, TextInput, View, Text, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import {Styles} from '../commmon/styles/styles';

export const Login = () => {
  //const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'red'}}>
      <Text>Welcome to champ</Text>
      <Text>We are so exited to see you!</Text>
      <View style={{flex: 1, width:'auto', backgroundColor: 'green'}}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={{backgroundColor: 'yellow', width: 'auto'}}>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={Styles.input}
              />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={Styles.input}
                secureTextEntry={true}
              />
              <Button onPress={handleSubmit} title="Login" />
            </View>
          )}
        </Formik>
      </View>
      
    </View>
  );
};

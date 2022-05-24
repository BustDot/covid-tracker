import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { TopNavigationAction, Divider, TopNavigation, Tooltip, Button, Input, Layout, StyleService, Text, useStyleSheet, Icon } from '@ui-kitten/components';
import  {DeviceEventEmitter} from 'react-native';
import '../user';

export default function SignIn ({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const styles = useStyleSheet(themedStyles);

  const PersonIcon = (props) => ( <Icon {...props} name='person'/> );

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const PasswordIcon = (props) => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const onForgotPasswordButtonPress = () => {
    navigation && navigation.navigate('ForgotPassword');
  };

  const onSignInButtonPress = () => {
    fetch('http://101.35.20.193:8088/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "userName": username,
          "userPassword": password,
        }),
      })
        .then(res => {
          if (res.ok) {
            res.json().then(data => {
              global.user = data.user;
              global.isLogin = true;
            });
            // navigation && navigation.reset();
            // navigation && navigation.navigate('Login');
            navigation && navigation.goBack();
            // navigation && navigation.navigate('TabNavigator');
            DeviceEventEmitter.emit('EventType');
          } else {
            // console.log(res.status);
          }
        })
        .catch(res => console.log("status: " + res.status));
  }
  
  const onSignUpButtonPress = () => {
    navigation && navigation.navigate('SignUp');
  };

  const HomeIcon = (props) => (
    <Icon {...props} onPress={() => {
      navigation.navigate("TabNavigator");
    }} name='home'/>
  );

  const returnToHome = () => (
    <React.Fragment>
        <TopNavigationAction icon={HomeIcon}/>
    </React.Fragment>
  );

  return (
    <Layout style={styles.container}>
      <TopNavigation
        alignment='center'
        title='Sign In'
        accessoryLeft={returnToHome}
      />
      <Divider/>
      <Layout style={styles.headerContainer}>
        <Text
          category='h1'
          status='control'>
          Hello
        </Text>
        <Text
          style={styles.signInLabel}
          category='s1'
          status='control'>
          Sign in to your account
        </Text>
      </Layout>
      <Layout
        style={styles.formContainer}
        level='1' 
        >
        <Input
          placeholder='Username'
          accessoryRight={PersonIcon}
          value={username}
          onChangeText={username => setUsername(username)}
          defaultValue={username}
        />
        <Input
          style={styles.passwordInput}
          placeholder='Password'
          accessoryRight={PasswordIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={password => setPassword(password)}
          defaultValue={password}
        />
      </Layout>
      <Layout style={styles.buttonContainer}>
        <Button
            style={styles.signInButton}
            size='giant'
            onPress={onSignInButtonPress}>
            SIGN IN
        </Button>
        <Button
            style={styles.signUpButton}
            appearance='ghost'
            status='basic'
            onPress={onSignUpButtonPress}>
            Don't have an account? Click here to sign up!
        </Button>
      </Layout>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 180,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 170,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  }
});



import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { TopNavigationAction, Divider, TopNavigation, Tooltip, Button, Input, Layout, StyleService, Text, useStyleSheet, Icon } from '@ui-kitten/components';
import  {DeviceEventEmitter} from 'react-native';
import '../user.js';

const testusers = [{
  "user_id":"admini",
  "user_name":"admin",
  "user_password":"123456",
  "user_sex":"male",
  "user_tel":"12345678901",
  "user_email":"admin@ad.com",
}];

export default function SignIn ({ navigation }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [users, setUsers] = useState();
  const styles = useStyleSheet(themedStyles);
  useEffect(() => {
    fetchData();
    DeviceEventEmitter.addListener("EventType", ()=>{
      fetchData();
    });
  }, []);

  async function fetchData() {
    let getData = await fetch('http://101.35.20.193:8088/login');
    let res = await getData.json();
    setUsers(res);
  }

  const PersonIcon = (props) => (
    <Icon {...props} name='person'/>
  );

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
    for (let i = 0; i < testusers.length; i++) {
      if (testusers[i].user_name === username && testusers[i].user_password === password) {
        global.user = testusers[i];
        global.isLogin = true;
        navigation && navigation.navigate('Login');
        // navigation && navigation.goBack();
        return;
      }
    }
    // 用户不存在，提示错误信息
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
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance='ghost'
            status='basic'
            onPress={onForgotPasswordButtonPress}>
            Forgot your password?
          </Button>
        </View>
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
    paddingBottom: 126,
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
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  }
});



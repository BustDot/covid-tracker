import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Datepicker, TopNavigationAction, Divider, TopNavigation, Tooltip, Button, Input, Layout, StyleService, Text, useStyleSheet, Icon } from '@ui-kitten/components';
import { DeviceEventEmitter} from 'react-native';
import '../user.js';

export default function SignIn ({ navigation }) {
  const [username, setUsername] = useState();
  const [userID, setUserID] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [dob,setDob] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [users, setUsers] = useState();

  const styles = useStyleSheet(themedStyles);

  useEffect(() => {
    fetchData();
    DeviceEventEmitter.addListener("EventType", () => {
      fetchData();
    });
  }, []);

  async function fetchData() {
    let getData = await fetch('http://101.35.20.193:8088/login');
    let res = await getData.json();
    setUsers(res);
  }

  const PersonIcon = (props) => ( <Icon {...props} name='person'/> );
  const IDIcon = (props) => ( <Icon {...props} name='archive'/> );
  const TelIcon = (props) => ( <Icon {...props} name='phone'/> );
  const EmailIcon = (props) => ( <Icon {...props} name='email'/> );
  const DobIcon = (props) => ( <Icon {...props} name='calendar'/> )

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const PasswordIcon = (props) => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const onSignInButtonPress = () => {
    navigation && navigation.navigate('SignIn');
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
        title='Sign Up A New Account'
        accessoryLeft={returnToHome}
      />
      <Divider/>
      <Layout style={styles.headerContainer}>
        <Text
          category='h1'
          status='control'>
          Welcome
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
        style={styles.inputMargin}
          placeholder='User ID'
          accessoryRight={IDIcon}
          value={userID}
          onChangeText={userID => setUserID(userID)}
          defaultValue={userID}
        />
        <Input
          style={styles.inputMargin}
          placeholder='Password'
          accessoryRight={PasswordIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={password => setPassword(password)}
          defaultValue={password}
        />
        <Input
          style={styles.inputMargin}
          placeholder='Email Address'
          accessoryRight={EmailIcon}
          value={email}
          onChangeText={email => setEmail(email)}
          defaultValue={email}
        />
        <Input
          style={styles.inputMargin}
          placeholder='Telephone Number'
          accessoryRight={TelIcon}
          value={tel}
          onChangeText={tel => setTel(tel)}
          defaultValue={tel}
        />
        <Datepicker
          style={styles.inputMargin}
          placeholder='Date of Birth'
          accessoryRight={DobIcon}
          date={dob}
          onSelect={setDob}
        />
      </Layout>
      <Layout style={styles.buttonContainer}>
        <Button
            style={styles.signUpButton}
            size='giant'
            onPress={onSignUpButtonPress}>
            SIGN UP
        </Button>
        <Button
            style={styles.signInButton}
            appearance='ghost'
            status='basic'
            onPress={onSignInButtonPress}>
            Already got an account? Click here to sign in!
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
    minHeight: 120,
    backgroundColor: 'color-primary-default',
  },

  formContainer: {
    paddingTop: 28,
    paddingHorizontal: 16,
    paddingBottom: 22,
  },

  signUpButton: {
    marginHorizontal: 16,
  },

  signInButton: {
    marginVertical: 5,
    marginHorizontal: 16,
  },

  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  
  inputMargin: {
    marginTop: 16,
  },

  forgotPasswordButton: {
    paddingHorizontal: 0,
  },

  buttonContainer: {
    justifyContent: 'flex-end',
  }
});



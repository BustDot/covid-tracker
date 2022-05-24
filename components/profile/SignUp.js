import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import {
  Select,
  SelectItem,
  TopNavigationAction,
  Divider,
  TopNavigation,
  Tooltip,
  Button,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
  Icon,
} from '@ui-kitten/components';
import {DeviceEventEmitter} from 'react-native';
import '../user';

export default function SignIn({navigation}) {
  const [username, setUsername] = useState();
  const [code, setCode] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [gender, setGender] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const styles = useStyleSheet(themedStyles);

  const PersonIcon = props => <Icon {...props} name="person" />;
  const CodeIcon = props => <Icon {...props} name="archive" />;
  const TelIcon = props => <Icon {...props} name="phone" />;
  const EmailIcon = props => <Icon {...props} name="email" />;
  const GenderIcon = props => <Icon {...props} name="heart" />;

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const PasswordIcon = props => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  const onSignInButtonPress = () => {
    navigation && navigation.navigate('SignIn');
  };

  const onVerifyButtonPress = () => {
    fetch('http://101.35.20.193:8088/sendCode', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "to": email,
        }),
      })
        .then(res => {
          if (res.ok) {
            res.json().then(data => console.log(data));
            DeviceEventEmitter.emit('EventType');
          } else {
            console.log(res.status);
          }
        })
        .catch(res => console.log(res.status));
  }

  const onSignUpButtonPress = () => {
    if (
      code?.length > 0 &&
      username?.length > 0 &&
      password?.length > 0 &&
      email?.length > 0 &&
      tel?.length > 0 &&
      gender in [1, 2, 3]
    ) {
      fetch('http://101.35.20.193:8088/registry', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: email,
          userName: username,
          userPassword: password,
          userSex: genderData[gender - 1],
          userTel: tel,
          verifyCode: code,
        }),
      })
        .then(res => {
            if (res.ok) {
            res.json().then(data => console.log(data));
            navigation && navigation.navigate('SignIn');
            DeviceEventEmitter.emit('EventType');
            } else {
            console.log(res.status);
            }
        })
        .catch(res => console.log(res.status));
    }
  };

  const HomeIcon = props => (
    <Icon
      {...props}
      onPress={() => {
        navigation.navigate('TabNavigator');
      }}
      name="home"
    />
  );

  const returnToHome = () => (
    <React.Fragment>
      <TopNavigationAction icon={HomeIcon} />
    </React.Fragment>
  );

  const genderData = ['Male', 'Female', 'Others'];
  const renderOption = title => <SelectItem title={title} />;

  return (
    <Layout style={styles.container}>
      <TopNavigation
        alignment="center"
        title="Sign Up A New Account"
        accessoryLeft={returnToHome}
      />
      <Divider />
      <Layout style={styles.headerContainer}>
        <Text category="h1" status="control">
          Welcome
        </Text>
      </Layout>
      <Layout style={styles.formContainer} level="1">
        <Input
          placeholder="Username"
          accessoryRight={PersonIcon}
          value={username}
          onChangeText={username => setUsername(username)}
          defaultValue={username}
        />
        <Input
          style={styles.inputMargin}
          placeholder="Password"
          accessoryRight={PasswordIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={password => setPassword(password)}
          defaultValue={password}
        />
        <Layout
            style={styles.verify}>
            <Input
            style={[styles.inputMargin,styles.email]}
            placeholder="Email Address"
            accessoryRight={EmailIcon}
            value={email}
            onChangeText={email => setEmail(email)}
            defaultValue={email}
            />
            <Button
                style={styles.verifyButton}
                onPress={onVerifyButtonPress}
                children={"Verify"}/>
        </Layout>
        <Input
          style={styles.inputMargin}
          placeholder="Verifying Code"
          accessoryRight={CodeIcon}
          value={code}
          onChangeText={code => setCode(code)}
          defaultValue={code}
        />
        <Input
          style={styles.inputMargin}
          placeholder="Telephone Number"
          accessoryRight={TelIcon}
          value={tel}
          onChangeText={tel => setTel(tel)}
          defaultValue={tel}
        />
        <Select
          style={styles.inputMargin}
          selectedIndex={gender}
          placeholder={'Select Gender'}
          accessoryRight={GenderIcon}
          value={genderData[gender - 1]}
          onSelect={gender => setGender(gender)}>
          {genderData.map(renderOption)}
        </Select>
      </Layout>
      <Layout style={styles.buttonContainer}>
        <Button
          style={styles.signUpButton}
          size="giant"
          onPress={()=>onSignUpButtonPress()}>
          SIGN UP
        </Button>
        <Button
          style={styles.signInButton}
          appearance="ghost"
          status="basic"
          onPress={onSignInButtonPress}>
          Already got an account? Click here to sign in!
        </Button>
      </Layout>
    </Layout>
  );
}

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
  },

  verify: {
    flexDirection: 'row',
  },

  verifyButton: {
    marginLeft: 8,
    marginTop: 13,
    height: 45,
    width: 90,
  },

  email: {
    width: 280,
    
  },
});

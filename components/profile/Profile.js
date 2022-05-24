import React, { useState, useEffect } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  ScrollView,
  DeviceEventEmitter,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Avatar,
  Text,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Layout,
  Divider,
  List,
  ListItem,
  Button,
  StyleService,
  useStyleSheet,
  ApplicationProvider,
} from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';
import '../user';

export default function Profile({navigation}) {
  const [userData, setUserData] = useState();
  useEffect(() => {
    readUser();
    DeviceEventEmitter.addListener("EventType", ()=>{
        readUser();
      });
  }, [global.isLogin])

  function readUser() {
      if (global.isLogin === true) {
          setUserData(userData);
      } else {
          setUserData(global.visitor);
      }
  }

  const listItem = [
    {title: 'id', description: global.user.userId},
    {title: 'username', description: global.user.userName},
    {title: 'gender', description: global.user.userSex},
    {title: 'telephone', description: global.user.userTel},
    {title: 'email', description: global.user.userEmail},
  ];

  const quit = () => {
    global.isLogin = false;
    readUser();
    navigation && navigation.navigate('SignIn');
  };

  const returnText = text => <Text>{text}</Text>;

  const renderItem = ({item}) => (
    <ListItem
      style={styles.listItem}
      accessoryLeft={() => returnText(item.title)}
      accessoryRight={() => returnText(item.description)}
    />
  );

  return (
    <Layout style={styles.container}>
      <Layout style={styles.avatarContainer}>
        <Image style={styles.avatar} source={require('../../assets/1.jpg')} />
      </Layout>
      <Divider />
      <List
        data={listItem}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        style={{marginLeft: 5, marginRight: 5}}
      />
      <Button size="giant" onPress={() => quit()}>
        QUIT
      </Button>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listItem: {
    height: 64,
  },

  avatarContainer: {
    alignItems: 'center',
    padding: 49,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
});
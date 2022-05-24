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
  Text,
  Layout,
  Divider,
  List,
  ListItem,
  Button,
} from '@ui-kitten/components';
import '../user';

const visitor = {
  userId: 'iamavisitor',
  userName: 'visitor',
  userSex: '-',
  userTel: '-',
  userEmail: '-',
}

export default function Profile({navigation}) {
  const [userData, setUserData] = useState({});
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    readUser();
    DeviceEventEmitter.addListener("EventType", ()=>{
        readUser();
        console.log(userData, global.user);
      });
  }, [])

  function readUser() {
    if(!global.isLogin) {
      setUserData(global.user);
      setisLogin(false);
    }
    else {
      setUserData(global.user);
      setisLogin(true);
    }
  }

  let listItem = [
    // {title: 'id', description: userData.userId},
    {title: 'Username', description: userData.userName},
    {title: 'Gender', description: userData.userSex},
    {title: 'Phone Number', description: userData.userTel},
    {title: 'Email', description: userData.userEmail},
  ];

  const quit = () => {
    global.user = visitor;
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
    <Layout style={styles.container} level='2'>
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
        {isLogin ? 'QUIT' : 'LOGIN'}
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
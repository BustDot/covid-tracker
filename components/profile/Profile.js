import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, DeviceEventEmitter, TouchableWithoutFeedbac } from 'react-native';
import { Avatar, Text, Icon, TopNavigation, TopNavigationAction, Layout, Divider, List, ListItem, Button, StyleService, useStyleSheet } from '@ui-kitten/components';
import '../user.js';

export default function Profile({ navigation, route }) {
  const quit = () => {
    isLogin = false;
    user = visitor;
    navigation && navigation.navigate('SignIn');
  }

  const returnText = (text) => {
    return (<Text>{text}</Text>)
  }

  const renderItem = ({item}) => (
    <ListItem style={styles.listItem}
      accessoryLeft={()=>returnText(item.title)}
      accessoryRight={()=>returnText(item.description)}
    />
  );

  const listItem = [
    {title: "id", description: user.user_id},
    {title: "username", description:user.user_name},
    {title: "gender", description: user.user_sex},
    {title: "telephone", description: user.user_tel},
    {title: "email", description: user.user_email},
  ];
  
  return (
    <Layout style={styles.container}>
      <Layout style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../assets/1.jpg')}
        />
      </Layout>
      <Divider/>
      <List
        data={listItem}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        style={{marginLeft: 5, marginRight:5}}
      />
      <Button
        size='giant'
        onPress={() => quit()}>
          QUIT
      </Button>
    </Layout>
  );
};

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
    
  }
});
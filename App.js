import React, { Component, useState } from 'react';
import {useColorScheme} from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Emergency from './components/Emergency';
import Help from './components/help/help';
import Profile from './components/profile/Profile';
import SignIn from './components/profile/SignIn';
import SignUp from './components/profile/SignUp';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import { BottomNavigation, BottomNavigationTab, IconRegistry, Icon } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { Submit } from './components/help/submit';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './components/user';

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const EmergencyIcon = (props) => (
  <Icon {...props} name='thermometer-outline'/>
);

const HelpIcon = (props) => (
  <Icon {...props} name='smiling-face-outline'/>
);

const ProfileIcon = props => <Icon {...props} name="person-outline" />;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home'  icon={HomeIcon}/>
    <BottomNavigationTab title='Emergency'  icon={EmergencyIcon}/>
    <BottomNavigationTab title='Help'  icon={HelpIcon}/>
    <BottomNavigationTab title="Profile" icon={ProfileIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{headerShown: false}}>
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Emergency' component={Emergency}/>
    <Tab.Screen name='Help' component={Help}/>
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);


export default function App() {
    const isDarkMode = useColorScheme() === 'dark';
    let judgeTheme;
    if(isDarkMode)
      judgeTheme = { ...eva.dark, ...theme };
    else
      judgeTheme = { ...eva.light, ...theme };

    return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={judgeTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{headerShown: false}}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Submit" component={Submit} />
            <Stack.Screen name="Login" component={Profile} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>

    )
}
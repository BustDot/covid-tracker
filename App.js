import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Emergency from './components/Emergency';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import { BottomNavigation, BottomNavigationTab, IconRegistry, Icon } from '@ui-kitten/components';
import { default as theme } from './theme.json';

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const EmergencyIcon = (props) => (
  <Icon {...props} name='thermometer-outline'/>
);

const { Navigator, Screen } = createBottomTabNavigator();
const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home'  icon={HomeIcon}/>
    <BottomNavigationTab title='Emergency'  icon={EmergencyIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{headerShown: false}}>
    <Screen name='Home' component={Home}/>
    <Screen name='Emergency' component={Emergency}/>
  </Navigator>
);


export default function App() {
    return (
    <>
      <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <NavigationContainer>
            <TabNavigator/>
          </NavigationContainer>
      </ApplicationProvider>
    </>

    )
}
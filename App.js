import React, { Component } from 'react';
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Emergency from './components/Emergency';
import Help from './components/help/help';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import { BottomNavigation, BottomNavigationTab, IconRegistry, Icon } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { Submit } from './components/help/submit';
import { Detail } from './components/help/detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeIcon = (props) => (
  <Icon {...props} name='home-outline'/>
);

const EmergencyIcon = (props) => (
  <Icon {...props} name='thermometer-outline'/>
);

const HelpIcon = (props) => (
  <Icon {...props} name='smiling-face-outline'/>
);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Home'  icon={HomeIcon}/>
    <BottomNavigationTab title='Emergency'  icon={EmergencyIcon}/>
    <BottomNavigationTab title='Help'  icon={HelpIcon}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Tab.Navigator tabBar={props => <BottomTabBar {...props} />} screenOptions={{headerShown: false}}>
    <Tab.Screen name='Home' component={Home}/>
    <Tab.Screen name='Emergency' component={Emergency}/>
    <Tab.Screen name='Help' component={Help}/>
  </Tab.Navigator>
);


export default function App() {
    return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{headerShown: false}}>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Help" component={Help} />
            <Stack.Screen name="Submit" component={Submit} />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>

    )
}
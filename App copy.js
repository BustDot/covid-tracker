import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Emergency from './components/Emergency';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
} from '@ui-kitten/components';
import { default as theme } from './theme.json';

const Tab = createBottomTabNavigator();
export default function App() {
    return (
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor:'white',
              tabBarStyle: { backgroundColor: '#3E4F7A'},
              headerShown: false,
            }}
            >
                <Tab.Screen
                name='Home'
                component={Home}
                options={{
                  tabBarIcon: ({focused}) => (
                    <Icon name='home' color={focused ? 'white' : 'lightgrey'} size={30} />
                  )
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='Emergency'
                component={Emergency}
                options={{
                  tabBarIcon: ({focused}) => (
                    <Icon name='ambulance' color={focused ? 'white' : 'lightgrey'} size={30} />
                  )
                }}
            ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    </ApplicationProvider>
    )
}
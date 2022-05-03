import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Emergency from './components/Emergency';

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name='Home'
                component={Home}
            ></Tab.Screen>
            <Tab.Screen
                name='Emergency'
                component={Emergency}
            ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
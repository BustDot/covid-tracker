import React, { Component } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import {styles} from './Home';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Emergency() {
    return (
        <View style={style.container}>
            <View style={style.emergency}>
                <Text style={style.text}>What to do if you are sick?</Text>
                <View style={style.call}>
                    <Icon name='call' color='white' size={35} />
                    <Text style={style.callText}>Call 911 immediately if you are having a medical emergency.</Text>
                </View>          
            </View>     
            <View style={{marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: '700'}}>Resource</Text>
                <View style={{backgroundColor: 'white', width: 200, height: 3}}></View>
            </View>
            <View style={style.resource}>
                <View style={style.card}>
                    <Text style={style.cardText}>CDC in Action</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://www.zhihu.com/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>

                <View style={style.card}>
                    <Text style={style.cardText}>Communication Resource</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://www.zhihu.com/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>

                <View style={style.card}>
                    <Text style={style.cardText}>Global COVID-19</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://www.zhihu.com/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>

                <View style={style.card}>
                    <Text style={style.cardText}>Guidance for COVID-19</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://www.zhihu.com/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>

                <View style={style.card}>
                    <Text style={style.cardText}>Laboratories</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://www.zhihu.com/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#2F3A64',
        padding: 15,
    },
    emergency: {
        backgroundColor: '#3E4F7A',
        marginTop: 0,
        height: 170,
        borderRadius: 15,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: '700',
        paddingTop: 30
    },
    call: {
        backgroundColor: 'brown',
        width: "100%",
        height: 100,
        borderRadius: 15,
        marginTop: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 18,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    callText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    },
     cardText: {
         fontSize: 20,
         color: 'white',
         fontFamily: '600',
     },
     card: {
        backgroundColor: "#3E4F7A",
        marginVertical : 10,
        height: 65,
        borderRadius: 15,
        justifyContent: 'space-between',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 18,
        borderLeftColor: 'lightgreen'

     }



})
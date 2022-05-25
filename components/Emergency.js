import React, { Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Layout, Text, useTheme } from '@ui-kitten/components';


export default function Emergency() {
    const theme = useTheme();
    return (
        <Layout style={{flex:1, padding: 15}} level='2'>
            <View style={[{backgroundColor: theme['color-basic-transparent-300']}, style.emergency]}>
                <Text style={style.text}>What to do if you are sick?</Text>
                <View style={style.call}>
                    <Icon name='call' color='white' size={35} />
                    <Text style={style.callText}>Call 120 immediately if you are having a medical emergency.</Text>
                </View>          
            </View>     
            <View style={{marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 30, fontWeight: '700'}}>Resource</Text>
                <View style={{backgroundColor: 'white', width: 200, height: 3}}></View>
            </View>
            <View style={style.resource}>
                <View style={[{backgroundColor: theme['color-basic-transparent-300']}, style.card]}>
                    <Text style={style.cardText}>CDC in Action</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://www.chinacdc.cn/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>

                <View style={[{backgroundColor: theme['color-basic-transparent-300']}, style.card]}>
                    <Text style={style.cardText}>Communication Resource</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('http://publichealth.lacounty.gov/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>

                <View style={[{backgroundColor: theme['color-basic-transparent-300']}, style.card]}>
                    <Text style={style.cardText}>Global COVID-19</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://covid19.who.int/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>

                <View style={[{backgroundColor: theme['color-basic-transparent-300']}, style.card]}>
                    <Text style={style.cardText}>Guidance for COVID-19</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://www.cdc.gov/coronavirus/2019-ncov/index.html')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>

                <View style={[{backgroundColor: theme['color-basic-transparent-300']}, style.card]}>
                    <Text style={style.cardText}>Laboratories</Text>
                    <Icon name='chevron-forward' color='white' size={35} onPress={() => {
                        Linking
                        .openURL('https://www.zhihu.com/')
                        .catch(err => console.error("Error", err))
                    }}/>
                </View>
            </View>
        </Layout>
    )
}


const style = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#2F3A64',
        padding: 15,
    },
    emergency: {
        marginTop: 0,
        height: 170,
        borderRadius: 15,
        alignItems: 'center'
    },
    text: {
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
        fontWeight: '600',
        color: 'white'
    },
     cardText: {
         fontSize: 20,
         fontFamily: '600',
     },
     card: {
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
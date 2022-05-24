import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Layout, Autocomplete, AutocompleteItem, Button, Text, Divider, useTheme, useStyleSheet, StyleService } from '@ui-kitten/components';
import { countryData } from './countries';

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

export default function Home() {
    const theme = useTheme();
    const [countryImg, setCountryImg] = useState();
    const [caseStats, setCaseStats] = useState();
    const [search, setSearch] = useState('');
    const [stats, setStats] = useState({});
    const [Country, SetCountry] = useState('Global');

    const [value, setValue] = React.useState(null);
    const [data, setData] = React.useState(countryData);

    const onSelect = (index) => {
        console.log(index);
        setSearch(data[index].title);
        setValue(data[index].title);
      };

    const onChangeText = (query) => {
        console.log(query);
        setValue(query);
        setSearch(query);
        setData(countryData.filter(item => filter(item, query)));
      };
    
    const renderOption = (item, index) => (
        <AutocompleteItem
          key={index}
          title={item.title}
        />
      );

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        let getData = await fetch('https://api.covid19api.com/summary');
        let res = await getData.json();
        setCaseStats(res);
        setStats({
            ActiveCases: res.Global.TotalConfirmed,
            NewCases: res.Global.NewConfirmed,
            Deaths: res.Global.NewDeaths,
            Recovered: res.Global.NewRecovered,
        });
        SetCountry('Global');
    }

    function showResults() {
        console.log(search);
        caseStats.Countries.map((item, index)=> {
            const {Country, CountryCode} = item;
            if(search === Country) {
                setStats({
                    ActiveCases: item.TotalConfirmed,
                    NewCases: item.NewConfirmed,
                    Deaths: item.NewDeaths,
                    Recovered: item.NewRecovered,
                });
                SetCountry(Country);
                setCountryImg(CountryCode.toLowerCase());
            }
        });
        Keyboard.dismiss();
        setSearch('');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Layout style={styles.container} level='2'>
                <View style={styles.searchContainer}>
                    <Autocomplete
                    style={styles.input} 
                    size={'large'}
                    placeholder='Search country'
                    value={value}
                    onSelect={onSelect}
                    onChangeText={
                        onChangeText
                        }>
                    {data.map(renderOption)}
                    </Autocomplete>
                    <Button style={styles.searchButton} onPress={() => showResults()}>
                        <Icon name='search' color='white' size={50} />
                    </Button>
                </View>

                <View style={styles.headingContainer}>
                    <View style={styles.headings}>
                        <Text style={styles.headingText}>Stay Home</Text>
                        <Text style={styles.headingText}>Stay Safe</Text>
                    </View>
                    <Image style={styles.headingImage} source={require('../assets/1.jpg')} />
                </View>

                <Divider style={{marginTop: 15}} />

                <View>
                    <View style={[{backgroundColor: theme['color-basic-transparent-300']}, styles.countryHeading]}>
                        <Image style={{width: 20, height: 20, marginRight: 10, borderRadius: 5}}
                        source={Country === 'Global' ? null : { uri: `https://countryflagsapi.com/png/${countryImg}`}}
                        />
                        <Text style={styles.countryName}>{Country}</Text>
                    </View>

                    <View style={styles.cards}>
                        <View style={[styles.card, {borderLeftColor: 'yellow', backgroundColor: theme['color-basic-transparent-300']}]}>
                            <Text style={styles.cardText}>Active Cases</Text>
                            <Text style={[styles.text, {color: 'yellow'}]}>{stats.ActiveCases}</Text>
                        </View>

                        <View style={[styles.card, {borderLeftColor: 'orange', backgroundColor: theme['color-basic-transparent-300']}]}>
                            <Text style={styles.cardText}>New Cases</Text>
                            <Text style={[styles.text, {color: 'orange'}]}>{stats.NewCases}</Text>
                        </View>

                        <View style={[styles.card, {borderLeftColor: 'red', backgroundColor: theme['color-basic-transparent-300']}]}>
                            <Text style={styles.cardText}>Deaths</Text>
                            <Text style={[styles.text, {color: 'red'}]}>{stats.Deaths}</Text>
                        </View>

                        <View style={[styles.card, {borderLeftColor: 'lightgreen', backgroundColor: theme['color-basic-transparent-300']}]}>
                            <Text style={styles.cardText}>Recovered</Text>
                            <Text style={[styles.text, {color: 'lightgreen'}]}>{stats.Recovered}</Text>
                        </View>
                    </View>
                </View>
            </Layout>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#2F3A64',
        padding: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    input: {
        height: 50,
        borderRadius: 15,
        fontSize: 18,
        minWidth: '80%',
        minHeight: '100%',
        marginRight: 10,
        color: 'lightgrey',
    },
    searchButton: {
        borderRadius: 15,
        padding: 10,
        height: 48,
        alignItems: 'center',
    },
    headingContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headingText: {
        fontSize: 35,
        fontWeight: '700',
    },
    headingImage: {
        width: 150,
        height: 90,
        borderRadius: 15,
    },
    countryHeading: {
        marginTop: 10,
        alignItems: 'center',
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    countryName: {
        fontSize: 25,
        fontWeight: '700',
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    },
    card: {
        backgroundColor: '#6690FF',
        width: 170,
        height: 100,
        borderRadius: 15,
        marginBottom: 10,
        padding: 10,
        borderLeftWidth: 15,
        borderLeftColor: 'white',
    },
    cardText: {
        fontSize: 20,
        fontWeight: '600',
    },
    text: {
        fontSize: 23,
        fontWeight: '700',
        marginTop: 20,
    }
})
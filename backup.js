import React from 'react';
import {
    Button, View, FlatList,
    StyleSheet, Text, StatusBar, Alert, Image
} from 'react-native';

let DATA = [
    {
        login: 'mojombo',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        name: 'Tom Preston -Werner',
        blog: 'http://tom.preston -werner.com',
        location: 'San Francisco'
    }, {
        login: 'defunkt',
        avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
        name: 'Chris Wanstrath',
        blog: 'http://chriswanstrath.com/',
        location: 'San Francisco'
    }, {
        login: 'pjhyett',
        avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
        name: 'PJ Hyett',
        blog: 'https://hyett.com',
        location: 'San Francisco'
    }, {
        login: 'wycats',
        avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
        name: 'Yehuda Katz',
        blog: 'http://yehudakatz.com',
        location: 'San Francisco'
    }, {
        login: 'ezmobius',
        avatar_url: 'https://avatars0.githubusercontent.com/u/5?v=4',
        name: 'Ezra Zygmuntowicz',
        blog: 'http://stuffstr.com',
        location: 'In the NW'
    }, {
        login: 'ivey',
        avatar_url: 'https://avatars0.githubusercontent.com/u/6?v=4',
        name: 'Michael D. Ivey',
        blog: 'http://gweezlebur.com',
        location: 'Bay Minette , AL'
    }, {
        login: 'evanphx',
        avatar_url: 'https://avatars0.githubusercontent.com/u/7?v=4',
        name: 'Evan Phoenix',
        blog: 'http://blog.fallingsnow.net',
        location: 'Los Angeles , CA'
    }, {
        login: 'vanpelt',
        avatar_url: 'https://avatars1.githubusercontent.com/u/17?v=4',
        name: 'Chris Van Pelt',
        blog: 'vandev.com',
        location: 'San Francisco'
    }, {
        login: 'wayneeseguin',
        avatar_url: 'https://avatars0.githubusercontent.com/u/18?v=4',
        name: 'Wayne E. Seguin',
        blog: '',
        location: 'Buffalo , NY'
    }, {
        login: 'brynary',
        avatar_url: 'https://avatars0.githubusercontent.com/u/19?v=4',
        name: 'Bryan Helmkamp',
        blog: 'http://codeclimate.com',
        location: 'New York City'
    }, {
        login: 'kevinclark',
        avatar_url: 'https://avatars3.githubusercontent.com/u/20?v=4',
        name: 'Kevin Clark',
        blog: 'http://glu.ttono.us',
        location: null
    }
];

const App = () => {

    const deleteItemById = (item) => {
        console.log(DATA.length);
        for (var i = 0; i < DATA.length; i++) {
            if (DATA[i] === item) {
                DATA.splice(i, 1);
            }
        }
        console.log(DATA.length);
    };

    const llist = (item) => {
        return (
            <View style={styles.row}>
                <Image
                    style={styles.photo}
                    source={{
                        uri: item.avatar_url,
                    }} />
                <Text style={styles.item}
                    onPress={() => Alert.alert(item.login, "name: " + item.name + '\n' + "blog: " + item.blog + "\nlocation:" + item.location)}>
                    {item.name}
                </Text>
                <Button
                    style={styles.button}
                    title="delete"
                    onPress={() => {
                        deleteItemById(item);
                    }}
                />
            </View>
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) =>
                    llist(item)
                }
            // ItemSeparatorComponent={renderSeparator()}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#EEA9A9',
        paddingLeft: 15,
        paddingTop: 3,
    },
    item: {
        flex: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    photo: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    button: {
        flex: 1,
        height: '10%',
    }
});

export default App;
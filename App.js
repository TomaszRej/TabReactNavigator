/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

class Home extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Home </Text>
            </View>
        );
    }
}

class Settings extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Settings </Text>
            </View>
        );
    }
}

const AppNavigator = createBottomTabNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'HomeTab',
            // need to import react vector icon Ionicons
            // tabBarIcon: ({tintColor }) => {
            //     <Icon name='ios-home'size={24}/>
            // }

        }
    },
    Settings: {screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            // need to import react vector icon Ionicons
            // tabBarIcon: ({tintColor }) => {
            //     <Icon name='ios-settings'size={24}/>
            // }
        }
    }


},{
    //router config
    initialRouteName: 'Settings',
    order: ['Settings', 'Home'],

    //style tab bars
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        tabBarPosition: 'Top'
    },
});
const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render


export default AppContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

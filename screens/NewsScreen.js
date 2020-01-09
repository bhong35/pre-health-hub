// import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
// import { ExpoLinksView } from '@expo/samples';
import News from '../components/News';

const NewsScreen = () => {
    return (
        <View>
            <News />
        </View>
    );
}

export default NewsScreen;

NewsScreen.navigationOptions = {
    title: 'Links',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});

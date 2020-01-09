// import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
// import { ExpoLinksView } from '@expo/samples';
import News from '../components/News';

const NewsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text>Hello World</Text>
            <View>
                <News />
            </View>
        </ScrollView>
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

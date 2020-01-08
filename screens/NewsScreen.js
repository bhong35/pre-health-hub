import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import News from '../components/News';

export default function NewsScreen() {
    return (
        <ScrollView style={styles.container}>
            <News />
        </ScrollView>
    );
}

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

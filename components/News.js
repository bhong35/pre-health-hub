import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import axios from 'axios';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.getNews = this.getNews.bind(this);
    }

    componentDidMount() {
        this.getNews();
    }

    getNews() {
        axios.get('/get/news')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <View styles={styles.container}>
                <Text>Another hi</Text>
                <Text styles={styles.newsText}>Hello World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    newsText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
});
import React, { Component } from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    SafeAreaView,
    Button
} from 'react-native';
import axios from 'axios';
import Articles from './Articles';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ["one", "two"]
        };

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
                <SafeAreaView>
                    <FlatList
                        style={styles.list}
                        data={this.state.tasks}
                        renderItem={({ item, index }) =>
                            <View>
                                <View style={styles.listItemCont}>
                                    <Text style={styles.listItem}>
                                        {item.text}
                                    </Text>
                                    <Button title="X" onPress={() => this.deleteTask(index)} />
                                </View>
                                <View style={styles.hr} />
                            </View>}
                    />
                </SafeAreaView>
                <Text>Hi!</Text>
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
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
import config from '../config';
import Article from './Article';
import compareVersions from 'compare-versions';
import Booboo from '../assets/images/booboo.png';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
        this.getNews = this.getNews.bind(this);
    }

    componentDidMount() {
        this.getNews();
    }

    // ! used in Articles
    getNews() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${config.password.apiKey}`)
        .then(response => {
            let array = response.data.articles;
            let data = [];
            for (let i = 0; i < array.length; i++) {
                data.push({
                    title: array[i].title,
                    author: array[i].author,
                    image: array[i].urlToImage,
                    url: array[i].url
                    // data: [array[i].author, array[i].urlToImage, array[i].url],
                })
            }
            return data;
        })
        .then(response => {
            this.setState({
                articles: response
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <View styles={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.state.articles}
                    renderItem={({ item }) =>
                        <View>
                            <View style={styles.listItemCont} onPress={() => Linking.openURL(item.url)}>
                                <Image 
                                source={ item.image ? { uri: item.image } : Booboo }
                                style={styles.image}>
                                </Image>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.author}>
                                    {item.author}
                                </Text>
                            </View>
                            <View style={styles.hr} />
                        </View>}
                    keyExtractor={item => item.url}
                />
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
    list: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    listItemCont: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,

    },
    image: {
        width: 50,
        height: 50,
        overflow: 'hidden',
        borderRadius: 5
    },
    title: {
    }
});
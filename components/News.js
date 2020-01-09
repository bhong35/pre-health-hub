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

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };

        this.getNews = this.getNews.bind(this);
    }

    componentDidMount() {
        this.getNews();
    }

    getNews() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${config.password.apiKey}`)
        .then(response => {
            let array = response.data.articles;
            let data = [];
            for (let i = 0; i < response.data.articles.length; i++) {
                data.push({
                    title: array[i].title,
                    // data: [array[i].author, array[i].urlToImage, array[i].url],
                    author: array[i].author,
                    image: array[i].urlToImage,
                    url: array[i].url
                })
            }
            return data;
        })
        .then(response => {
            this.setState({
                listData: response
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <View styles={styles.container}>
                <Articles listData={this.state.listData} />
            </View>
        );
    }

    // render() {
    //     return (
    //         <View styles={styles.container}>
    //             <FlatList
    //                 style={styles.list}
    //                 data={this.state.articles}
    //                 renderItem={({ item, index }) =>
    //                     <View>
    //                         <View style={styles.listItemCont} onPress={() => Linking.openURL(item.url)}>
    //                             <Text style={styles.title} key={index}>
    //                                 {item.title}
    //                             </Text>
    //                             <Text style={styles.author} key={index}>
    //                                 {item.author}
    //                             </Text>
    //                             <Image src={item.urlToImage} style={styles.image} key={index}></Image>
    //                         </View>
    //                         <View style={styles.hr} />
    //                     </View>}
    //             />
    //         </View>
    //     );
    // }
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
        marginBottom: 10
    }
});
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    SectionList
} from 'react-native';
import { Linking } from 'expo';

export default function Articles(props) {
    console.log("!!!", props.articles);    
    return(
        <View>
            {props.articles.map((item, index) => {
                return <View style={styles.listItemCont} onPress={() => Linking.openURL(item.url)} key={index}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.author}>
                        {item.author}
                    </Text>
                    <Image source={{uri: item.urlToImage}} style={styles.image}></Image>
                </View>
            })}
        </View>
    );
    // return(
    //     <View>
    //         {props.articles.map((item, index) => {
    //             return <View style={styles.listItemCont} onPress={() => Linking.openURL(item.url)} key={index}>
    //                 <Text style={styles.title}>
    //                     {item.title}
    //                 </Text>
    //                 <Text style={styles.author}>
    //                     {item.author}
    //                 </Text>
    //                 <Image source={{uri: item.urlToImage}} style={styles.image}></Image>
    //             </View>
    //         })}
    //     </View>
    // );
}

// ! need to edit
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

{/* <SafeAreaView style={styles.container}>
    <Text>Page content</Text>
</SafeAreaView>
  );
} */}
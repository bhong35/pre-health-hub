import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    FlatList,
    SectionList
} from 'react-native';
import { Linking } from 'expo';
import SafeAreaView from 'react-native-safe-area-view';
// import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
// import Article from './Article.js';
// import { blue } from 'ansi-colors';

// ! FlatList - Works only for lists
// export default function Articles(props) {
//     let data = props.articles;
//     console.log("!!!!", data);

//     function Item({ title, author, image, url }) {
//         return (
//             <View style={styles.item} onPress={() => Linking.openURL(url)}>
//                 <Text style={styles.title}>{title}</Text>
//                 <Text style={styles.author}>{author}</Text>
//                 <Image style={{ width: 50, height: 50 }} source={{ uri: image }}></Image>
//             </View>
//         );
//     }

//     return (
//         <FlatList
//             data={data}
//             keyExtractor={(item, index) => item + index}
//             renderItem={({ item }) => <Image source={`${item.url}`}/>}
//             renderSectionHeader={({ section: { title } }) => (
//                 <Text style={styles.header}>{title}</Text>
//             )}
//         />
//     )
// }

// ! SectionList - Works only for lists
// export default function Articles(props) {
//     const data = props.articles;
//     console.log("!!!!", data);

//     function Item({ title, author, image, url }) {
//         return (
//             <View style={styles.item} onPress={() => Linking.openURL(url)}>
//                 <Text style={styles.title}>{title}</Text>
//                 <Text style={styles.author}>{author}</Text>
//                 <Image style={{ width: 50, height: 50 }} source={{ uri: image }} />
//             </View>
//         );
//     }

//     return (
//         <SafeAreaView style={StyleSheet.container}>
//             <SectionList
//                 sections={data}
//                 keyExtractor={(item, index) => item + index}
//                 renderItem={({ item }) => <Item
//                     title={item.title}
//                     author={item.data}
//                     image={item.data}
//                     url={item.data}
//                 />}
//                 renderSectionHeader={({ section: { title } }) => (
//                     <Text style={styles.header}>{title}</Text>
//                 )}
//             />
//         </SafeAreaView>
//     )
// }

// ! native-base
// export default function Articles(props) {
//     const data = props.articles;
//     return (
//         <Container>
//             <Header />
//             <Content>
//                 <List>
//                     {data.map((item, index) => {
//                         return <Article item={item} key={index} />
//                     })}
//                 </List>
//             </Content>
//         </Container>
//     )
// }

// ! **** FlatList
// export default function Articles(props) {
//     const data = props.articles;
//     console.log("FLATLIST DATA!!!!", data);

//     return (
//         <View>
//             <FlatList 
//             style={styles.list}
//             data={data}
//             renderItem={({ item }) => {
//                 <View>
//                     <View style={styles.item}>
//                         <Text>{item.title}</Text>
//                     </View>
//                     <View style={styles.item}>
//                         <Text>{item.author}</Text>
//                     </View>
//                     <View>
//                         <Image 
//                         source={{ uri: item.image }}
//                         style={{ width: 66, height: 58 }}
//                         />
//                     </View>
//                 </View>   
//             }}
//                 keyExtractor={(item, index) => item + index}
//             />
//         </View>
//     );
// }


// ! **** SectionList - utilizes Item as representative component for all 4 sub-categories ****
// export default function Articles(props) {
//     const articles = props.articles;
//     console.log("!!!!", articles);
//     function Item({ title, author, image, url }) {
//         return (
//             <View style={styles.item} onPress={() => Linking.openURL(url)}>
//                 <Text style={styles.title}>{title}</Text>
//                 <Text style={styles.author}>{author}</Text>
//                 <Image style={styles.image} source={{uri: image}}></Image>
//             </View>
//         );
//     }

//     return(
//         <SafeAreaView style={StyleSheet.container}>
//             <SectionList
//                 sections={articles} 
//                 keyExtractor={(item, index) => item + index}
//                 renderItem={({ item }) => <Item 
//                     title={item.title} 
//                     author={item.data} 
//                     image={item.data} 
//                     url={item.data}
//                 />}
//                 renderSectionHeader={({ section: { title } }) => (
//                     <Text style={styles.header}>{title}</Text>
//                 )}
//             />            
//         </SafeAreaView>
//     )
// }


// ! **** SectionList - Trying separate components for each component within section ****
// function Title({ title, url }) {
//     return (
//         <View style={styles.item} onPress={() => Linking.openURL(url)}>
//             <Text style={styles.title}>{title}</Text>
//         </View>
//     );
// }

// function Author({ author, url }) {
//     return (
//         <View style={styles.item} onPress={() => Linking.openURL(url)}>
//             <Text style={styles.author}>{author}</Text>
//         </View>
//     );
// }

// function Thumbnail({ image, url }) {
//     return (
//         <View style={styles.item} onPress={() => Linking.openURL(url)}>
//             <Image source={{ uri: image }} style={styles.image}>{image}</Image>
//         </View>
//     );
// }

// export default function Articles(props) {
//     const data = props.articles;
//     console.log("!!!!", data);

//     return(
//         <SafeAreaView style={StyleSheet.container}>
//             <SectionList
//                 sections={data} 
//                 keyExtractor={(item, index) => item + index}
//                 renderItem={({ item }) => <Title title={item.title} url={item.data} />}
//                 // renderItem={({ item }) => <Author author={item.author} url={item.data} />}
//                 // renderItem={({ item }) => <Thumbnail image={item.image} url={item.data} />}
//                 renderSectionHeader={({ section: { title } }) => (
//                     <Text style={styles.header}>{title}</Text>
//                 )}
//             />            
//         </SafeAreaView>
//     )
// }

    // * Works without list tags
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
// }

// ! need to edit
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {

    },
    title: {
        fontSize: 50,
        fontWeight: "bold"
    },
    author: {
        fontSize: 10
    },
    image: {
        flex: 1,
        width: 50,
        height: 50
    }
});
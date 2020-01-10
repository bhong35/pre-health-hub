import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
       <View style={styles.text}>
            <Image source={require('../assets/images/booboo.png')} style={styles.image} />
            <Text style={styles.comingSoon}>This functionality is coming soon!</Text>
            <Text style={styles.thanks}>Thanks for your patience :)</Text>
       </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Flashcards',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: 'rgba(255, 99, 71, 0.15)',
  },
  text: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  image: {
      width: 50,
      height: 50,
      marginBottom: 20
  },
  comingSoon: {
  },
  thanks: {
  }
});

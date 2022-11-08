import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SearchDetail = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image_url }}></Image>
      <Text style={styles.title}>{data.name}</Text>
      <Text>
        {data.rating} stars, {data.review_count} reviews
      </Text>
    </View>
  );
};

export default SearchDetail;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  image: {
    height: 120,
    width: 200,
    borderRadius: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

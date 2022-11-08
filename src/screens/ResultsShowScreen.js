import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    console.log(response.data);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
});

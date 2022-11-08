import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SearchDetail from './SearchDetail';
import { withNavigation } from 'react-navigation';

const SearchList = ({ title, data, navigation }) => {
  return data.length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.groupTitle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
          >
            <SearchDetail data={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  ) : null;
};

export default withNavigation(SearchList);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 15,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

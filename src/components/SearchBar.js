import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" />
      <TextInput
        value={term}
        onChangeText={onTermChange}
        style={styles.inputStyle}
        placeholder="Search"
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'gray', //'#F0EEEE'
    height: 50,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: 'center',
    fontSize: 35,
    marginHorizontal: 15,
  },
});
export default SearchBar;

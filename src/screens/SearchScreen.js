import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((item) => item.price === price);
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <SearchList title="Cost Effective" data={filterResultsByPrice('$')} />
        <SearchList title="Bit Pricier" data={filterResultsByPrice('$$')} />
        <SearchList title="Big Spender" data={filterResultsByPrice('$$$')} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

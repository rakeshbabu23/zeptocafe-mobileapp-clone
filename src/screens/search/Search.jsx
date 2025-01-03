import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';
import TextInputBox from '../../components/general/TextInput';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {UserContext} from '../../store/userContext';
import {foodItems} from '../../components/home/data';
import SearchResults from './SearchResults';
const Search = ({navigation}) => {
  const [query, setQuery] = useState('');
  const {setSearchResults} = useContext(UserContext);
  const searchProducts = () => {
    if (query) {
      const filteredProducts = foodItems.filter(product => {
        const sanitizedProductName = product.name
          .replace(/[^a-zA-Z\s]/g, '')
          .toLowerCase();
        return sanitizedProductName.includes(query.toLowerCase());
      });
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.textInputBoxContainer}>
        <TextInputBox
          placeholder="Search products"
          style={{backgroundColor: '#eee', borderColor: '#aaa'}}
          icon1="chevron-back"
          icon1Color="#aaa"
          icon2={query && 'close-outline'}
          icon2Color="#aaa"
          value={query}
          handleChange={val => setQuery(val)}
          containerStyle={{backgroundColor: '#fff'}}
          editable={true}
          returnKeyType="search"
          icon1action={() => navigation.goBack()}
          icon2action={() => {
            setQuery('');
            setSearchResults([]);
          }}
          handleSearch={() => {
            searchProducts();
          }}
        />
      </View>
      <SearchResults />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  textInputBoxContainer: {
    paddingHorizontal: responsiveWidth(1),
    backgroundColor: '#fff',
  },
});

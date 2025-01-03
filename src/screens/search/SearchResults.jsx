import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from '../../store/userContext';
import SearchItem from './SearchItem';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SearchResults = () => {
  const {searchResults} = useContext(UserContext);
  return (
    <View>
      <FlatList
        data={searchResults}
        numColumns={2}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({item, index}) => {
          return <SearchItem item={item} />;
        }}
        contentContainerStyle={{
          paddingHorizontal: responsiveWidth(2),
          paddingBottom: responsiveHeight(6),
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});

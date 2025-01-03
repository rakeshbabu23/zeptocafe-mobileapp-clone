import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from './food-nobgs';
import CategoryItem from '../foods/CategoryItem';
const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.handpcikedText}>Whats on your mind?</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.handpickedImagesContainer}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(3),
    //paddingTop: responsiveHeight(2),
    marginVertical: responsiveHeight(2),
    backgroundColor: '#fff',
  },
  handpcikedText: {
    fontSize: responsiveFontSize(2),
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  handpickedImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

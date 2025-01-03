import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import FoodItem from '../foods/FoodItem';
import {images} from './data';

const Handpicked = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.handpcikedText}>Handpicked for you !</Text>

      <FlatList
        horizontal
        contentContainerStyle={styles.handpickedImagesContainer}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <FoodItem item={item} />}
      />
    </View>
  );
};

export default Handpicked;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(3),
    paddingTop: responsiveHeight(2),
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

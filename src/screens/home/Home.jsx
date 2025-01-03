import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Banner from '../../components/home/Banner';
import Food from '../../components/foods/FoodItem';
import Handpicked from '../../components/home/Handpicked';
import Categories from '../../components/home/Categories';
import BestSellers from '../../components/home/bestsellers/BestSellers';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import Footer from '../../components/home/footer/Footer';
import Header from '../../components/home/Header';
import TextInputBox from '../../components/general/TextInput';
const Home = ({navigation}) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}>
      <Header />
      <Pressable onPress={() => navigation.navigate('Search')}>
        <TextInputBox />
      </Pressable>

      <Banner />
      <View style={styles.itemsHolder}>
        <Handpicked />
        <Categories />
        <BestSellers title="Bestseller" />
        <BestSellers title="Snacks Time" />
      </View>

      <Footer />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // position: 'relative',
  },
  itemsHolder: {
    flexDirection: 'column',
    //paddingHorizontal: responsiveWidth(3),
  },
});

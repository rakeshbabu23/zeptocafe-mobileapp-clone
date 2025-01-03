import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import BestSellers from '../../components/home/bestsellers/BestSellers';
import Categories from '../../components/home/Categories';
import {useNavigation} from '@react-navigation/native';
const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" color="#000" size={24} />
      </Pressable>
      <Text style={styles.headerText}>{title}</Text>
      <Pressable onPress={() => navigation.navigate('Search')}>
        <Ionicons name="search" color="#000" size={24} />
      </Pressable>
    </View>
  );
};
const Items = ({route}) => {
  const {name} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <Header title={name} />
      <BestSellers />
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveHeight(22),
  },
  headerContainer: {
    backgroundColor: '#fff',
    height: responsiveHeight(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveHeight(2),
    paddingVertical: responsiveHeight(2),
  },
  headerText: {
    color: '#000',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-SemiBold',
  },
});

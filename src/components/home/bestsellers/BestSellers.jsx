import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images, snacks} from './data';
import BestSellersItem from './BestSellersItem';
import BottomSheet from '../../general/BottomSheet';
import {UserContext} from '../../../store/userContext';
const BestSellers = ({title, style}) => {
  const {showBottomSheet, cartItems} = useContext(UserContext);
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        contentContainerStyle={{marginBottom: responsiveHeight(2)}}
        data={title === 'Bestsellers' ? images : snacks}
        vertical={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <BestSellersItem item={item} title={title} />;
        }}
        // ListFooterComponent={SeeAllButton}
        // ListFooterComponentStyle={{
        //   paddingHorizontal: responsiveWidth(3),
        //   paddingTop: responsiveHeight(2),
        // }}
        // extraData={cartItems}
      />
      {showBottomSheet.state && <BottomSheet visible={showBottomSheet.state} />}
    </View>
  );
};

export default BestSellers;

const styles = StyleSheet.create({
  container: {marginBottom: responsiveHeight(2)},
  title: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    letterSpacing: 0,
    paddingHorizontal: responsiveWidth(3),
  },
});

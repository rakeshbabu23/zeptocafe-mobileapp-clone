import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const FoodItemCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        {/* <ShowTime time={indianFoodItems[index].timeToDeliver} /> */}
        <View style={styles.itemAndServeContainer}>
          <Text numberOfLines={3} style={styles.itemName}>
            {item.name}
          </Text>
          <Text style={styles.servesText}>{item.serves} serves</Text>
        </View>

        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </View>
  );
};

export default FoodItemCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
    flexDirection: 'column',
    alignItems: 'flex-start',
    // position: 'absolute',
    // bottom: 0,
    backgroundColor: '#fff',
    elevation: 1,
    transform: [{translateY: -20}],
    marginHorizontal: responsiveWidth(3),
  },
  descriptionContainer: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: responsiveWidth(1),
    gap: 10,
  },
  timeContainer: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    width: responsiveWidth(10),
    height: responsiveHeight(1.5),
    alignItems: 'center',
    gap: 5,
    borderRadius: 3,
  },
  timeText: {
    fontSize: responsiveHeight(1),
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  itemAndServeContainer: {
    flexDirection: 'column',
    // gap: 2,
  },
  itemName: {
    fontSize: responsiveHeight(2),
    color: '#000',
    fontFamily: 'Poppins-SemiBold',

    lineHeight: responsiveHeight(3),
  },
  servesText: {
    fontSize: responsiveHeight(1.5),
    color: '#ccc',
    fontFamily: 'Poppins-Regular',
  },
  priceText: {
    fontSize: responsiveHeight(1.5),
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
});

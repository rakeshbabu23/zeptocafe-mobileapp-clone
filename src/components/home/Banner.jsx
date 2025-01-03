import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HighLightCards from './HighLightCard';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../utils/Colors';

const Banner = () => {
  return (
    <>
      <View style={styles.banner}>
        <StatusBar barStyle="light-content" backgroundColor="#7B22FA" />
        <View style={styles.container}>
          <View style={styles.appName}>
            <Text style={styles.bannerSubTitle}>zepto</Text>
            <Text style={styles.bannerTitle}>Cafe</Text>
            <Text style={styles.subtitle}>
              <Text style={styles.innerSubtitle}>Fresh Food</Text> delivered in
              ten minutes
            </Text>
          </View>
          <View style={styles.highLightCardsContainer}>
            <HighLightCards>
              <View>
                <Icon name="cart-outline" size={24} color="#fff" />
              </View>
              <View style={styles.innerHighLightCard}>
                <Text style={styles.highLightCardTitle}>1 crore+</Text>
                <Text style={styles.highLightCardSubtitle}>Orders</Text>
              </View>
            </HighLightCards>
            <HighLightCards>
              <View>
                <Icon name="star" size={30} color="gold" />
              </View>
              <View style={styles.innerHighLightCard}>
                <Text style={styles.highLightCardTitle}>4.6+</Text>
                <Text style={styles.highLightCardSubtitle}>Rated</Text>
              </View>
            </HighLightCards>
            <HighLightCards>
              <View>
                <Icon name="chef-hat" size={24} color="#fff" />
              </View>
              <View style={styles.innerHighLightCard}>
                <Text style={styles.highLightCardTitle}>Top</Text>
                <Text style={styles.highLightCardSubtitle}>Chefs</Text>
              </View>
            </HighLightCards>
          </View>
        </View>
      </View>
    </>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    height: 200,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7B22FA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  appName: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: '50%',
  },
  bannerTitle: {
    fontSize: responsiveFontSize(5),
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    position: 'relative',
    letterSpacing: 2,
  },
  bannerSubTitle: {
    fontSize: responsiveFontSize(2),
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    position: 'absolute',
    top: -5,
    //transform: [{translateY: 20}],
    //transform: [{translateX: 20}],
  },
  innerSubtitle: {
    fontSize: responsiveFontSize(2),
    color: Colors.gold,
    fontFamily: 'Poppins-Medium',
  },
  subtitle: {
    fontSize: responsiveFontSize(2),
    color: Colors.white,
    fontFamily: 'Poppins-Medium',
  },
  highLightCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: responsiveWidth(4),
    gap: 4,
  },
  innerHighLightCard: {
    height: responsiveHeight(5),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  highLightCardTitle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  highLightCardSubtitle: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

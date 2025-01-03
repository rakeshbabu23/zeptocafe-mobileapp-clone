import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>The place that fits all your needs</Text>
      <Text style={styles.subText}>
        Crafted with love from <Text style={styles.zeptoText}>Zepto Team❤</Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(4),
    height: Dimensions.get('window').height / 2,
  },
  mainText: {
    fontSize: responsiveFontSize(3.5),
    fontFamily: 'Poppins-SemiBold',
    color: '#ccc',
    marginBottom: responsiveHeight(4),
  },
  subText: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-SemiBold',
    color: '#ccc',
  },
  zeptoText: {
    color: '#7B22FA',
    fontFamily: 'Poppins-SemiBold',
  },
});

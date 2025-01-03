import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const HighLightCard = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default HighLightCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A1594',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
    borderRadius: 10,
  },
});

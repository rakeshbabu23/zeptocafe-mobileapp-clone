import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const SeeAllButton = ({action}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <Text style={styles.buttonText}>See all</Text>
      <Ionicons name="chevron-forward-outline" size={20} color="pink" />
    </TouchableOpacity>
  );
};

export default SeeAllButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: responsiveHeight(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF83FA',
    borderRadius: 10,
    paddingVertical: responsiveHeight(1),
    marginTop: responsiveHeight(0.5),
  },
  buttonText: {
    color: 'pink',
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-Regular',
  },
});

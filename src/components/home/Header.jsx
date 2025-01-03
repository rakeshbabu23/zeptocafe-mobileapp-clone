import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UserContext} from '../../store/userContext';

const Header = () => {
  const {userAddress} = useContext(UserContext);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-sharp" color="#fff" size={35} />
      </View>

      <View style={styles.addressAndDeliveryContainer}>
        <Text style={styles.deliveryText}>Delivery in 2 mins</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>
            {userAddress.length > 40
              ? `${userAddress.slice(0, 40)}...`
              : userAddress}
          </Text>
          {/* <Ionicons name="chevron-down" color="#fff" size={20} /> */}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7B22FA',
    flexDirection: 'column',
  },
  headerContainer: {
    backgroundColor: '#7B22FA',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(4),
  },
  profileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  addressAndDeliveryContainer: {
    paddingHorizontal: responsiveWidth(1),
    paddingTop: responsiveHeight(1),
    // flexDirection: 'column',
    gap: 0,
  },
  deliveryText: {
    fontSize: responsiveFontSize(2),
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  addressContainer: {
    flexDirection: 'row',
    //gap: 2,
  },
  addressText: {
    fontSize: responsiveFontSize(1.7),
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    // lineHeight: responsiveHeight(2.5)
  },
});

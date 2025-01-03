import {Dimensions, Pressable, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import axios from 'axios';
import {REACT_APP_LOCATIONIQ_API_KEY} from '@env';

import Home from '../screens/home/Home';
import Items from '../screens/categoryItems/Items';
import Search from '../screens/search/Search';
import useLocation from '../screens/location/Location';
import {UserContext} from '../store/userContext';
import LocationDenied from '../screens/location/LocationDenied';
import Splash from '../screens/splash/Splash';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import Cart from '../screens/cart/Cart';
import {Colors} from '../utils/Colors';
const Stack = createStackNavigator();
const AppNavigator = () => {
  useLocation();
  const {
    cartItems,
    location,
    locationDenied,
    locationLoading,
    addressLoading,
    setAddressLoading,
    setUserAddress,
  } = useContext(UserContext);
  const navigation = useNavigation();
  const navigationState = useNavigationState(state => state);

  const currentRouteName = navigationState
    ? navigationState.routes[navigationState.index]?.name
    : null;

  useEffect(() => {
    const getUserAddress = async () => {
      try {
        setAddressLoading(true);
        const response = await axios.get(
          `https://us1.locationiq.com/v1/reverse?key=${REACT_APP_LOCATIONIQ_API_KEY}&lat=${location.lat}&lon=${location.long}&format=json`,
        );
        setUserAddress(response.data.display_name);
      } catch (error) {
        console.error('Error fetching user address:', error);
      } finally {
        setAddressLoading(false);
      }
    };
    if (location.lat && location.long) {
      getUserAddress();
    }
  }, [location]);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {(locationLoading || addressLoading) && (
          <Stack.Screen name="Splash" component={Splash} />
        )}
        {locationDenied ? (
          <Stack.Screen name="LocationDenied" component={LocationDenied} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Items" component={Items} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Cart" component={Cart} />
          </>
        )}
      </Stack.Navigator>
      {currentRouteName !== 'Cart' && cartItems.length > 0 && (
        <View
          style={{
            height: responsiveHeight(8),
            backgroundColor: Colors.white,
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: Dimensions.get('window').width,
          }}>
          <View
            style={{
              backgroundColor: Colors.pink,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              width: '90%',
              borderRadius: 10,
              paddingVertical: responsiveHeight(1),
              paddingHorizontal: responsiveWidth(3),
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                //paddingLeft: responsiveWidth(1),
                gap: 4,

                width: 'auto',
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: responsiveFontSize(1.8),
                  fontFamily: 'Poppins-SemiBold',
                }}>
                {cartItems.reduce((acc, curr) => {
                  return acc + curr.count;
                }, 0)}{' '}
                Items
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: responsiveFontSize(1.8),
                  fontFamily: 'Poppins-SemiBold',
                }}>
                |
              </Text>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: responsiveFontSize(1.8),
                  fontFamily: 'Poppins-SemiBold',
                }}>
                ₹{' '}
                {cartItems.reduce((acc, curr) => {
                  return acc + curr.price * curr.count;
                }, 0)}
              </Text>
            </View>
            <Pressable onPress={() => navigation.navigate('Cart')}>
              <Text
                style={{
                  color: Colors.white,
                  fontSize: responsiveFontSize(1.8),
                  fontFamily: 'Poppins-SemiBold',
                }}>
                View Cart
              </Text>
            </Pressable>
          </View>
        </View>
      )}
      {currentRouteName === 'Cart' && cartItems.length > 0 && (
        <View
          style={{
            height: responsiveHeight(8),
            backgroundColor: Colors.white,
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',

            width: Dimensions.get('window').width,
          }}>
          <View
            style={{
              backgroundColor: Colors.pink,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              width: '90%',
              borderRadius: 10,
              paddingVertical: responsiveHeight(1),
              paddingHorizontal: responsiveWidth(2.5),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(1.8),
                color: Colors.white,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Confirm Order
            </Text>
          </View>
        </View>
      )}
    </>
  );
};

export default AppNavigator;

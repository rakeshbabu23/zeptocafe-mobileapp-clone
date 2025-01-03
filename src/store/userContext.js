import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
export const UserContext = React.createContext('default value');
const UserProvider = ({children}) => {
  const [showBottomSheet, setShowBottomSheet] = useState({
    state: false,
    content: null,
  });
  const [cartItems, setCartItems] = useState([]);
  const [location, setLocation] = useState({lat: null, long: null});
  const [locationDenied, setLocationDenied] = useState(false);
  const [locationLoading, setLocationLoading] = useState(true);
  const [addressLoading, setAddressLoading] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  return (
    <UserContext.Provider
      value={{
        showBottomSheet,
        setShowBottomSheet,
        cartItems,
        setCartItems,
        location,
        setLocation,
        locationDenied,
        setLocationDenied,
        locationLoading,
        setLocationLoading,
        addressLoading,
        setAddressLoading,
        userAddress,
        setUserAddress,
        searchResults,
        setSearchResults,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

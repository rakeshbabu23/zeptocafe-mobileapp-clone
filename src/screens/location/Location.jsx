import {Alert, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {PERMISSIONS, request, check, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import {UserContext} from '../../store/userContext';

const useLocation = () => {
  const {
    location,
    setLocation,
    setLocationDenied,
    locationLoading,
    setLocationLoading,
  } = useContext(UserContext);
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          resolve(position);
        },
        error => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    });
  };
  const requestLocationPermission = async () => {
    try {
      setLocationLoading(true);
      const permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      const status = await check(permission);

      if (status === RESULTS.GRANTED) {
        const position = await getCurrentLocation();
        const {latitude, longitude} = position.coords;
        setLocation({
          lat: latitude,
          long: longitude,
        });
        console.log('Location permission is already granted.', position);
      } else {
        const granted = await request(permission);

        if (granted === RESULTS.GRANTED) {
          console.log('Location permission granted.');
          const position = await getCurrentLocation();
          const {latitude, longitude} = position.coords;
          setLocation({
            lat: latitude,
            long: longitude,
          });
          console.log('Location permission is already granted.', position);
        } else if (granted === RESULTS.DENIED) {
          setLocationDenied(true);
          console.log('Location permission denied by the user.');
        } else if (granted === RESULTS.BLOCKED) {
          setLocationDenied(true);
          console.log(
            'Location permission is blocked. Please enable it from settings.',
          );
        }
      }
    } catch (error) {
      Alert.alert('Error checking or requesting location permission:');
      console.error('Error checking or requesting location permission:', error);
    } finally {
      setLocationLoading(false);
    }
  };
  useEffect(() => {
    const requestPermission = async () => {
      await requestLocationPermission();
    };
    requestPermission();
  }, []);

  return;
};

export default useLocation;

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StatusBar,
  Linking,
  Alert,
} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const LocationDenied = () => {
  const handleAllowLocation = async () => {
    try {
      Linking.openSettings();
    } catch (error) {
      Alert.alert(
        'Error',
        'Something went wrong while trying to open settings.',
      );
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require('../../../assets/images/location/Rectangle-884.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.overlay}>
          <SafeAreaView style={styles.container}>
            <View style={styles.iconContainer}>
              <EntypoIcon
                name="location"
                size={responsiveFontSize(10)}
                color="#fff"
              />
            </View>

            <Text style={styles.heading}>Location Access Needed</Text>

            <Text style={styles.subHeading}>
              Without location, you'll miss nearby posts, local events, and the
              chance to connect with people around you
            </Text>

            <Pressable
              style={styles.enableButton}
              onPress={handleAllowLocation}>
              <Text style={styles.buttonText}>Enable Location</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Slightly darker overlay
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  iconContainer: {
    marginBottom: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 100,
    padding: 20,
  },
  heading: {
    fontSize: responsiveFontSize(3.5),
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subHeading: {
    fontSize: responsiveFontSize(2),
    color: '#e0e0e0',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 32,
  },
  enableButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
});

export default LocationDenied;

import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {UserContext} from '../../store/userContext';
import {Colors} from '../../utils/Colors';

const Splash = () => {
  const {locationLoading, addressLoading} = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cafe</Text>
      <Text style={styles.subtitle}>
        <Text style={styles.innerSubtitle}>Fresh Food</Text> delivered in ten
        minutes
      </Text>
      {locationLoading && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Please wait fetching your location...
            </Text>
          </View>
        </View>
      )}
      {addressLoading && (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Please wait fetching your address...
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B22FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(5),
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
  },
  innerSubtitle: {
    fontSize: responsiveFontSize(2),
    color: Colors.gold,
    fontFamily: 'Poppins-SemiBold',
  },
  subtitle: {
    fontSize: responsiveFontSize(2),
    color: Colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
  modalContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    paddingBottom: responsiveHeight(5),
  },
  modalContent: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: responsiveHeight(2),
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
  modalText: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    color: '#000',
    textAlign: 'center',
  },
});

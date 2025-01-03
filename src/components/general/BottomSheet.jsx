// import {
//   Dimensions,
//   ScrollView,
//   StyleSheet,
//   Text,
//   Modal,
//   View,
//   Pressable,
// } from 'react-native';
// import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import {
//   responsiveFontSize,
//   responsiveHeight,
// } from 'react-native-responsive-dimensions';
// const BottomSheet = ({children, onClose}) => {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{
//           flex: 0.4,
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 20,
//         }}>
//         <Pressable style={styles.closeButton} onPress={() => onClose()}>
//           <Ionicons name="close-outline" color="#fff" size={24} />
//         </Pressable>
//       </View>

//       <ScrollView
//         style={styles.contentContainer}
//         vertical={true}
//         nestedScrollEnabled={true}>
//         {children}
//       </ScrollView>
//     </View>
//   );
// };

// export default BottomSheet;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     width: Dimensions.get('window').width,
//     height: Dimensions.get('window').height,
//     position: 'absolute',
//     bottom: 0,
//   },
//   closeButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//   },
//   contentContainer: {
//     height: Dimensions.get('window').height * 0.7,
//     width: Dimensions.get('window').width,

//     //flex: 1,
//     //backgroundColor: 'red',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     position: 'absolute',
//     bottom: 0,
//   },
//   titleText: {
//     fontSize: responsiveFontSize(3),
//     color: '#333',
//   },
// });
import React, {useContext, useState, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Modal,
  View,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {UserContext} from '../../store/userContext';
import FoodItemCard from '../bottomsheet/FoodItemCard';
import ItemCount from './ItemCount';
import {Colors} from '../../utils/Colors';

const BottomSheet = ({visible}) => {
  const {setShowBottomSheet, showBottomSheet, cartItems, setCartItems} =
    useContext(UserContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (cartItems.length > 0) {
      const itemCount1 = cartItems.find(
        cartItem => cartItem?.name === showBottomSheet.content?.name,
      );
      setCount(itemCount1?.count ? itemCount1.count : 0);
    } else {
      setCount(0);
    }
  }, [cartItems]);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={() => {
        setShowBottomSheet({
          state: false,
          content: null,
        });
      }}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 20,
          }}>
          <Pressable
            style={styles.closeButton}
            onPress={() => {
              setShowBottomSheet({
                state: false,
                content: null,
              });
            }}>
            <Ionicons name="close-outline" color="#fff" size={24} />
          </Pressable>
        </View>

        <ScrollView
          style={styles.contentContainer}
          vertical={true}
          nestedScrollEnabled={true}>
          <View style={{position: 'relative'}}>
            <Image
              resizeMode="cover"
              source={showBottomSheet?.content?.image}
              style={{width: Dimensions.get('window').width, height: 300}}
            />
            <FoodItemCard item={showBottomSheet.content} />
            <Text style={styles.desctiptionText}>
              {showBottomSheet.content?.description}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.actionContainer}>
          <View
            style={[styles.cartContainer, {width: count > 0 ? '50%' : '30%'}]}>
            <Ionicons name="cart-outline" color="#000" size={24} />
          </View>
          {/* <Pressable style={styles.actionButton}>
            <ItemCount
              item={showBottomSheet.content}
              style={styles.actionButton}
            />
          </Pressable> */}
          <ItemCount
            item={showBottomSheet.content}
            count={count}
            style={styles.actionButton}
          />
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end', // Ensures the content aligns to the bottom
  },
  closeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    marginBottom: 10,
  },
  contentContainer: {
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    //paddingHorizontal: 10,
  },
  titleText: {
    fontSize: responsiveFontSize(3),
    color: '#333',
  },
  actionContainer: {
    height: responsiveHeight(8),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(1),
  },
  cartContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //width: '30%',
    alignSelf: 'stretch',
    backgroundColor: Colors.white,
  },
  actionButton: {
    width: '70%',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //paddingVertical: responsiveHeight(1),
    backgroundColor: Colors.pink,
    alignSelf: 'stretch',
  },
  actionButtonText: {
    fontSize: responsiveFontSize(2),
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  desctiptionText: {
    fontSize: responsiveFontSize(2),
    color: '#000',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: responsiveWidth(3),
  },
});

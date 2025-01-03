import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ItemCount from '../../general/ItemCount';
import {UserContext} from '../../../store/userContext';
import {Colors} from '../../../utils/Colors';

const BestSellersItem = ({item, title}) => {
  const {setShowBottomSheet, showBottomSheet, cartItems, setCartItems} =
    useContext(UserContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (cartItems.length > 0) {
      const itemCount1 = cartItems.find(
        cartItem => cartItem?.id === showBottomSheet.content?.id,
      );
      setCount(itemCount1?.count ? itemCount1.count : 0);
    } else {
      setCount(0);
    }
  }, [cartItems]);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        setShowBottomSheet({
          state: true,
          content: item,
        })
      }>
      <View style={styles.itemDescription}>
        <View style={styles.itemDescriptionInnerContainer}>
          <Text style={styles.labelText}>{title}</Text>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
        <Text style={styles.itemDescriptionText}>
          {item.description.length > 50
            ? `${item.description.slice(0, 50)}...`
            : item.description}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          resizeMode="cover"
          source={item.image}
          style={styles.imageBackground}></ImageBackground>
        <ItemCount
          count={count}
          setCartItems={setCartItems}
          item={item}
          cartItems={cartItems}
          style={styles.itemCountContainer}
          emptyTextColor={Colors.pink}
          countStyle={{position: 'absolute', bottom: 5, right: 5}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BestSellersItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ccc',
    position: 'relative',
  },
  itemDescription: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemDescriptionInnerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  label: {
    flexDirection: 'row',
    gap: 4,
  },
  labelText: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Poppins-SemiBold',
    color: '#7B22FA',
  },
  itemName: {
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  priceText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  itemDescriptionText: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Poppins-Regular',
    color: '#aaa',
  },
  imageContainer: {
    width: Dimensions.get('window').width / 2.3,
    height: responsiveHeight(20),
    overflow: 'hidden',
    // marginRight: responsiveScreenWidth(5),
    marginBottom: responsiveHeight(1),
    position: 'relative',
    borderRadius: 20,
  },
  imageBackground: {
    width: '100%',
    height: responsiveHeight(20),

    borderRadius: 20,

    flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  itemCountContainer: {
    position: 'absolute',
    left: '60%',
    right: '5%',
    bottom: 10,
    borderWidth: 1,
    borderColor: '#ff007f',
    backgroundColor: '#fff',
    zIndex: 999,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '35%',
    borderRadius: 6,
  },
});

import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {UserContext} from '../../store/userContext';

const ItemCount = ({count, cartItems, setCartItems, item}) => {
  if (count < 1) {
    return (
      <TouchableOpacity
        onPress={() => {
          setCartItems(prevState => [...prevState, {...item, count: 1}]);
        }}
        style={[
          styles.itemCountContainer,
          {
            width: 'auto',
            left: '62%',
            right: 5,
            //padding: 3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text
          style={{
            color: '#ff007f',
            fontSize: responsiveFontSize(1.8),
            fontFamily: 'Poppins-SemiBold',
          }}>
          Add
        </Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <View
        style={[
          styles.itemCountContainer,
          {
            backgroundColor: '#ff007f',
            borderColor: '#fff',
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            const findItem = cartItems.find(i => i.name === item.name);
            if (findItem) {
              // Increment the count of the existing item
              setCartItems(prevState =>
                prevState.map(i =>
                  i.name === item.name ? {...i, count: i.count + 1} : i,
                ),
              );
            } else {
              // Add the item to the cart if it doesn't exist
              setCartItems(prevState => [...prevState, {...item, count: 1}]);
            }
          }}>
          <Ionicons name="add" color="#fff" size={22} />
        </TouchableOpacity>

        <Text style={styles.itemCountText}>{count}</Text>
        <TouchableOpacity
          style={styles.actions}
          onPress={() => {
            setCartItems(
              prevState =>
                prevState
                  .map(i =>
                    i.name === item.name ? {...i, count: i.count - 1} : i,
                  )
                  .filter(i => i.count > 0), // Remove items with count 0
            );
          }}>
          <Ionicons name="remove" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    );
  }
};

const ShowTime = ({time}) => {
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>10</Text>
      <Text style={styles.timeText}>Mins</Text>
    </View>
  );
};

const ItemDescription = ({item, index}) => {
  return (
    <View style={styles.descriptionContainer}>
      <ShowTime time={item[index].timeToDeliver} />
      <View style={styles.itemAndServeContainer}>
        <Text numberOfLines={3} style={styles.itemName}>
          {item[index].name}
        </Text>
        <Text style={styles.servesText}>{item[index].serves} serves</Text>
      </View>

      <Text style={styles.priceText}> ₹{item[index].price}</Text>
    </View>
  );
};

const FoodItem = ({item}) => {
  const {cartItems, setCartItems, setShowBottomSheet} = useContext(UserContext);
  const [count, setCount] = useState({item1: 0, item2: 0});
  useEffect(() => {
    const itemCount1 = cartItems.find(cartItem => cartItem.id === item[0].id);
    const itemCount2 = cartItems.find(cartItem => cartItem.id === item[1].id);
    setCount({
      item1: itemCount1 ? itemCount1.count : 0,
      item2: itemCount2 ? itemCount2.count : 0,
    });
  }, [cartItems]);
  return (
    <View style={{flexDirection: 'column'}}>
      <Pressable
        style={styles.container}
        onPress={() => {
          setShowBottomSheet({
            state: true,
            content: item[0],
          });
        }}>
        <ImageBackground
          resizeMode="cover"
          source={item[0].image}
          style={styles.imageBackground}>
          <ItemCount
            count={count.item1}
            setCartItems={setCartItems}
            item={item[0]}
            cartItems={cartItems}
          />
        </ImageBackground>
        <ItemDescription item={item} index={0} />
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => {
          setShowBottomSheet({
            state: true,
            content: item[1],
          });
        }}>
        <ImageBackground
          resizeMode="cover"
          source={item[1].image}
          style={styles.imageBackground}>
          <ItemCount
            count={count.item2}
            setCartItems={setCartItems}
            item={item[1]}
            cartItems={cartItems}
          />
        </ImageBackground>
        <ItemDescription item={item} index={1} />
      </Pressable>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 2.5,
    height: responsiveHeight(33),
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: responsiveWidth(5),
    marginBottom: responsiveHeight(1),
    //elevation: 1,
  },
  imageBackground: {
    width: '100%',
    height: responsiveHeight(20),
    position: 'relative',

    borderRadius: 20,
    overflow: 'hidden',
  },
  itemCountContainer: {
    width: '50%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ff007f',
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    left: '47%',
    padding: 3,
  },
  actions: {
    transform: [{translateY: 1}],
    zIndex: 50,
  },
  itemCountText: {
    fontSize: responsiveHeight(2),
    color: '#fff',
    //fontWeight:'semibold',
    fontFamily: 'Poppins-SemiBold',
    transform: [{translateY: 2}],
  },
  descriptionContainer: {
    flex: 1,
    paddingVertical: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: responsiveWidth(1),
  },
  timeContainer: {
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    width: responsiveWidth(10),
    height: responsiveHeight(1.5),
    alignItems: 'center',
    gap: 5,
    borderRadius: 3,
  },
  timeText: {
    fontSize: responsiveHeight(1),
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  itemAndServeContainer: {
    flexDirection: 'column',
    // gap: 2,
  },
  itemName: {
    fontSize: responsiveHeight(1.5),
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
  },
  servesText: {
    fontSize: responsiveHeight(1.5),
    color: '#ccc',
    fontFamily: 'Poppins-Regular',
  },
  priceText: {
    fontSize: responsiveHeight(1.5),
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
});

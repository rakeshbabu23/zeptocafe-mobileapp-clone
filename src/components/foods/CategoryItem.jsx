import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ItemCount = ({count}) => {
  return (
    <View style={styles.itemCountContainer}>
      <TouchableHighlight>
        <Ionicons name="add" color="#fff" size={22} />
      </TouchableHighlight>

      <Text style={styles.itemCountText}>{count}</Text>
      <TouchableHighlight style={styles.actions}>
        <Ionicons name="remove" color="#fff" size={24} />
      </TouchableHighlight>
    </View>
  );
};

const ShowTime = ({time}) => {
  return (
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>10</Text>
      <Text style={styles.timeText}>Mins</Text>
    </View>
  );
};

const ItemDescription = ({indianFoodItems, index}) => {
  return (
    <View style={styles.descriptionContainer}>
      <ShowTime time={indianFoodItems[index].timeToDeliver} />
      <View style={styles.itemAndServeContainer}>
        <Text numberOfLines={3} style={styles.itemName}>
          {indianFoodItems[index].name}
        </Text>
        <Text style={styles.servesText}>
          {indianFoodItems[index].serves} serves
        </Text>
      </View>

      <Text style={styles.priceText}>{indianFoodItems[index].price}</Text>
    </View>
  );
};

const CategoryItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'column'}}>
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate('Items', {
            name: item[0].name,
          });
        }}>
        <Image
          resizeMode="contain"
          source={item[0].path}
          style={styles.imageBackground}
        />
        <Text style={styles.itemName}>{item[0].name}</Text>
      </Pressable>
      <Pressable
        style={styles.container}
        onPress={() => {
          navigation.navigate('Items', {
            name: item[1].name,
          });
        }}>
        <Image
          resizeMode="contain"
          source={item[1].path}
          style={styles.imageBackground}
        />
        <Text style={styles.itemName}>{item[1].name}</Text>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 4,
    height: responsiveHeight(12),
    overflow: 'hidden',
    borderRadius: 10,
    marginRight: responsiveWidth(5),
    marginBottom: responsiveHeight(1),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //elevation: 1,
  },
  imageBackground: {
    width: '100%',
    height: responsiveHeight(10),
    position: 'relative',
    //backgroundColor: 'red',
    borderRadius: 10,
  },
  itemCountContainer: {
    width: '50%',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'red',
    //backgroundColor: 'red',
    flexDirection: 'row',
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,

    left: '47%',
  },
  actions: {
    transform: [{translateY: 1}],
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
    color: '#aaa',
    fontFamily: 'Poppins-Medium',
    lineHeight: responsiveHeight(3),
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

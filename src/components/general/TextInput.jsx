import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useRef} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TextInputBox = ({
  icon1 = 'search-outline',
  icon1Color = '#000',
  icon2Color = '#000',
  icon2 = '',
  value = '',
  handleChange,
  placeholder = 'Search',
  style = {},
  editable = false,
  containerStyle = {},
  returnKeyType = 'search',
  icon1action,
  icon2action,
  handleSearch,
}) => {
  const textInputRef = useRef(null);
  return (
    <View
      style={[
        {
          backgroundColor: '#7B22FA',
          paddingVertical: responsiveHeight(1),
        },
        containerStyle,
      ]}>
      <View style={styles.container}>
        <Pressable style={[styles.iconContainer, style]} onPress={icon1action}>
          <Ionicons name={icon1} color={icon1Color} size={20} />
        </Pressable>
        <TextInput
          ref={textInputRef}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor="#000"
          returnKeyType={returnKeyType}
          onSubmitEditing={handleSearch}
          value={value}
          onChangeText={val => handleChange(val)}
          style={[
            styles.textInpuContainer,
            {
              fontSize: responsiveFontSize(2),
              color: '#000',
              width: icon2 ? '80%' : '90%',
              fontFamily: 'Poppins-Regular',
            },
            style,
          ]}
        />
        {icon2 && (
          <Pressable
            style={[styles.iconContainer, style]}
            onPress={() => {
              icon2action();
              textInputRef?.current?.focus();
            }}>
            <Ionicons name={icon2} color={icon2Color} size={24} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default TextInputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(2),
    backgroundColor: '#fff',
    borderRadius: 8,
    height: responsiveHeight(5.5),
    overflow: 'hidden',

    //alignSelf: 'stretch',
  },
  iconContainer: {
    width: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  textInpuContainer: {
    height: responsiveHeight(6),
    padding: 2,
  },
});

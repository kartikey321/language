import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomButton = ({text, clicked, marginStart, marginEnd}) => {
  return clicked ? (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 13,
        marginHorizontal: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12.5,
        paddingVertical: 8,
        borderWidth: 2,
      }}>
      <View style={{marginHorizontal: 9}}>
        <FontAwesome name="check-circle-o" size={20} />
      </View>

      <Text
        style={{
          color: 'black',

          alignItems: 'center',
        }}>
        {text}
      </Text>
    </View>
  ) : (
    <View
      style={{
        backgroundColor: 'transparent',
        borderRadius: 13,
        marginHorizontal: '2%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 9,
        borderWidth: 2,
      }}>
      <Text
        style={{
          color: 'white',

          alignItems: 'center',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});

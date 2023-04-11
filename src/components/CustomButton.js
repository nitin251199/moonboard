import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../theme';

export default function CustomButton({
  type,
  title,
  icon,
  containerStyle,
  titleStyle,
  onPress,
}) {
  const backgroundColor = type === 'primary' ? '#F14336' : 'transparent';
  const color = type === 'primary' ? '#fff' : '#F14336';
  // const borderWidth = type === 'primary' ? 0 : 3;
  const borderColor = type === 'primary' ? '#F14336' : '#A7A6A9';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        ...containerStyle,
        justifyContent: icon ? 'space-between' : 'center',
        backgroundColor,
        borderColor,
      }}>
      {icon}
      <Text style={{...styles.title, ...titleStyle, color}}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F14336',
    borderRadius: 18,
    flexDirection: 'row',

    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 3,
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.primaryBold,
    lineHeight: 18,
  },
});

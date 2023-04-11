import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BlueDot from '../../assets/svg/blueDot.svg';
import {Fonts} from '../../theme';

export default function NotifCard({item, index}) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={item.image} style={styles.image} />
        {item.isUnread ? (
          <BlueDot
            width={16}
            height={16}
            style={{position: 'absolute', top: -4, left: -2}}
          />
        ) : null}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={{...styles.text, color: '#689EE2',marginTop:5}}>
          {item.miles} MILES
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F0F7',
    borderRadius: 17,
    marginTop: 15,
    flexDirection: 'row',
    padding: 20,
    paddingTop: 15,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
  },
  textContainer:{
    alignContent:'space-between'
  },
  text: {
    marginLeft: 10,
    color: '#000',
    fontFamily: Fonts.primarySemiBold,
    fontSize: 15.5,
    width: '70%',
    lineHeight: 20,
  },
});

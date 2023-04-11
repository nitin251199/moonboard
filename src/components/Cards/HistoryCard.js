import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Fonts} from '../../theme';
import {useNavigation} from '@react-navigation/native';

export default function HistoryCard({item, index}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate('OffenderScreen', {
          offenderInfo: item,
        })
      }
      style={{...styles.container, marginTop: index !== 0 ? 20 : 0}}>
      <Image
        style={{width: 100, height: 100, borderRadius: 11}}
        source={item.image}
      />
      <View style={{marginLeft: 20, justifyContent: 'space-between'}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>{item.address1}</Text>
        <Text style={styles.address}>{item.address2}</Text>
        <Text style={{...styles.address, color: '#689EE2'}}>
          {item.comments} Comments
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    flexDirection: 'row',
    padding: 20,
  },
  name: {
    color: '#000',
    fontFamily: Fonts.primarySemiBold,
    fontSize: 17.5,
    textTransform: 'uppercase',
  },
  address: {
    color: '#A7A6A9',
    fontFamily: Fonts.primarySemiBold,
  },
});

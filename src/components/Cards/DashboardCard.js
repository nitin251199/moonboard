import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';
import {Fonts} from '../../theme';

export default function DashboardCard({index}) {
  return (
    <View style={{...styles.container, marginTop: index !== 0 ? 20 : 10}}>
      <View style={styles.cardView}>
        <Image
          style={styles.image}
          source={require('../../assets/images/profile2.png')}
        />
        <View style={{marginLeft: 20}}>
          <Text style={styles.name}>John Doe</Text>
          <Text
            style={{
              ...styles.name,
              color: '#689EE2',
              fontSize: 15,
              paddingVertical: 8,
            }}>
            5560 miles
          </Text>
        </View>
      </View>
      <CustomButton
        type="primary"
        title="View comments"
        containerStyle={{
          paddingVertical: 8,
          borderRadius: 8,
        }}
        titleStyle={{
          fontSize: 14,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 26,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  cardView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  name: {
    fontSize: 17.5,
    fontFamily: Fonts.primaryBold,
    color: '#000',
    textTransform: 'uppercase',
  },
});

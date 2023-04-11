import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color, Fonts } from '../../theme';
import GraphPercent from '../../assets/svg/graphPercent.svg';
import Graph from '../../assets/svg/graph.svg';

export default function CrimeCard() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainPercent}>71.7%</Text>
        <Text style={styles.percentIncrease}>6.6% Increased</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View>
        <GraphPercent style={{
            transform: [{translateX: 52}]
        }}/>
        <Graph style={{marginTop:10}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainPercent: {
    fontSize: 45,
    fontFamily: Fonts.primaryBold,
    color: Color.primary,
  },
  percentIncrease: {
    fontSize: 19,
    fontFamily: Fonts.primaryBold,
    color: '#A7A6A9',
    marginVertical:10
  },
  seeAll: {
    fontSize: 17.5,
    fontFamily: Fonts.primaryBold,
    color: '#689EE2',
    marginTop: 15,
  },
});
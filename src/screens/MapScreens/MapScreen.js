import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import MenuIcon from '../../assets/svg/menu.svg';
import SearchIcon from '../../assets/svg/search.svg';
import BlueDot from '../../assets/svg/blueDot.svg';
import RedDot from '../../assets/svg/redDot.svg';
import Entypo from 'react-native-vector-icons/Entypo';
import {Color, Fonts} from '../../theme';

export default function MapScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MenuIcon />
        </TouchableOpacity>
        <Text style={styles.title}>Map offenders</Text>
      </View>
      <ImageBackground
        source={require('../../assets/images/bigMap.png')}
        style={{flex: 1, marginTop: 60}}>
        <View style={styles.searchBox}>
          <SearchIcon style={{margin: 5}} />
          <TextInput
            style={styles.search}
            placeholder="Search for location"
            placeholderTextColor="#A7A6A9"
          />
        </View>
        <View
          style={styles.sideButtons}>
          <TouchableOpacity
            style={{
              borderBottomWidth: 2,
              borderBottomColor: '#DADADA',
            }}>
            <Entypo name="plus" size={30} color="#8D8D8D" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="minus" size={30} color="#8D8D8D" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottom}>
          <BlueDot />
          <Text style={{color: '#fff', fontFamily: Fonts.primarySemiBold}}>
            Your location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottom}>
          <RedDot />
          <Text style={{color: '#fff', fontFamily: Fonts.primarySemiBold}}>
            Offenders
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Color.primary,
  },
  topBar: {
    backgroundColor: '#F1F0F7',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: Color.primary,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 18,
    marginHorizontal: 10,
    backgroundColor: '#470C0C',
    borderRadius: 9,
  },
  title: {
    fontFamily: Fonts.primarySemiBold,
    color: '#000',
    fontSize: 24,
    marginLeft: 40,
  },
  searchBox: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    margin: 30,
    marginTop: 40,
  },
  search: {
    flex: 1,
    color: '#000',
    fontFamily: Fonts.primarySemiBold,
    paddingLeft: 10,
  },
  sideButtons: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 5,
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
});

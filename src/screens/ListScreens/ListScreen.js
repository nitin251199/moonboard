import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import MenuIcon from '../../assets/svg/menu.svg';
import SearchIcon from '../../assets/svg/search.svg';
import FilterIcon from '../../assets/svg/filter.svg';
import {Fonts} from '../../theme';
import {offenderList} from '../../utils/dummyLists';
import HistoryCard from '../../components/Cards/HistoryCard';

export default function ListScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MenuIcon />
        </TouchableOpacity>
        <Text style={styles.title}>List offenders</Text>
      </View>
      <View style={styles.searchBox}>
        <SearchIcon style={{margin: 5}} />
        <TextInput
          style={styles.search}
          placeholder="Search for location"
          placeholderTextColor="#A7A6A9"
        />
        <FilterIcon style={{margin: 5}} />
      </View>
      <FlatList
        data={offenderList}
        style={{marginHorizontal: 30}}
        contentContainerStyle={{paddingBottom: 30}}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <HistoryCard item={item} index={index} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F0F7',
  },
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
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
    marginVertical: 20,
  },
  search: {
    flex: 1,
    color: '#000',
    fontFamily: Fonts.primarySemiBold,
    paddingLeft: 10,
  },
});

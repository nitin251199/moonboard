import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import BackIcon from '../../assets/svg/backIcon.svg';
import SendIcon from '../../assets/svg/send.svg';
import {Color, Fonts} from '../../theme';
import OffenderCard from '../../components/Cards/OffenderCard';
import {commentList} from '../../utils/dummyLists';
import CustomInput from '../../components/CustomInput';

export default function OffenderScreen({navigation, route}) {
  const {offenderInfo} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={50} />
        </TouchableOpacity>
        <Text style={styles.title}>Offender</Text>
      </View>
      <View style={{marginHorizontal: 30, marginBottom: 20}}>
        <OffenderCard
          item={offenderInfo}
          extraInfo={{
            age: 41,
            sex: 'Male',
            color: 'White',
            address: '268 SPRING STREET WEST BRIDGEWATER, MA 02379',
          }}
        />
      </View>
      <View style={{paddingHorizontal: 30, backgroundColor: '#fff'}}>
        <Text
          style={{
            fontFamily: Fonts.primaryMedium,
            fontSize: 18,
            marginVertical: 10,
            color: '#000',
          }}>
          Comments
        </Text>
      </View>
      <FlatList
        data={commentList}
        style={{backgroundColor: '#fff'}}
        contentContainerStyle={{paddingBottom: 30}}
        ItemSeparatorComponent={() => (
          <View style={{height: 2, backgroundColor: '#A7A6A970'}} />
        )}
        renderItem={({item, index}) => (
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 30,
            }}>
            <Text
              style={{
                fontFamily: Fonts.primaryBold,
                color: '#000',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.primarySemiBold,
                color: '#A7A6A9',
                fontSize: 12,
                marginVertical: 5,
              }}>
              {item.dateTime}
            </Text>
            <Text
              style={{
                fontFamily: Fonts.primaryRegular,
                color: '#2B3551',
                lineHeight: 16,
                marginTop: 10,
                textAlign: 'justify',
              }}>
              {item.comment}
            </Text>
          </View>
        )}
      />
      <View style={styles.bottomBar}>
        <CustomInput
          placeholder={'Post your comment'}
          containerStyle={{
            backgroundColor: Color.backgroungColor,
          }}
          inputStyle={{
            paddingVertical: 10,
          }}
        />
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
          }}>
          <SendIcon />
        </TouchableOpacity>
      </View>
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
    paddingTop: 15,
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.primarySemiBold,
    color: '#000',
    fontSize: 24,
    marginLeft: 40,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingVertical: 5,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 10,
    backgroundColor: '#fff',
  },
});

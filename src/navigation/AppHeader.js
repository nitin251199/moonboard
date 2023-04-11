import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../theme';
import {useNavigation} from '@react-navigation/native';
import MenuIcon from '../assets/svg/menu.svg';
import NotificationIcon from '../assets/svg/notification.svg';
import CustomModal from '../components/CustomModal';
import {notifList} from '../utils/dummyLists';
import NotifCard from '../components/Cards/NotifCard';

export default function AppHeader() {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Color.backgroungColor}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MenuIcon />
        </TouchableOpacity>
        <View style={{flex: 1, marginLeft: 20}}>
          <Text style={styles.subTitle}>Welcome back</Text>
          <Text style={styles.title}>Ana Turner</Text>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{marginRight: 20}}>
          <NotificationIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 55,
            height: 55,
          }}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 16,
            }}
          />
        </TouchableOpacity>
      </View>
      <CustomModal
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(false)}>
        <FlatList
          data={notifList}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <NotifCard item={item} index={index} />
          )}
        />
        <Text style={styles.markAsRead}>Mark all us read</Text>
        <TouchableOpacity style={styles.manage}>
          <Text style={styles.manageText}>Manage your notifications</Text>
        </TouchableOpacity>
      </CustomModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: Fonts.primaryBold,
    color: Color.black,
    lineHeight: 26,
  },
  subTitle: {
    color: '#A7A6A9',
    fontFamily: Fonts.primaryBold,
    fontSize: 12,
  },
  markAsRead: {
    color: '#689EE2',
    fontFamily: Fonts.primarySemiBold,
    marginVertical: 20,
    fontSize: 15.5,
  },
  manage: {
    borderWidth: 0.8,
    borderColor: '#F14336',
    borderStyle:'dashed',
    borderRadius: 35,
    padding:13
  },
  manageText: {
    color: '#2B3551',
    fontFamily: Fonts.primaryMedium,
    textAlign: 'center',
    lineHeight: 15,
  },
});

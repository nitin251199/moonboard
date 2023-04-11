import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import BackIcon from '../../assets/svg/backIcon.svg';
import CameraIcon from '../../assets/svg/camera.svg';
import ClipboardIcon from '../../assets/svg/clipboard.svg';
import KeyIcon from '../../assets/svg/key.svg';
import HistoryIcon from '../../assets/svg/history.svg';
import DeleteIcon from '../../assets/svg/delete.svg';
import LogoutIcon from '../../assets/svg/logout.svg';
import {Dimension, Fonts} from '../../theme';
import CustomButton from '../../components/CustomButton';

export default function MyProfile({navigation}) {
  const profileMenu = [
    {
      id: 1,
      icon: <ClipboardIcon />,
      title: 'Edit Profile',
      navigateTo: 'EditProfile',
    },
    {
      id: 2,
      icon: <KeyIcon />,
      title: 'Change Password',
      navigateTo: 'ChangePass',
    },
    {
      id: 3,
      icon: <HistoryIcon />,
      title: 'History',
      navigateTo: 'List',
    },
    {
      id: 4,
      icon: <DeleteIcon />,
      title: 'Delete Account',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <BackIcon width={50} />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={require('../../assets/images/profile3.png')}
        />
        <TouchableOpacity>
          <CameraIcon style={{position: 'absolute', bottom: 0, right: -20}} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>Ana Turner</Text>
      <FlatList
        data={profileMenu}
        style={{alignSelf: 'center'}}
        keyExtractor={(_, i) => i}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                item.navigateTo && navigation.navigate(item.navigateTo)
              }
              style={styles.profileMenu}>
              {item.icon}
              <Text style={styles.profileMenuText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <CustomButton
        type="primary"
        title="Logout"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'Auth'}],
          })
        }
        icon={<LogoutIcon />}
        containerStyle={{
          alignSelf: 'center',
          width: Dimension.window.width * 0.35,
          paddingHorizontal: 15,
          marginBottom: 40,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontFamily: Fonts.primarySemiBold,
    marginLeft: 40,
  },
  image: {
    alignSelf: 'center',
    width: 125,
    height: 125,
    borderRadius: 36,
  },
  name: {
    fontSize: 32,
    fontFamily: Fonts.primaryHeavy,
    color: '#000',
    alignSelf: 'center',
    marginVertical: 20,
  },
  profileMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 20,
  },
  profileMenuText: {
    color: '#000',
    fontSize: 18,
    fontFamily: Fonts.primarySemiBold,
    marginLeft: 20,
  },
});

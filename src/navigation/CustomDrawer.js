import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import WhiteMaskIcon from '../assets/svg/whiteMaskIcon.svg';
import {Color, Dimension, Fonts} from '../theme';
import CloseIcon from '../assets/svg/close.svg';
import MapIcon from '../assets/svg/map.svg';
import FileIcon from '../assets/svg/file.svg';
import LocationIcon from '../assets/svg/location.svg';
import PeopleIcon from '../assets/svg/people.svg';
import EyeIcon from '../assets/svg/eye.svg';
import RecentIcon from '../assets/svg/recent.svg';
import ShareIcon from '../assets/svg/share.svg';
import FeedbackIcon from '../assets/svg/feedback.svg';
import TermsIcon from '../assets/svg/terms.svg';
import LogoutIcon from '../assets/svg/logout.svg';
import CustomButton from '../components/CustomButton';

export default function CustomDrawer({navigation}) {
  const drawerItems = [
    {
      id: 1,
      icon: <MapIcon />,
      title: 'Use current Location',
    },
    {
      id: 2,
      icon: <FileIcon />,
      title: 'Use contact’s address',
    },
    {
      id: 3,
      icon: <LocationIcon />,
      title: 'Use contact’s address',
    },
    {
      id: 4,
      icon: <PeopleIcon />,
      title: 'Offender Name',
    },
    {
      id: 5,
      icon: <EyeIcon />,
      title: 'Face Reconigtion ',
    },
    {
      id: 6,
      icon: <RecentIcon />,
      title: 'Recent views',
    },
    {
      id: 7,
      icon: <ShareIcon />,
      title: 'Share App',
    },
    {
      id: 8,
      icon: <FeedbackIcon />,
      title: 'Feedback / Rate app',
    },
    {
      id: 9,
      icon: <TermsIcon />,
      title: 'Terms and conditions',
    },
  ];

  const [selected, setSelected] = React.useState(1);

  return (
    <SafeAreaView>
      <View style={styles.profileContainer}>
        <WhiteMaskIcon />
        <Image
          style={styles.image}
          source={require('../assets/images/profile3.png')}
        />
        <CloseIcon />
      </View>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.name}>Ana Turner</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileStack')}
        style={styles.manage}>
        <Text style={styles.manageText}>Manage your account</Text>
      </TouchableOpacity>
      <FlatList
        data={drawerItems}
        persistentScrollbar
        keyExtractor={(_, i) => i}
        maxHeight={Dimension.window.height - 380}
        style={{alignSelf: 'center', marginTop: 5}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => setSelected(item.id)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 15,
                marginHorizontal: 20,
                backgroundColor: selected === item.id ? '#fff' : null,
              }}>
              {item.icon}
              <Text
                style={{
                  color: selected === item.id ? Color.primary : Color.white,
                  fontSize: 18,
                  fontFamily: Fonts.primarySemiBold,
                  marginLeft: 20,
                }}>
                {item.title}
              </Text>
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
          marginTop: 20,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 36,
  },
  welcome: {
    fontSize: 12,
    color: '#A7A6A9',
    fontFamily: Fonts.primaryBold,
    textAlign: 'center',
    marginVertical: 5,
  },
  name: {
    color: '#fff',
    fontSize: 23,
    fontFamily: Fonts.primaryHeavy,
    textAlign: 'center',
    lineHeight: 28,
  },
  manage: {
    borderWidth: 0.8,
    borderStyle: 'dashed',
    borderColor: Color.primary,
    borderRadius: 35,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  manageText: {
    color: Color.white,
    fontSize: 14.7,
    lineHeight: 18,
    fontFamily: Fonts.primaryMedium,
  },
});

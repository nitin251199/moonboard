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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Color, Dimension, Fonts} from '../../theme';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

export default function EditProfile({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backIcon}>
          <BackIcon width={50} />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={require('../../assets/images/profile3.png')}
        />
        <CameraIcon style={{position: 'absolute', bottom: 0, right: -20}} />
      </View>
      <Text style={styles.name}>Ana Turner</Text>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View
          style={{
            marginHorizontal: 30,
          }}>
          <CustomInput
            placeholder="Name"
            // value={'Ana Turner'}
            containerStyle={{
              backgroundColor: Color.backgroungColor,
            }}
          />
          <CustomInput
            placeholder="Email"
            // value={'ana@xyz.com'}
            containerStyle={{
              backgroundColor: Color.backgroungColor,
            }}
          />
          <CustomInput
            placeholder="Phone"
            // value={'9827212314'}
            containerStyle={{
              backgroundColor: Color.backgroungColor,
            }}
          />
        </View>
        <CustomButton
          type="primary"
          title="Update"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Auth'}],
            })
          }
          containerStyle={{
            alignSelf: 'center',
            width: Dimension.window.width * 0.35,
            paddingHorizontal: 15,
            marginTop: '30%',
          }}
        />
      </KeyboardAwareScrollView>
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

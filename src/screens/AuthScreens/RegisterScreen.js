import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MaskIcon from '../../assets/svg/maskIcon.svg';
import BackIcon from '../../assets/svg/backIcon.svg';
import {Color, Fonts} from '../../theme';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function RegisterScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backIcon}>
        <BackIcon width={50} />
      </TouchableOpacity>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View>
          <View style={{alignSelf: 'center', marginTop: 30}}>
            <MaskIcon height={110} width={110} style={{marginVertical: 10}} />
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={styles.title}>Hey, Register Now</Text>
          </View>
          <View
            style={{
              marginHorizontal: 40,
            }}>
            <CustomInput placeholder="Full Name" />
            <CustomInput placeholder="Email" />
            <CustomInput placeholder="Phone Number" />
            <CustomInput type="password" placeholder="Password" />
            <CustomInput type="password" placeholder="Confirm Password" />
          </View>
        </View>
        <View style={{marginTop: '10%'}}>
          <CustomButton
            type="primary"
            onPress={() => navigation.navigate('Verify')}
            title="Register"
            containerStyle={{
              marginHorizontal: 40,
            }}
          />
          {/* <Text style={styles.skip}>SKIP NOW</Text> */}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F0F7',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontFamily: Fonts.primaryBold,
    color: Color.black,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 40,
  },
  backIcon: {
    position: 'absolute',
    margin: 18,
    zIndex: 1,
  },
  skip: {
    fontSize: 17,
    fontFamily: Fonts.primaryBold,
    color: '#A7A6A9',
    textAlign: 'center',
    marginBottom: 20,
  },
});

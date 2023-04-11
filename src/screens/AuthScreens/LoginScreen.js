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

export default function LoginScreen({navigation}) {
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
            <Text style={styles.title}>Hey,</Text>
            <Text style={styles.title}>Login Now</Text>
          </View>
          <View
            style={{
              marginHorizontal: 40,
            }}>
            <CustomInput placeholder="Enter email or phone number" />
            <CustomInput type="password" placeholder="Password" />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Text style={{color: '#000', fontFamily: Fonts.primaryBold}}>
                Forgot password?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPass')}>
                <Text
                  style={{
                    color: '#689EE2',
                    fontFamily: Fonts.primaryBold,
                    marginLeft: 10,
                  }}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: '33%',
          }}>
          <CustomButton
            type="primary"
            onPress={() =>
              // navigation.reset({
              //   index: 0,
              //   routes: [{name: 'Main'}],
              // })
              navigation.navigate('Main')
            }
            title="Sign in"
            containerStyle={{
              marginHorizontal: 40,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 20,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: Fonts.primaryBold,
                fontSize: 17,
              }}>
              Not a member?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  color: '#689EE2',
                  fontFamily: Fonts.primaryBold,
                  marginLeft: 10,
                  fontSize: 17,
                }}>
                Register now
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.skip}>SKIP NOW</Text>
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

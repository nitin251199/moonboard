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

export default function VerifyCode({navigation}) {
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
            <Text style={styles.title}>Verify Code</Text>
          </View>
          <View
            style={{
              marginHorizontal: 40,
            }}>
            <Text style={styles.subtitle}>
              The confirmation code was sent to your email{' '}
              <Text style={{color: '#689EE2'}}>esmeralda@gmail.com</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              {[1, 2, 3, 4].map((item, index) => (
                <CustomInput
                  key={index}
                  placeholder=""
                  textAlign="center"
                  maxLength={1}
                  keyboardType="number-pad"
                  containerStyle={{
                    width: 60,
                    borderRadius: 8,
                    paddingVertical: 10,
                  }}
                />
              ))}
            </View>
            <View style={{marginTop: 30}}>
              <Text style={styles.skip}>00:54</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: '33%',
          }}>
          <CustomButton
            type="primary"
            title="Verify Now"
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
              Dont get the code?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  color: '#689EE2',
                  fontFamily: Fonts.primaryBold,
                  marginLeft: 10,
                  fontSize: 17,
                }}>
                Resend
              </Text>
            </TouchableOpacity>
          </View>
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
    fontFamily: Fonts.primaryMedium,
    color: '#A7A6A9',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: Fonts.primaryMedium,
    color: Color.black,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginVertical: 5,
    lineHeight: 22,
  },
});

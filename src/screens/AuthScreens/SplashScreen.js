import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import MaskIcon from '../../assets/svg/maskIcon.svg';
import SplashImage from '../../assets/svg/splashImage.svg';
import CustomButton from '../../components/CustomButton';
import {Color, Fonts} from '../../theme';

export default function SplashScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <MaskIcon style={{marginVertical: 10}} />
          <SplashImage height={300} style={{marginVertical: 5}} />
        </View>
        <Text style={styles.title}>Offender Locator</Text>
        <Text style={styles.subtitle}>
          best app alert notification when new offenders enter an area
        </Text>
        <CustomButton
          type="primary"
          onPress={() => navigation.navigate('Login')}
          title="Login"
          containerStyle={{
            marginTop: 20,
            marginHorizontal: 45,
          }}
        />
        <CustomButton
          onPress={() => navigation.navigate('Register')}
          type="secondary"
          title="Create my account"
          containerStyle={{
            marginHorizontal: 45,
            marginVertical: 15,
          }}
        />
        <Text style={styles.skip}>SKIP NOW</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F0F7',
  },
  title: {
    fontSize: 34,
    fontFamily: Fonts.primaryHeavy,
    color: Color.black,
    textAlign: 'center',
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: Fonts.primaryMedium,
    color: Color.black,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginVertical: 5,
  },
  skip: {
    fontSize: 17,
    fontFamily: Fonts.primaryBold,
    color: '#A7A6A9',
    textAlign: 'center',
    marginVertical: 35,
  },
});

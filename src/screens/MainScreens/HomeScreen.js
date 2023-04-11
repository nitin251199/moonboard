import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AppHeader from '../../navigation/AppHeader';
import {Color, Fonts} from '../../theme';
import StarIcon from '../../assets/svg/star.svg';
import ArrowDownIcon from '../../assets/svg/arrowDown.svg';
import CustomButton from '../../components/CustomButton';

const DashboardCard = React.lazy(() =>
  import('../../components/Cards/DashboardCard'),
);
const CrimeCard = React.lazy(() => import('../../components/Cards/CrimeCard'));

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{
          paddingBottom: 30,
        }}>
        <View style={styles.premiumCard}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <StarIcon />
            <Text style={styles.premiumText}>Go premium!</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.subText}>Access to special functions</Text>
            <ArrowDownIcon />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>History</Text>
          <Text style={styles.subTitle}>See all</Text>
        </View>
        <View style={styles.addComment}>
          <CustomButton
            type="primary"
            title="Add comments"
            containerStyle={{
              paddingVertical: 8,
              borderRadius: 8,
            }}
            titleStyle={{
              fontSize: 14,
            }}
          />
          <Text style={styles.commentText}>Comment on offenders</Text>
        </View>
        <View style={{marginTop: 15}}>
          {[1, 2].map((item, index) => (
            <DashboardCard index={index} key={index} />
          ))}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Crime Reports</Text>
        </View>
        <CrimeCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroungColor,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  premiumCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 30,
    marginTop: 15,
  },
  premiumText: {
    color: '#000',
    fontSize: 30,
    fontFamily: Fonts.primaryHeavy,
  },
  subText: {
    color: '#000',
    fontSize: 23,
    lineHeight: 28,
    fontFamily: Fonts.primaryBold,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.primaryBold,
    lineHeight: 34,
    color: Color.black,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: Fonts.primaryBold,
    color: '#689EE2',
  },
  addComment: {
    borderWidth: 1.6,
    borderColor: '#F14336',
    borderStyle: 'dashed',
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  commentText: {
    fontSize: 20,
    fontFamily: Fonts.primaryBold,
    color: '#000',
    textAlign: 'center',
    marginTop: 15,
  },
});

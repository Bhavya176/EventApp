import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {moderateScale} from './../../responsive';

export default function Header() {
  const name = useSelector(state => state.reducerLogin.name);
  console.log('name', name);
  return (
    <View style={styles.header}>
      <Text style={styles.greeting}>Hello {name}!</Text>
      <Text style={styles.subtext}>Are you ready to dance?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: moderateScale(16),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: moderateScale(20),
  },
  greeting: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: moderateScale(14),
    color: '#666',
    marginTop: moderateScale(4),
  },
});

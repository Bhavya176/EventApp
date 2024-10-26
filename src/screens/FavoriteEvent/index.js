import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import EventItem from '../../components/EventCard';
import {useSelector} from 'react-redux';
export default function FavoriteEvent() {
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  return (
    <ScrollView style={styles.container}>
      <Header username="Renzo" />
      {favorites?.map((event, index) => (
        <EventItem key={index} event={event} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

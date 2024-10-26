import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {ActionToggleFavoriteEvent} from './../redux/action/favoriteSlice';
import {moderateScale} from './../../responsive';
export default function EventItem({event}) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  const isFavorite = favorites.some(
    favEvent => favEvent.event_date_id === event.event_date_id,
  );
  const handleFavoriteToggle = () => {
    dispatch(ActionToggleFavoriteEvent(event));
  };
  return (
    <View style={styles.card}>
      <Image source={{uri: event.event_profile_img}} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.title}>{event.event_name}</Text>
        <Text style={styles.date}>
          {event.readable_from_date}
          {event.readable_to_date ? ` - ${event.readable_to_date}` : ''}
        </Text>
        <Text style={styles.price}>
          {event.event_price_from > 0 || event.event_price_to > 0
            ? `€${event.event_price_from} - €${event.event_price_to}`
            : 'Free'}
        </Text>

        <View style={styles.labelContainer}>
          {event.danceStyles.map((style, index) => (
            <Text key={index} style={styles.label}>
              {style.ds_name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="arrow-forward-outline" size={moderateScale(24)} />
        </TouchableOpacity>
        <Text style={styles.location}>{`${event.city},${event.country}`}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon name="share-outline" size={moderateScale(24)} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleFavoriteToggle}>
            <Icon
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={moderateScale(24)}
              color={isFavorite ? 'red' : '#000'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: moderateScale(16),
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    margin: moderateScale(5),
  },
  image: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(8),
    margin: moderateScale(5),
    alignSelf: 'center',
  },
  details: {flex: 2, padding: moderateScale(2)},
  title: {fontSize: moderateScale(16), fontWeight: 'bold'},
  date: {fontSize: moderateScale(14), color: '#28a745'},
  location: {fontSize: moderateScale(14), color: '#888'},
  price: {
    fontSize: moderateScale(14),
    marginTop: moderateScale(4),
    color: '#888',
  },
  actions: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  labelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: moderateScale(4),
  },
  label: {
    backgroundColor: '#eee',
    color: '#333',
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
    borderRadius: moderateScale(8),
    fontSize: moderateScale(12),
    marginRight: moderateScale(6),
  },
});

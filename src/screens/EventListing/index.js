import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Header from '../../components/Header';
import EventItem from '../../components/EventCard';

export default function EventListing() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLogin();
  }, []);
  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('email', 'testpracticaluser001@mailinator.com');
    formData.append('password', 'Test@123');

    try {
      const result = await fetch(
        'http://3.7.81.243/projects/plie-api/public/api/events-listing',
        {
          method: 'POST',
        },
      );
      const data = await result.json();
      if (result.ok) {
        setLoading(false);
        setEventData(data.data.events);
        // Alert.alert('API call successful', JSON.stringify(data.message));
      } else {
        // Alert.alert('API call failed', data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'Failed to login. ' + error.message);
    }
  };
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={styles.container}>
      <Header username="Renzo" />
      {eventData?.map((event, index) => (
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

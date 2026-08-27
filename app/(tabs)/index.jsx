import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Pressable, ScrollView, } from 'react-native';


import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import WorkerIdCard from '../../components/workerIdCard';
import LocationCard from '../../components/locationCard';
import CheckinCard from '../../components/checkin-card';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.idContainer}>
        <WorkerIdCard workerId={8896} name="Marcus Chen" role="Senior Site Technician" />
        <LocationCard location="Rig North-04 (Permian Basin)"/>
      </View>
      <ScrollView style={styles.scrollViewCotaniner} contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
        <CheckinCard />
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  scrollViewCotaniner: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  idContainer: {
    backgroundColor: '#03002d',
    width: '100%',
    height: '40%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 30,
  },
  
  
});

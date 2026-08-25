import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, Pressable, } from 'react-native';


import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import WorkerIdCard from '../../components/workerIdCard';
import LocationCard from '../../components/locationCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.idContainer}>
        <WorkerIdCard workerId={8896} name="Marcus Chen" role="Senior Site Technician" />
        <LocationCard location="Rig North-04 (Permian Basin)"/>
      </View>
      <View style={styles.shiftContainer}></View>
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
  shiftContainer: {
    backgroundColor: '#ffffff',
    flex: .4,
    margin: 20,
    borderRadius: 30,
    borderColor: "#e0e0e0",
    borderWidth: 1,
  }
  
});

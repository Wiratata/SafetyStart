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
      <View style={styles.shiftContainer}>
        <View style={styles.shiftTextContainer}>
          <View style={styles.iconContainer}></View>
          <View>
            <Text>Pre-Shift Safety</Text>
            <Text>Aug 25, 2026 • Shift start: 08:00 AM</Text>
          </View>
        </View>
          <Pressable style={styles.checklistBtn}>
            <Text style={styles.checklistText}>CHECKLIST</Text>
          </Pressable>      
      </View>
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
  }, 
  shiftTextContainer: {
    width: "90%",
    height: "50%",
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checklistBtn: {
      width:'90%',
      height:'40%',
      backgroundColor: 'rgb(255, 106, 0)',
      borderColor: 'rgb(255, 123, 0)',
      borderWidth: 1,
      borderRadius: 15,
      margin: 'auto',
      justifyContent: 'center'
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(255, 123, 0)',
    borderRadius: 20,
  },
  checklistText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 900,
    textAlign: 'center',

  },
  
});

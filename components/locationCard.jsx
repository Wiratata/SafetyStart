import { Platform, StyleSheet, View, Text, Pressable, } from 'react-native';

export default function LocationCard({location}){
    return (
        <View style={styles.locationContainer}>
            <View style={styles.locText}>
                <Text style={styles.subtitle}>CURRENT LOCATION</Text>
                <Text style={styles.titleLoc}>{location}</Text>
            </View>
            <Pressable style={styles.changeBtn}>
                <Text style={styles.orTextBtn}>Change</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    locationContainer: {
        width:'100%',
        height: '50%',
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.5)',
        borderWidth: 1,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    titleLoc: {
        fontSize: 16,
        fontWeight:'bold',
        color: '#ffffff'
    },
    locText : {
        width: '50%',
        height: '60%',
        margin: 'auto'
    },
    changeBtn:{
        width:'30%',
        height:'40%',
        backgroundColor: 'rgba(255, 106, 0, 0.1)',
        borderColor: 'rgb(255, 123, 0)',
        borderWidth: 1,
        borderRadius: 15,
        margin: 'auto'
    },
    orTextBtn: {
        margin: 'auto',
        fontSize: 20,
        color: '#ff8800',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        color: '#a8a8a8'
    },
})
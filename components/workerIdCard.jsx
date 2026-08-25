import { Platform, StyleSheet, View, Text, Pressable, } from 'react-native';


export default function WorkerIdCard({workerId, name, role}) {
    const initials = name.split(' ').map(w => w[0]).join('');
    return (
        <View style={styles.textID}>
            <View >
                <Text style={styles.orSubtitle}>WORKER ID: {workerId}</Text>
                <Text style={styles.nameTitle}>{name ?? "Unknown"}</Text>
                <Text style={styles.subtitle}>{role ?? ''}</Text>
            </View>

            <View style={styles.profileContainer}>
                <Text style={styles.profileTitle}>{initials}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  textID: {
    display: 'flex',
    height: "50%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 106, 0, 0.2)',
    borderColor: 'rgb(255, 123, 0)',
    borderWidth: 2,
    borderRadius: 50,
  },
  nameTitle: {
    fontSize: 30,
    fontWeight:'bold',
    color: '#ffffff'
  },  
  profileTitle: {
    fontSize: 18,
    fontWeight:'bold',
    color: '#ffffff',
    margin: 'auto',
    },
  subtitle: {
    fontSize: 14,
    color: '#a8a8a8'
  },
  orSubtitle: {
    fontSize: 14,
    color: '#ff8800'
  },

});

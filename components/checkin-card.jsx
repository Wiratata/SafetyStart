import { Platform, StyleSheet, View, Text, Pressable, } from 'react-native';

export default function CheckinCard() {
    return (
        <View style={styles.shiftContainer}>
            <View style={styles.shiftTextContainer}>
                <View style={styles.iconContainer}>

                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.shiftTitle}>Pre-Shift Safety</Text>
                    <Text style={styles.subtitle}>Aug 25, 2026 • Shift start: 08:00 AM</Text>
                </View>
            </View>
            <Pressable style={styles.checklistBtn}>
                <Text style={styles.checklistText}>CHECKLIST</Text>
            </Pressable>      
        </View>
    )
}

const styles=StyleSheet.create({
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
      marginHorizontal: 'auto',
      justifyContent: 'center'
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(255, 123, 0)',
    borderRadius: 20,
    marginLeft:25
  },
  checklistText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 900,
    textAlign: 'center',

  },
  textContainer: {
    width: "80%",
    height: "80%",
    padding: 10,
    display:"flex",
    justifyContent:"space-between",
  },

  shiftTitle: {
    fontSize: 20,
    fontWeight:'bold',
    color: '#444444'
  },  
  subtitle: {
    fontSize: 14,
    color: '#868686'
  },
})
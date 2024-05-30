
import { Text, View, Image, StyleSheet, Platform, ScrollView } from 'react-native';
const icon = require('./img/icon.png');

export default function Header(){
  return(
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={icon} style={{}}/>
        <Text style={styles.headerText}>my travel journal.</Text>
      </View>
      <View style={styles.bodyContainer}>

      </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
  },
  header:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f55a5a',
    fontSize: 30,
    height: 80,
    paddingTop: 25,
  },
  headerText:{
    color: 'white',
    fontSize: 14.46,
    fontFamily: 'Inter',
    fontWeight: '500',
    wordWrap: 'break-word',
    paddingLeft: 10
  },
  bodyContainer:{

  }

})
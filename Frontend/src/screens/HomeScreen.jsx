import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.text}>Inicio</Text>
          <View style={styles.profile}><Text style={{color: 'white', fontSize: 15, fontWeight: '700'}}>DT</Text></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    // paddingTop: 150,
    // flexDirection: 'col',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  text:{
    fontSize: 35,
    fontWeight: '700'
  },
  profile:{
    height: 40,
    width: 40,
    backgroundColor: 'grey',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    flexDirection: 'row', 
    width: '100%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  }
})
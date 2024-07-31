import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome6';
import songImage from '../assets/img-player.jpg';

const PlayerComponent = () => {
  return (
    <BlurView intensity={20} style={styles.playerContainer}>
      <View style={{flexDirection: 'row',...styles.container}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image source={songImage} style={styles.playerImage}/>
          <Text  style={styles.playerText}>PRIDE. </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 30, marginRight: 10, alignItems: 'center'}}>
          <AwesomeIcon name='play' size={20}/>
          <AwesomeIcon name='forward' size={25}/>
        </View>
      </View>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  playerImage:{
    height: 40,
    width: 40,
    borderRadius: 5
  },
  playerContainer: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    height: 55,
    marginHorizontal: 10,
    backgroundColor: 'rgb(250,250,250)',
    borderRadius: 15,
    overflow: 'hidden',
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500'
  },
  container:{
    height: 55,
    width: '100%',
    paddingHorizontal: 10,

    // backgroundColor: 'green',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    // elevation: 21
  }
})

export default PlayerComponent
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import ExplorerScreen from '../screens/ExplorerScreen';
import RadioScreen from '../screens/RadioScreen';
import BibliotecaScreen from '../screens/BibliotecaScreen';
import BuscarScreen from '../screens/BuscarScreen';
import PlayerComponent from '../components/PlayerComponent';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <View style={styles.container}>

      <PlayerComponent/>

      <Tab.Navigator 
        screenOptions={({route})=> ({
          tabBarIcon: ({focused}) => setIcon(route, focused),
          tabBarActiveTintColor: '#fa2d48',
          tabBarStyle: {
            // backgroundColor: '#ded9d2',
            borderTopColor: '#999',
            height: 120,
            paddingTop: 40,
            paddingBottom: 35
          },
        })}
        // sceneContainerStyle={{ backgroundColor: '#999'}}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} options={{headerShown: false}}/>
        <Tab.Screen name="Explorar" component={ExplorerScreen} />
        <Tab.Screen name="Radio" component={RadioScreen} />
        <Tab.Screen name="Biblioteca" component={BibliotecaScreen} />
        <Tab.Screen name="Buscar" component={BuscarScreen} />
      </Tab.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
});

function setIcon(route, focused) {
  let name;
  if( route.name === 'Inicio') name = 'home'
  else if( route.name === 'Explorar') name = 'grid'
  else if( route.name === 'Radio') name = 'radio'
  else if( route.name === 'Biblioteca') name = 'music'
  else if( route.name === 'Buscar') name = 'search'

  return <Icon name={name} size={25} color={focused ? '#fa2d48' : '#999'} />;
}

export default Footer

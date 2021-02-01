import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import pois from '../data/pois';
import map_p from '../data/map_p';








/*const Tab = createBottomTabNavigator();
const poisStack = createStackNavigator();
const map_pStack = createStackNavigator();

const poisStackScreen = () => (
  <poisStack.Navigator>
    <poisStack.Screen name="pois" component={pois} />
  </poisStack.Navigator>
)

const map_pStackScreen = () => (
  <map_pStack.Navigator>
    <map_pStack.Screen name="map_p" component={map_p} />
  </map_pStack.Navigator>
)*/


const Tab = createBottomTabNavigator();


 const Opt = () => {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="List" component={pois} />
        <Tab.Screen name="Map" component={map_p} />
      </Tab.Navigator>
    
  );
}



export default Opt;
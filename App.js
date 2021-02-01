import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HelloScreen from './screens/Hello';
import OptScreen from './screens/Opt';

const Stack = createStackNavigator();



const MyStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hello"
          component={HelloScreen}
          options={{title:'Welcome'}}
          />
        <Stack.Screen 
          name="Opt" 
          component={OptScreen} 
          options={{title:'Options'}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;






/*export default function App() {
  return (
    <Navigator/>
  );  
}

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Opt from './screens/Opt'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Opt/>
    </View>
    
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;*/










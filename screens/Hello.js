import * as React from 'react';
import { Button, View, Text } from 'react-native';



const Hello = ({navigation}) => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Hello Screen</Text>
              <Button  onPress= {()=> navigation.navigate('Opt')}
               title="Next Screen"
              />
           </View>
    )
}

export default Hello;

/*export default function Hello({navigation}) {
     
    const pressHandler = () => {
        navigation.navigate('Opt');
    }
    
    return (
      
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Hello Screen</Text>
              <Button title="Next Page" onPress={pressHandler}
              />
           </View>
    
    );
  }*/
  
   
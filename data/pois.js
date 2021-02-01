import * as React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         FlatList,          
         SafeAreaView, 
         ActivityIndicator } from 'react-native';

import { useEffect, useState } from 'react';


const url = "https://warply.s3.amazonaws.com/data/test_pois.json";

const pois = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() =>{ fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json.test_pois))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }, []);
  
  return (
     <SafeAreaView>
          {isLoading ? (<ActivityIndicator/> 
          ) : ( 
             <FlatList 
                 data={data}
                 keyExtractor={({ id }, index) => id}
                 renderItem={({item}) => (
                  <Text>
                    {item.latitude}
                    {item.address}
                    {item.longitude}
                  </Text>
                )}                                   
              />
          )}
     </SafeAreaView>
  );
  
};

export default pois;
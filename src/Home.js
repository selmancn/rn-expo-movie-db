import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { API_KEY, API_URL } from '../config'
import Card from './Card';
import SearchBar from './SearchBar'

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState()

  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    fetch(API_URL + '/movie/popular?api_key=' + API_KEY, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(res => setData(res))
  }

  console.log(data);
  return (
    <SafeAreaView style={{ display: 'flex', flex: 1, backgroundColor: '#333c4e' }}>


      <View>
        <ScrollView stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator={false}>

          <View style={{ marginBottom: 20 }}>
            <SearchBar />
          </View>
          {data && data.results.map(movie => {
            return <Card key={movie.id} movie={movie} navigation={navigation} />
          })}
        </ScrollView>
      </View >
    </SafeAreaView >
  );
}
export default HomeScreen
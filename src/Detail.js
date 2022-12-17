import { View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const DetailScreen = (props) => {
  console.log(props);
  let movie = props.route.params
  props.navigation.setOptions({ title: movie.title })
  return (
    <View style={{ flex: 1, display: 'flex' }}>

      <View style={{ display: 'flex', flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path }} />
      </View>

      <View style={{ display: 'flex', flex: 2, padding: 10, flexDirection: 'col' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>{movie.title}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Ionicons style={{ marginRight: 4 }} name="star" size={14} color="black" />
            <Text>{movie.vote_count + '/' + movie.vote_average}</Text>
          </View>
        </View>
        <View>
          <Text>
            {movie.overview}
          </Text>
        </View>

      </View>
    </View>
  );
}
export default DetailScreen
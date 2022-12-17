import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



const Card = (props) => {
  console.log(props);
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Detail', props.movie)} >
      <View style={styles.card}>
        <View style={styles.cardLeft}>
          <Image style={{ flex: 1 }} source={{ uri: 'https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path }} />
        </View>
        <View style={styles.cardRight}>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.movieTitle}>{props.movie.title}</Text>
          </View>
          <View style={{ marginBottom: 5, maxHeight: 40, }}>
            <Text numberOfLines={2}>{props.movie.overview}</Text>
          </View>
          <View style={{ marginBottom: 5, display: 'flex', flexDirection: 'row' }}>
            <Ionicons style={{ marginRight: 4 }} name="star" size={14} color="black" />
            <Text>{props.movie.vote_count + '/' + props.movie.vote_average}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
    padding: 8
  },
  cardLeft: {
    display: 'flex',
    flex: 1
  },
  cardRight: {
    paddingLeft: 10,
    display: 'flex',
    flex: 2
  },
  movieTitle: {
    fontWeight: 'bold'
  }
})
export default Card;
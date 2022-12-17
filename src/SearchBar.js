import { useState } from "react"
import { View, Text, TextInput } from "react-native"

const SearchBar = () => {
  const [searchText, setSearchText] = useState('')
  const handleChangeText = (e) => {
    setSearchText(e)
  }
  return (
    <View style={{ padding: 10, display: 'flex', backgroundColor: '#f9f9f9' }}>
      <TextInput placeholder="Ara" value={searchText} onChangeText={e => handleChangeText(e)}></TextInput>
    </View>
  )
}
export default SearchBar
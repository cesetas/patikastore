import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#CBD5E0',
    margin: 10,
  },
  image: {
    // width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    borderRadius: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    paddingVertical: 5,
  },
  price: {
    paddingVertical: 5,
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

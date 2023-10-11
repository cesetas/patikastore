import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import Product from './components/Product';
import products from './products.json';

function App() {
  const renderProduct = ({item}) => {
    return <Product product={item} key={item.id} />;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View>
        <Text style={styles.head}>PATIKASTORE</Text>
      </View>
      <TextInput style={styles.input} placeholder="Ara..." />

      <FlatList
        data={products}
        renderItem={renderProduct}
        style={styles.list}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    paddingHorizontal: 14,
  },
  head: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'justify',
    marginBottom: 10,
    marginLeft: 5,
  },
  input: {
    backgroundColor: '#CBD5E0',
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
  },
  list: {
    backgroundColor: 'white',
  },
});

export default App;

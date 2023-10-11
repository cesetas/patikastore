import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import styles from './Product.style';

const Product = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.imgURL}} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

export default Product;

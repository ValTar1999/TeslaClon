import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

  const { name, tagline, image} = props.car;

   return (
      <View style={styles.carContainer}>
        <ImageBackground
          source={image}
          style={styles.image} />

        <View style={styles.titles}>
          <text style={styles.title}>{name}</text>
          <text style={styles.subtitle}>{tagline}</text>
        </View>


        <View style={styles.buttonsConaatiner}>

          <StyledButton 
          type="primary" 
          content={'Custom Order'} 
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}/>

          <StyledButton 
          type="secondary" 
          content={'View Inventory'} 
          onPress={() => {
            console.warn("View Inventory was pressed");
          }}/>

        </View>
        
      </View>
   );
};


export default CarItem;
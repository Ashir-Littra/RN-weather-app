import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import React from 'react';

const Home = props => {
  if (!props.data) {
    return null;
  }
  return (
    <ImageBackground
      source={require('../Assets/home-back.jpg')}
      style={styles.container}>
      <View style={styles.weatherCelsius}>
        <Text style={styles.weatherCelsiusText}>
          {props.data.current.temp_c}°
        </Text>
        <Text style={styles.weatherIconText}>
          {props.data.current.condition.text}
        </Text>
      </View>
      <View style={styles.placeContainer}>
        <Text style={styles.placeOne}>
          {props.data.location.name}-{props.data.location.region}
        </Text>
      </View>

      <View style={styles.otherContainer}>
        <View style={styles.otherContent}>
          <Text style={styles.otherText}>Wind - </Text>
        <Text style={styles.otherText}> {props.data.current.wind_mph} mph </Text>
        </View>

         <View style={styles.otherContent}>
          <Text style={styles.otherText}>Pressure - </Text>
        <Text style={styles.otherText}> {props.data.current.pressure_in} in </Text>
        </View>

         <View style={styles.otherContent}>
          <Text style={styles.otherText}>Humidity - </Text>
        <Text style={styles.otherText}> {props.data.current.humidity} </Text>
        </View>


         <View style={styles.otherContent}>
          <Text style={styles.otherText}>Feels Like - </Text>
        <Text style={styles.otherText}> {props.data.current.feelslike_c}° </Text>
        </View>

      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },

  weatherIconImage: {
    width: 250,
    height: 200,
  },
  weatherIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherCelsiusText: {
    fontSize: 120,
    color: 'black',
    paddingTop: 50,
    fontFamily: 'Orbitron-VariableFont_wght',
  },
  weatherIconText: {
    fontSize: 30,
    fontFamily: 'ConcertOne-Regular',
    padding: 20,
    color: 'black',
  },
  weatherCelsius: {
    alignItems: 'center',
  },
  placeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeOne: {
    fontFamily: 'AlumniSansInlineOne-Regular',
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    padding: 10,
  },
  otherContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
    marginHorizontal:10
  },
  otherContainer:{
    marginTop:30,
  },
  otherText:{
    fontSize:30,
    color: 'black',
    fontWeight: 'bold',
  }

});

export default Home;

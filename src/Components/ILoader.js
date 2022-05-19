import { View, Text , StyleSheet } from 'react-native'
import React from 'react'

const ILoader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Weather  Map</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'royalblue',
    },
    text: {
      textAlign: 'center',
      color:'black',
        fontSize:60,
        fontFamily: 'Monoton-Regular',
    }

})

export default ILoader
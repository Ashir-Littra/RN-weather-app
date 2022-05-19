import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import ILoader from './src/Components/ILoader';
import Home from './src/Components/Home';
import RNLocation from 'react-native-location';

const App = () => {
  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');
  // const [permission,setPermission] = useState(false);
  const [weather, setWeather] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    getLocation();
  }, []);

  // get latitude and longitude first
  const getLocation = async () => {
    console.log('started');
    let Permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });
    if (Permission) {
      const location = await RNLocation.getLatestLocation({timeout: 100});
      const latitude = location.latitude;
      // setLatitude(location.latitude);
      const longitude = location.longitude;
      // setLongitude(location.longitude);
      // setPermission(true)
       
      if (Permission) {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key':
              '713842a602msh174312c58b53968p11c7fcjsnbe74d7be910b',
          },
        };

        const response = await fetch(
          `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude},${longitude}`,
          options,
        );
        const result = await response.json();
        setData({...result});
         setTimeout(function(){setWeather(true)},5000);
      }
    }
  };

  if (!weather) {
    return <ILoader />;
  }
  return <Home data={data} />;
};

export default App;

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [amPm, setAmPm] = useState('');

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours < 10 ? '0' + hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const strTime = `${hours}:${minutes}:${seconds}`;
    return { strTime, amPm };
  };

  const tick = () => {
    const now = new Date();
    const { strTime, amPm } = formatTime(now);
    setCurrentTime(strTime);
    setAmPm(amPm);
    requestAnimationFrame(tick);
  };

  useEffect(() => {
    const animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.clockText}>{currentTime}<Text style={styles.amPmText}>{amPm}</Text></Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
    
  },
  clockText: {
    fontSize: 55,
    marginTop: 12,
    marginLeft: 17,
    textAlign: 'center'
  },
  amPmText: {
    fontSize: 30,
    marginTop: 25,
    marginLeft: 17,
  },
});

export default DigitalClock;

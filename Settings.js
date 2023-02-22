import React, { useEffect, useRef } from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { TVEventHandler, useTVEventHandler } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ReviewDetails = ({ navigation }) => {

    const [fajrhr, setFajrhr] = useState('7')
    const [fajrmin, setFajrmin] = useState('15')
    const [dhuhrhr, setDhuhrhr] = useState('1')
    const [dhuhrmin, setDhuhrmin] = useState('45')
    const [asrhr, setAsrhr] = useState('3')
    const [asrmin, setAsrmin] = useState('45')
    const [maghribhr, setMaghribhr] = useState('6')
    const [maghribmin, setMaghribmin] = useState('0')
    const [ishahr, setIshahr] = useState('7')
    const [ishamin, setIshamin] = useState('0')

  const [getFajrHrValue, setGetFajrHrValue] = useState()
  const [getFajrMinValues, setGetFajrMinValues] = useState()
  const [getDhuhrHrValue, setGetDhuhrHrValue] = useState()
  const [getDhuhrMinValues, setGetDhuhrMinValues] = useState()
  const [getAsrHrValue, setGetAsrHrValue] = useState()
  const [getAsrMinValues, setGetAsrMinValues] = useState()
  const [getMaghribHrValue, setGetMaghribHrValue] = useState()
  const [getMagrhibMinValues, setGetMagrhibMinValues] = useState()
  const [getIshaMinValues, setGetIshaMinValues] = useState()
  const [getIshaHrValues, setGetIshaHrValues] = useState()  


  setValueLocally=()=>{
    AsyncStorage.setItem('Key_1', fajrhr);
    AsyncStorage.setItem('Key_2', fajrmin);
    AsyncStorage.setItem('Key_3', dhuhrhr);
    AsyncStorage.setItem('Key_4', dhuhrmin);
    AsyncStorage.setItem('Key_5', asrhr);
    AsyncStorage.setItem('Key_6', asrmin);
    AsyncStorage.setItem('Key_7', maghribhr);
    AsyncStorage.setItem('Key_8', maghribmin);
    AsyncStorage.setItem('Key_9', ishahr);
    AsyncStorage.setItem('Key_10', ishamin);
  }

getValueLocally=()=>{
    AsyncStorage.getItem('Key_1').then((value) => setGetFajrHrValue(value));
    AsyncStorage.getItem('Key_2').then((value) => setGetFajrMinValues(value));
    AsyncStorage.getItem('Key_3').then((value) => setGetDhuhrHrValue(value));
    AsyncStorage.getItem('Key_4').then((value) => setGetDhuhrMinValues(value));
    AsyncStorage.getItem('Key_5').then((value) => setGetAsrHrValue(value));
    AsyncStorage.getItem('Key_6').then((value) => setGetAsrMinValues(value));
    AsyncStorage.getItem('Key_7').then((value) => setGetMaghribHrValue(value));
    AsyncStorage.getItem('Key_8').then((value) => setGetMagrhibMinValues(value));
    AsyncStorage.getItem('Key_9').then((value) => setGetIshaHrValues(value));
    AsyncStorage.getItem('Key_10').then((value) => setGetIshaMinValues(value));
  }


const popHandler = () => {
navigation.pop()
  //navigation.goBack
}


const pushHandler = () => {
navigation.push("Home")
}
const fajrHour = useRef()
const fajrMinutes = useRef()
const dhuhrHour = useRef()
const dhuhrMinutes = useRef()
const asrHour = useRef()
const asrMinutes = useRef()
const maghribHour = useRef()
const maghribMinutes = useRef()
const ishaHour = useRef()
const ishaMinutes = useRef()

  useEffect(() => {
    getValueLocally()
   
 }, []);

return (
<View>
<Text>Set Prayer Times</Text>
<TouchableOpacity onPress={()=>fajrHour.current.focus()}>
<TextInput 
      placeholder='Insert Fajr Hour' 
      onChangeText={data => setFajrhr(data)}
      keyboardType='numeric'
      ref={fajrHour}
      />
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>fajrMinutes.current.focus()}>  
      <TextInput 
      placeholder='Insert Fajr Minutes' 
      onChangeText={(data) => {setFajrmin(data)}}
      keyboardType='numeric'
      ref={fajrMinutes}
      />    
</TouchableOpacity>

<TouchableOpacity onPress={()=>dhuhrHour.current.focus()}>  
      <TextInput
      placeholder ='Insert Dhuhr Hour'
      onChangeText={(data) => {setDhuhrhr(data)}}
      keyboardType='numeric'
      ref={dhuhrHour}
      />
</TouchableOpacity>

<TouchableOpacity onPress={()=>dhuhrMinutes.current.focus()}> 
      <TextInput 
      placeholder='Insert Dhuhr Minutes' 
      onChangeText={(data) => {setDhuhrmin(data)}}
      keyboardType='numeric'
      ref={dhuhrMinutes}
      />
</TouchableOpacity>

<TouchableOpacity onPress={()=>asrHour.current.focus()}> 
      <TextInput 
      placeholder='Insert Asr Hour' 
      onChangeText={data => setAsrhr(data)}
      keyboardType='numeric'
      ref={asrHour}
      />
</TouchableOpacity>

<TouchableOpacity onPress={()=>asrMinutes.current.focus()}> 
      <TextInput 
      placeholder='Insert Asr Minutes' 
      onChangeText={(data) => {setAsrmin(data)}}
      keyboardType='numeric'
      ref={asrMinutes}
      />    
</TouchableOpacity>

<TouchableOpacity onPress={()=>maghribHour.current.focus()}> 
      <TextInput 
      placeholder='Insert Maghrib Hour' 
      onChangeText={(data) => {setMaghribhr(data)}}
      keyboardType='numeric'
      ref={maghribHour}
      />
</TouchableOpacity>

<TouchableOpacity onPress={()=>maghribMinutes.current.focus()}> 
      <TextInput 
      placeholder='Insert Maghrib Minutes' 
      onChangeText={(data) => {setMaghribmin(data)}}
      keyboardType='numeric'
      ref={maghribMinutes}
      />
</TouchableOpacity>

<TouchableOpacity onPress={()=>ishaHour.current.focus()}> 
      <TextInput 
      placeholder='Insert Isha Hour' 
      onChangeText={(data) => {setIshahr(data)}}
      keyboardType='numeric'
      ref={ishaHour}
      />
</TouchableOpacity>

<TouchableOpacity onPress={()=>ishaMinutes.current.focus()}> 
      <TextInput 
      placeholder='Insert Isha Minutes' 
      onChangeText={(data) => {setIshamin(data)}}
      keyboardType='numeric'
      ref={ishaMinutes}
      />
  </TouchableOpacity>

<Text>If you have no updates DO NOT press any of the first 2 buttons. Only press the final button</Text>
          <Button title="Press this First"onPress={setValueLocally} />
          <Button title="Press this Second" onPress={getValueLocally} />
{/* <Button title="Press this after you press the first 2 buttons to return to Home Page" onPress={()=>navigation.navigate("Home", getDhuhrMinValues)} /> */}

<Button title="Press this after you press the first 2 buttons to return to Home Page" onPress={pushHandler} />
</View>
)
}
export default ReviewDetails
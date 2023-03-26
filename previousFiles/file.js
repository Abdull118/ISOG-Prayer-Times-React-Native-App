// import React, { useEffect, useState, useCallback } from 'react';
// import {Text, View, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity  } from 'react-native';
// import Modal from "react-native-modal";
// import AutoScroll from "@homielab/react-native-auto-scroll";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useFonts} from 'expo-font';
// import moment from 'moment';
// import nocellphone from './images/nocellphone.webp'
// import isog from './images/isog.png'
// import masjid from './images/masjidwo.png'

// export default App = () => {
//   let[fontsLoaded] = useFonts({
//     'Sansita-Regular': require('./assets/fonts/Sansita-Regular.ttf')
//   });


//   const [fajrhr, setFajrhr] = useState()
//   const [fajrmin, setFajrmin] = useState()
//   const [dhuhrhr, setDhuhrhr] = useState()
//   const [dhuhrmin, setDhuhrmin] = useState()
//   const [asrhr, setAsrhr] = useState()
//   const [asrmin, setAsrmin] = useState()
//   const [maghribhr, setMaghribhr] = useState()
//   const [maghribmin, setMaghribmin] = useState()
//   const [ishahr, setIshahr] = useState()
//   const [ishamin, setIshamin] = useState()
//   const [currentTime, setCurrentTime] = useState(0)
//   const [currentDate, setCurrentDate] = useState()
//   const [currentCustomDate, setCurrentCustomDate] = useState()
//   const [currentHijriDay, setCurrentHijriDay] = useState()
//   const [currentHijriMonth, setCurrentHijriMonth] = useState()
//   const [currentHijriYear, setCurrentHijriYear] = useState()
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const handleModal = () => setIsModalVisible(true);
//   const [getFajrHrValue, setGetFajrHrValue] = useState()
//   const [getFajrMinValues, setGetFajrMinValues] = useState()
//   const [getDhuhrHrValue, setGetDhuhrHrValue] = useState()
//   const [getDhuhrMinValues, setGetDhuhrMinValues] = useState()
//   const [getAsrHrValue, setGetAsrHrValue] = useState()
//   const [getAsrMinValues, setGetAsrMinValues] = useState()
//   const [getMaghribHrValue, setGetMaghribHrValue] = useState()
//   const [getMagrhibMinValues, setGetMagrhibMinValues] = useState()
//   const [getIshaMinValues, setGetIshaMinValues] = useState()
//   const [getIshaHrValues, setGetIshaHrValues] = useState()  

//   const getDate = async () => {
//      try {
//       const response = await fetch(`https://api.aladhan.com/v1/gToH?=${currentDate}`);
//       const json = await response.json();
//       setCurrentHijriDay(json.data.hijri.day)
//       setCurrentHijriMonth(json.data.hijri.month.en)
//       setCurrentHijriYear(json.data.hijri.year)
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   // setInterval(() => {
//   // var time = moment().utcOffset("-04:00").format(" hh:mm:ss A");
//   // setCurrentTime(time);
//   // var currentDate = moment().format("MM-DD-YYYY");
//   // setCurrentDate(currentDate)
//   // var date = moment().format("ddd. MMM DD, YYYY")
//   // setCurrentCustomDate(date)
//   // }, 1000);

// setValueLocally=()=>{
//     AsyncStorage.setItem('Key_1', fajrhr);
//     AsyncStorage.setItem('Key_2', fajrmin);
//     AsyncStorage.setItem('Key_3', dhuhrhr);
//     AsyncStorage.setItem('Key_4', dhuhrmin);
//     AsyncStorage.setItem('Key_5', asrhr);
//     AsyncStorage.setItem('Key_6', asrmin);
//     AsyncStorage.setItem('Key_7', maghribhr);
//     AsyncStorage.setItem('Key_8', maghribmin);
//     AsyncStorage.setItem('Key_9', ishahr);
//     AsyncStorage.setItem('Key_10', ishamin);
//   }

// getValueLocally=()=>{
//     setIsModalVisible(false)
//     AsyncStorage.getItem('Key_1').then((value) => setGetFajrHrValue(value));
//     AsyncStorage.getItem('Key_2').then((value) => setGetFajrMinValues(value));
//     AsyncStorage.getItem('Key_3').then((value) => setGetDhuhrHrValue(value));
//     AsyncStorage.getItem('Key_4').then((value) => setGetDhuhrMinValues(value));
//     AsyncStorage.getItem('Key_5').then((value) => setGetAsrHrValue(value));
//     AsyncStorage.getItem('Key_6').then((value) => setGetAsrMinValues(value));
//     AsyncStorage.getItem('Key_7').then((value) => setGetMaghribHrValue(value));
//     AsyncStorage.getItem('Key_8').then((value) => setGetMagrhibMinValues(value));
//     AsyncStorage.getItem('Key_9').then((value) => setGetIshaHrValues(value));
//     AsyncStorage.getItem('Key_10').then((value) => setGetIshaMinValues(value));
//   }

//   const [texter, setTexter] = useState('')
//   useEffect(() => {
//     getDate();
//     getValueLocally();
    

    
//  }, []);
//     return (
    
//     <View style={{ height: 'auto', width: 'auto', fontFamily: 'Sanista', flex:1 }} >
//       <View style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', top:0, width: 1300}}><Text></Text></View>
//     <Text style={styles.time}>{currentTime}</Text>
//     <ImageBackground source={masjid} resizeMode='cover' style={styles.image}>
   
//     <TouchableOpacity style={styles.nocellphone}onPress={handleModal}>
//     <Image style={styles.nocellphone} source={nocellphone} ></Image>
//     </TouchableOpacity>

//     <Image style={styles.isog} source={isog}></Image>
//     <Text style={{zIndex:1, opacity:1, padding: 10, color: 'white', position: 'absolute', top: 140, left: 0, fontSize: 25,}}>مسجد أبي بكر الصديق</Text>
//     <Text style={styles.customDate}>{currentCustomDate}</Text>
//     <Text style={styles.hijriDate}>{currentHijriDay} {currentHijriMonth} {currentHijriYear}H</Text>
    
//       <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 70}}>
// <View>
//       <Text style= {styles.prayer}>عشاء</Text>
//       <Text style= {styles.prayer}>{getIshaHrValues}:{getIshaMinValues} PM</Text>
// </View>
// <View>
//       <Text style= {styles.prayer}>مغرب</Text>
//       <Text style= {styles.prayer}>{getMaghribHrValue}:{getMagrhibMinValues} PM</Text>
// </View>
// <View>
//       <Text style= {styles.prayer}>عصر</Text>
//       <Text style= {styles.prayer}>{getAsrHrValue}:{getAsrMinValues} PM</Text>
// </View>

      
//       <View >
//       <Text style= {styles.prayer}>ظهر</Text>
//       <Text style= {styles.prayer}>{getDhuhrHrValue}:{getDhuhrMinValues} PM</Text>
// </View>
//       <View>
//       <Text style= {styles.prayer}>فجر</Text>
//       <Text style= {styles.prayer}>{getFajrHrValue}:{getFajrMinValues} AM</Text>
//     </View> 
// </View>

    
//       <Modal isVisible={isModalVisible} style={{backgroundColor:'white'}}>
//         <View >

//           <TextInput 
//       placeholder='Insert Fajr Hour' 
//       onChangeText={data => setFajrhr(data)}
//       keyboardType='numeric'
//       />
  
//       <TextInput 
//       placeholder='Insert Fajr Minutes' 
//       onChangeText={(data) => {setFajrmin(data)}}
//       keyboardType='numeric'
//       />    

//       <TextInput
//       placeholder ='Insert Dhuhr Hour'
//       onChangeText={(data) => {setDhuhrhr(data)}}
//       keyboardType='numeric'
//       />

//       <TextInput 
//       placeholder='Insert Dhuhr Minutes' 
//       onChangeText={(data) => {setDhuhrmin(data)}}
//       keyboardType='numeric'
//       />

//       <TextInput 
//       placeholder='Insert Asr Hour' 
//       onChangeText={data => setAsrhr(data)}
//       keyboardType='numeric'
//       />
  
//       <TextInput 
//       placeholder='Insert Asr Minutes' 
//       onChangeText={(data) => {setAsrmin(data)}}
//       keyboardType='numeric'
//       />    

//       <TextInput 
//       placeholder='Insert Maghrib Hour' 
//       onChangeText={(data) => {setMaghribhr(data)}}
//       keyboardType='numeric'
//       />

//       <TextInput 
//       placeholder='Insert Maghrib Minutes' 
//       onChangeText={(data) => {setMaghribmin(data)}}
//       keyboardType='numeric'
//       />

//       <TextInput 
//       placeholder='Insert Isha Hour' 
//       onChangeText={(data) => {setIshahr(data)}}
//       keyboardType='numeric'
//       />

//       <TextInput 
//       styles={styles.textInput}
//       placeholder='Insert Isha Minutes' 
//       onChangeText={(data) => {setIshamin(data)}}
//       keyboardType='numeric'
//       />
//           <Button title="SAVE"onPress={setValueLocally} />
//           <Button title="Finished" onPress={getValueLocally} />
//         </View>
//       </Modal>
//       <View style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', bottom:0, width: 1300}}>
//         <AutoScroll>
//       <Text style={{color: 'white', fontSize: 28, textAlign: 'center',fontFamily: 'Sansita-Regular',}}>Join our Weekend Islamic School from 9AM - 1PM         Remember to Donate to the Masjid!
//            </Text> 
//            </AutoScroll>
//            </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
  
//   time:{color: 'white', 
//   opacity: 1, 
//   zIndex: 1,
//   position:'absolute',
//   top: 150,
//   left: 270,
//   textAlign: 'center',
//   fontSize: 128,
//   fontFamily: 'Sansita-Regular'
//   },

// image: {
//         opacity: 1,
//         height: 'auto',
//         padding: 230,
        
//   },
//   hijriDate:{
//   position:'absolute',
//   top: 10,
//   right:10,
//   color: 'white',
//   fontSize: 40,
//   fontFamily: 'Sansita-Regular',

//   },

//   customDate:{
//     position: 'absolute',
//     top:45,
//     right: 40,
//     color: 'white',
//     fontSize: 40,
//     textAlign: 'center',
//     fontFamily: 'Sansita-Regular',
//   },

//   hadith:{
//     position: 'absolute',
//     bottom: 0,
//     backgroundColor: 'black',
//     width: '100%',
//     marginBottom: 0,
    
    
//   },

//   settings:{
//    opacity:1,
//    backgroundColor: 'white'
//   },

//   textInput: {
//     backgroundColor: 'white',
//     color: 'white',
//   },


  
//   nocellphone:
//     {opacity:0.65, zIndex: 1, padding: 40, width: 50, height: 'auto', position: 'absolute', bottom: 25, right: 20},
  
//   prayer:{color: 'white', textAlign: 'center', fontSize: 50, fontFamily: 'Sansita-Regular', marginLeft: 40, marginRight: 30},

//   isog:{
//     position: 'absolute',
//     top: 10,
//     left: 20,
//     opacity: 0.4
//   }

// })
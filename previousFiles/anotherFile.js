// import React, { useEffect, useState, useCallback } from 'react';
// import {Text, View, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView  } from 'react-native';
// import {useFonts} from 'expo-font';
// import moment from 'moment';
// import nocellphone from './images/nocellphone.webp'
// import isog from './images/isog.png'
// import masjid from './images/masjidwo.png'
// import { useKeepAwake } from 'expo-keep-awake';
// import TextTicker from 'react-native-text-ticker'
// import MarqueeText from 'react-native-marquee';
// import AnalogClock from 'react-native-clock-analog';

// export default App = () => {
//   let[fontsLoaded] = useFonts({
//     'Sansita-Regular': require('./assets/fonts/Sansita-Regular.ttf')
//   });


//   const [currentTime, setCurrentTime] = useState(0)
//   const [date, setDate] = useState('')
//   const [maghribAthan, setMaghribAthan] = useState()
//   const [shuruq, setShuruq] = useState()
//   const [currentDate, setCurrentDate] = useState()
//   const [currentCustomDate, setCurrentCustomDate] = useState()
//   const [currentHijriDay, setCurrentHijriDay] = useState()
//   const [currentHijriMonth, setCurrentHijriMonth] = useState()
//   const [currentHijriYear, setCurrentHijriYear] = useState()
//   const [weatherValue, setWeatherValue] = useState()
//   const [weatherUnit, setWeatherUnit] = useState()
//   const [weatherText, setWeatherText] = useState()
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const handleModal = () => setIsModalVisible(true);
  

//   const getHijriDate = async () => {
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
//   // const getWeather = async()=>{
//   //   try{
//   //     const response = await fetch('https://dataservice.accuweather.com/currentconditions/v1/49546?apikey=NiPLd1MjN9TM2xPq5AGARfDMoBd8wJ2j')
//   //     const json = await response.json()
//   //     console.log(json[0])
//   //     var value = (json[0].Temperature.Metric.Value)
//   //     setWeatherValue(value)
//   //     var unit = (json[0].Temperature.Metric.Unit)
//   //     setWeatherUnit(unit)
//   //     var text = (json[0].WeatherText)
//   //     setWeatherText(text)

//   //   }catch(error){console.error(error)}
//   // }

//   const getAthan = async () => {
//     try {
//      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=Guelph&country=Canada&method=2`);
//      const json = await response.json();
//      convertTo12Hour(json.data.timings.Maghrib)
//      convertTo12Hour2(json.data.timings.Sunrise)
//    } catch (error) {
//      console.error(error);
//    }
//  }

//  function convertTo12Hour(oldFormatTime) {
//   console.log("oldFormatTime: " + oldFormatTime);
//   var oldFormatTimeArray = oldFormatTime.split(":");

//   var HH = parseInt(oldFormatTimeArray[0]);
//   var min = oldFormatTimeArray[1];

//   var AMPM = HH >= 12 ? "PM" : "AM";
//   var hours;
//   if(HH == 0){
//     hours = HH + 12;
//   } else if (HH > 12) {
//     hours = HH - 12;
//   } else {
//     hours = HH;
//   }
//   var newFormatTime = hours + ":" + min + " " + AMPM;
//   setMaghribAthan(newFormatTime)
// }

// function convertTo12Hour2(oldFormatTime) {
//   console.log("oldFormatTime: " + oldFormatTime);
//   var oldFormatTimeArray = oldFormatTime.split(":");

//   var HH = parseInt(oldFormatTimeArray[0]);
//   var min = oldFormatTimeArray[1];

//   var AMPM = HH >= 12 ? "PM" : "AM";
//   var hours;
//   if(HH == 0){
//     hours = HH + 12;
//   } else if (HH > 12) {
//     hours = HH - 12;
//   } else {
//     hours = HH;
//   }
//   var newFormatTime = hours + ":" + min + " " + AMPM;
//   setShuruq(newFormatTime)
// }

//   useKeepAwake();
  
//   const getCurrentTime = () => {
//     let today = new Date();
//     let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
//     let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
//     let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
//     let timing = 'A'
//     if(hours>12){
//       hours = hours - 12
//       if(hours<10){
//         hours = '0'+hours
//       }
//       timing = 'PM'
//     }else{
//       timing = 'AM'
//     }
//     return hours + ':' + minutes + ':' + seconds + ' ' + timing;
//   } 
    
//     const getDate = () => {
//     var today = new Date(),
 
//     date = (today.getMonth() + 1)  + '-' + today.getDate() + '-' + today.getFullYear();
 
//     setCurrentCustomDate(date)
//     setCurrentDate(date)
//     console.log(date)
//   };

  
  
//   useEffect(() => {
//       getDate()
//       getHijriDate()
//       // getWeather()
//       getAthan()

//     setInterval(()=>{
//       getDate()
//       getHijriDate()
//       getAthan()
//     }, 21600000)

//     // setInterval(()=>{
//     //   getWeather()
//     // }, 1800000)

//     // setInterval(() => {
//     //   var time = getCurrentTime();
//     //   setCurrentTime(time)
      
//     //     }, 1000);
//  }, []);

//     return (
    
//     <View style={{ height: 'auto', width: 'auto', fontFamily: 'Sanista', flex:1 }} >
//       <View style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', top:0, width: 1300}}><Text></Text></View>
//     {/* <Text style={styles.time}>{currentTime}</Text> */}
//     <ImageBackground source={masjid} resizeMode='cover' style={styles.image}>
//     <View style={styles.container}>
//       <ImageBackground
//                 style={{
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: 500,
          
//         }}>
        
//         <View style={{ marginBottom: 5 }} />
//         <AnalogClock
//           colorClock="blue"
//           colorNumber="#FFFFFF"
//           colorCenter="#000000"
//           colorHour="#FFFFFF"
//           colorMinutes="#FFFFFF"
//           autostart={true}
//           showSeconds={true}
//         />
//       </ImageBackground>
//     </View>
//     <TouchableOpacity style={styles.nocellphone}onPress={handleModal}>
//     <Image style={styles.nocellphone} source={nocellphone} ></Image>
//     </TouchableOpacity>

//     <Image style={styles.isog} source={isog}></Image>
//     <Text style={{zIndex:1, opacity:1, padding: 10, color: 'white', position: 'absolute', top: 140, left: 0, fontSize: 25,}}>مسجد أبي بكر الصديق</Text>
//     <Text style={styles.customDate}>{currentCustomDate}</Text>
//     <Text style={styles.hijriDate}>{currentHijriDay} {currentHijriMonth} {currentHijriYear}H</Text>
//     {/* <Text style={{zIndex:1, opacity:1, paddingLeft: 5, color: 'white', position: 'absolute', top: 0, left: 0, fontSize: 17,}}>Today's Weather: {weatherText} {weatherValue}{weatherUnit}</Text>
//      */}
//       <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 140, zIndex:1, opacity:1,}}>
// <View>
//       <Text style= {styles.prayer}>عشاء</Text>
//       <Text style= {styles.prayer}>8:15 PM</Text>
// </View>
// <View>
//       <Text style= {styles.prayer}>مغرب</Text>
//       <Text style= {styles.prayer}>{maghribAthan}</Text>
// </View>
// <View>
//       <Text style= {styles.prayer}>عصر</Text>
//       <Text style= {styles.prayer}>6:00 PM</Text>
// </View>
  
  
      
//       <View >
//       <Text style= {styles.prayer}>ظهر</Text>
//       <Text style= {styles.prayer}>1:45 PM</Text>
// </View>



//       <View>
//       <Text style= {styles.prayer}>فجر</Text>
//       <Text style= {styles.prayer}>7:00 AM</Text>
//     </View> 
// </View>

// <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 15, zIndex:1, opacity:1,}}>
// <View >
//       <Text style= {styles.prayer}>جمعة</Text>
//       <Text style= {styles.prayer}>1:30 PM</Text>
// </View>

// <View >
//       <Text style= {styles.prayer}>الشُّروق</Text>
//       <Text style= {styles.prayer}>{shuruq}</Text>
// </View>
//     </View>
      
    
//       <View style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', bottom:5, width: 1000}}>
        
          
//       <TextTicker 
//           duration={300000}
//           loop
//           repeatSpacer={30}
//           marqueeDelay={1000}
//           style={{color: 'white', fontSize: 22, fontFamily: 'Sansita-Regular', paddingBottom:48, textAlign: 'center'}}>
//             Join our Weekend Islamic School from 9AM - 1PM         Remember to Donate to the Masjid!!         Join our Weekend Islamic School from 9AM - 1PM         Remember to Donate to the Masjid!!
//            </TextTicker> 
          
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
//   left: 200,
//   textAlign: 'center',
//   fontSize: 110,
//   fontFamily: 'Sansita-Regular'
//   },

// image: {
//         opacity: 1,
//         height: 'auto',
//         padding: 120,
        
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
//     {opacity:0.65, 
//       zIndex: 1, 
//       padding: 40, 
//       width: 50, 
//       height: 'auto', 
//       position: 'absolute', 
//       bottom: 43, 
//       right: 20},
  
//   prayer:{
//     color: 'white', 
//     textAlign: 'center', 
//     fontSize: 38, 
//     fontFamily: 'Sansita-Regular', 
//     marginLeft: 20, 
//     marginRight: 10, 
//     zIndex:1, 
//     opacity:1,
//   },

//   isog:{
//     position: 'absolute',
//     top: 13,
//     left: 23,
//     opacity: 0.4
//   },
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
     
      
//     },
 
// })
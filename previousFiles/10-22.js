// import React, { useEffect, useState, useCallback } from 'react';
// import {Text, View, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView  } from 'react-native';
// import {useFonts} from 'expo-font';
// import nocellphone from './images/nocellphone.webp'
// import isog from './images/isog2.png'
// import masjid from './images/masjidwo.png'
// import { useKeepAwake } from 'expo-keep-awake';
// import TextTicker from 'react-native-text-ticker'
// import AnalogClock from 'react-native-clock-analog';
// import sunrise from'./images/sunrise.png'
// import sun from './images/sun.png'
// import haze from './images/haze.png'
// import moon from './images/moon.png'
// import sunset from './images/sunset.png'
// import fajr from './images/fajr.png'
// import { LinearGradient } from "expo-linear-gradient";


// export default App = () => {
//   let[fontsLoaded] = useFonts({
//     'Sansita-Regular': require('./assets/fonts/Sansita-Regular.ttf')
//   });

//   const [fajrAthan ,setFajrAthan] = useState()
//   const [dhurAthan, setDhurAthan] = useState()
//   const [asrAthan, setAsrAthan] = useState()
//   const [maghribAthan, setMaghribAthan] = useState()
//   const [ishaAthan, setIshaAthan] = useState()
//   const [shuruq, setShuruq] = useState()
//   const [currentDate, setCurrentDate] = useState()
//   const [currentCustomDate, setCurrentCustomDate] = useState()
//   const [currentHijriDay, setCurrentHijriDay] = useState()
//   const [currentHijriMonth, setCurrentHijriMonth] = useState()
//   const [currentHijriYear, setCurrentHijriYear] = useState()
//   const [weatherValue, setWeatherValue] = useState()
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
//   //     var text = (json[0].WeatherText)
//   //     setWeatherText(text)

//   //   }catch(error){console.error(error)}
//   // }

//   const getAthan = async () => {
//     try {
//      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=Guelph&country=Canada&method=2`);
//      const json = await response.json();
//      setFajrAthan(convertTo12Hour(json.data.timings.Fajr))
//      setDhurAthan(convertTo12Hour(json.data.timings.Dhuhr))
//      setAsrAthan(convertTo12Hour(json.data.timings.Asr))
//      setMaghribAthan(convertTo12Hour(json.data.timings.Maghrib))
//      setIshaAthan(convertTo12Hour(json.data.timings.Isha))
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
//   return newFormatTime
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


// useKeepAwake();

    
// const getDate = () => {
//   var today = new Date(),
 
//   date = (today.getMonth() + 1)  + '-' + today.getDate() + '-' + today.getFullYear();
 
//   setCurrentCustomDate(date)
//   setCurrentDate(date)
//   console.log(date)
// };

  
  
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
//     // }, 2700000)

//     // setInterval(() => {
//     //   var time = getCurrentTime();
//     //   setCurrentTime(time)
      
//     //     }, 1000);
//  }, []);

//     return (
    
//     <View style={{ height: 'auto', width: 'auto', fontFamily: 'Sanista', flex:1 }} >
//     {/* <View style={{zIndex:2, opacity:1, backgroundColor: 'black', position: 'absolute', top:0, width: 1300}}><Text></Text></View> */}
//     {/* <Text style={styles.time}>{currentTime}</Text> */}
//     <ImageBackground source={masjid} resizeMode='cover' style={styles.image}></ImageBackground>
    
//     <TouchableOpacity style={styles.nocellphone}onPress={handleModal}>
//     <Image style={styles.nocellphone} source={nocellphone} ></Image>
//     </TouchableOpacity>
    
// <View style={{zIndex:2, opacity:1, padding: 10, position: 'absolute', top: 0, right: 0, fontSize: 25, height: 75, width: 1300, textAlign: 'right', backgroundColor: "rgb(118,113,102)"}}>
//     <Image style={styles.isog} source={isog}></Image>
//     <Text style={{position: 'absolute', right: 80, top: 10, fontSize:25, color: 'white', fontWeight: 'bold'}}>مسجد أبي بكر الصديق/Masjid Abu Bakr As-Siddique</Text>
//     <Text style={{position: 'absolute', right: 180, top: 40, color: 'white'}}>126 Norwich St E, Guelph, ON N1E 2G7, Canada</Text>
    
// </View>

//     <LinearGradient colors={['rgb(0, 78, 192)', '#000000']} style={styles.hijriDate} end={{ x: 0, y: 1 }}
//   start={{ x: 1, y: 1 }}>
//     <Text style={styles.customDate}>{currentCustomDate} / {currentHijriDay} {currentHijriMonth} {currentHijriYear}H</Text>
//     </LinearGradient>

//     <View style={{zIndex:2, opacity:1, paddingLeft: 5, color: 'white', position: 'absolute', bottom: 33, right: 10, fontSize: 17, flexDirection: 'row'}}>
//       <Text style={{backgroundColor: 'rgb(0, 78, 192)', borderBottomLeftRadius: 5, borderTopLeftRadius: 5, color: 'white', width: 120, paddingLeft: 5}}>Today's Weather:</Text>
//       <Text style={{backgroundColor: 'white', borderBottomRightRadius: 5, borderTopRightRadius: 5}}> {weatherText} {weatherValue}°C </Text></View>



// <View style={{position:'absolute',
//            left: 240, top: 160, zIndex: 3, }}>
//        <ImageBackground>
        
//          <View style={{ marginBottom: 5}} />
//          <AnalogClock
//            colorClock="rgb(2, 87, 151)"
//            colorNumber="#FFFFFF"
//            colorCenter="#000000"
//            colorHour="#FFFFFF"
//            colorMinutes="#FFFFFF"
//            autostart={true}
//            showSeconds={true}
//            size={220}
//         />
//       </ImageBackground>
//    </View>
//       <LinearGradient colors={['rgb(0, 78, 192)', '#000000']} style={{zIndex:2, opacity:1, width: 350, position:'absolute', height:550, paddingTop: 5, paddingBottom: 25,  borderBottomRightRadius: 125, borderTopRightRadius: 150}}>

//     <View>
//       <Image style={{position: 'absolute', top: 15, left: 5}}source={fajr}></Image>
    
//       <View>
//         <Text style= {styles.prayer}>الفجر</Text>
//         <Text style= {styles.prayer2}>7:15 AM</Text>
//     </View>
//   </View>
    
    
//     <View>
//     <Image style={{position: 'absolute', top: 20, left: 5}}source={sunrise}></Image>
    
//       <Text  style= {styles.prayer}>الشُّروق</Text>
//       <Text  style= {styles.prayer2}>{shuruq}</Text>
// </View>

// <View>
//   <Image style={{position: 'absolute', top: 30, left: 5}} source={sun}></Image>
// <View >
//       <Text style= {styles.prayer}>الظهر</Text>
//       <Text style= {styles.prayer2}>1:45 PM</Text>
// </View>
// </View>


// <View >
//       <Text  style= {styles.prayer}>الجمعة</Text>
//       <Text  style= {styles.prayer2}> 1:30 PM</Text>
// </View>

// <View>

// <Image style={{position: 'absolute', top: 10, left: 5}}source={haze}></Image>

//   <View >
//       <Text style= {styles.prayer}>العصر</Text>
//       <Text style= {styles.prayer2}>6:00 PM</Text>
// </View>

// </View>

// <View >
// <Image style={{position: 'absolute', bottom: 5, left: 5}}source={sunset}></Image>

//   <View>
//       <Text style= {styles.prayer}>المغرب</Text>
//       <Text style= {styles.prayer2}>{maghribAthan}</Text>
// </View>
// </View>

//     <View>
//     <Image style={{position: 'absolute', bottom: 10, left: 5}}source={moon}></Image>
//       <View>
//       <Text style= {styles.prayer}>العشاء</Text>
//       <Text style= {styles.prayer2}>8:00 PM</Text>
// </View>
    
      
// </View>     
// </LinearGradient>


      
//     {/* Moving Banner */}
//       <View style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', bottom:0, width: 1000}}>
        
          
//       <TextTicker 
//           duration={60000}
//           loop
//           repeatSpacer={30}
//           marqueeDelay={1000}
//           style={{color: 'white', zIndex: 1, fontSize: 22, fontFamily: 'Sansita-Regular', paddingBottom:0, textAlign: 'center', }}>
//             Join our Weekend Islamic School from 9AM - 1PM         Remember to Donate to the Masjid!!         Turn off your Phone while in the Masjid         Join our Weekend Islamic School from 9AM - 1PM         Remember to Donate to the Masjid!!         Turn off your Phone while in the Masjid         
//            </TextTicker> 
          
//            </View>
      
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
//         paddingTop: 300,
//         paddingBottom: 240,
//         marginLeft: 300
        
        
//   },
//   hijriDate:{
//   position:'absolute',
//   top: 75,
//   right: 0,
//   width: 1000,
//   textAlign:'right',
//   color: 'white',
//   fontSize: 22,
//   fontFamily: 'Sansita-Regular',
//   },

//   customDate:{
    
//     color: 'white',
//     fontSize: 22,
//     textAlign: 'right',
//     fontFamily: 'Sansita-Regular',
//     paddingRight:5
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
//       bottom: 30, 
//       right: 10},
  
//   prayer:{
//     color: 'white', 
//     textAlign: 'left', 
//     paddingLeft: 80,
//     fontSize: 25, 
//     fontFamily: 'Sansita-Regular', 
//     zIndex:2, 
//     opacity:1,
//   },
//   prayer2:{
//     color: 'white', 
//     textAlign: 'left', 
//     paddingLeft: 80,
//     fontSize: 25, 
//     fontFamily: 'Sansita-Regular',
//     fontWeight: 'bold', 
//     zIndex:1, 
//     opacity:1,
//   },

//   isog:{
//     position: 'absolute',
//     top: 2,
//     right: -2,
//     opacity: 0.6,
//     color: 'white',
//     width: 80,
//     height: 70
//   },
    
 
// })
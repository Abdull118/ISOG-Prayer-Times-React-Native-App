// import React, { useEffect, useState, useCallback } from 'react';
// import {Text, View, TextInput, Button, StyleSheet, ImageBackground, Image, TouchableOpacity  } from 'react-native';
// import {useFonts} from 'expo-font';
// import moment from 'moment';

// import { useKeepAwake } from 'expo-keep-awake';


// export default App = () => {

//   const [currentTime, setCurrentTime] = useState(0)
//   const [date, setDate] = useState('')
//   const [currentDate, setCurrentDate] = useState()
//   const [currentCustomDate, setCurrentCustomDate] = useState()
//   const [currentHijriDay, setCurrentHijriDay] = useState()
//   const [currentHijriMonth, setCurrentHijriMonth] = useState()
//   const [currentHijriYear, setCurrentHijriYear] = useState()
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


//   useKeepAwake();
  
//   const getCurrentTime = () => {
//     let today = new Date();
//     let hours = (23);
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
  
//   const getDate = () => {
//     var today = new Date(),
 
//     date = (today.getMonth() + 1)  + '-' + today.getDate() + '-' + today.getFullYear();
 
//     setCurrentCustomDate(date)
//     setCurrentDate(date)
//     console.log(date)
//   };
  
  
//   useEffect(() => {
//     getDate()
//     getHijriDate()
//     setInterval(() => {
//       var time = getCurrentTime();
//       setCurrentTime(time)
//         }, 1000);
//  }, []);


//     return (
    
//     <View style={{ height: 'auto', width: 'auto', fontFamily: 'Sanista', flex:1 }} >
//       <View style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', top:0, width: 1300}}><Text></Text></View>
//     <Text style={styles.time}>{currentTime}</Text>
   
   
//     <TouchableOpacity style={styles.nocellphone}onPress={handleModal}>
    
//     </TouchableOpacity>

   
//     <Text style={{zIndex:1, opacity:1, padding: 10, color: 'black', position: 'absolute', top: 140, left: 0, fontSize: 25,}}>مسجد أبي بكر الصديق</Text>
//     <Text style={styles.customDate}>{currentCustomDate}</Text>
//     <Text style={styles.hijriDate}>{currentHijriDay} {currentHijriMonth} {currentHijriYear}H</Text>
    
//       <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 70, zIndex:1, opacity:1,}}>
// <View>
//       <Text style= {styles.prayer}>عشاء</Text>
//       <Text style= {styles.prayer}>8:45 PM</Text>
// </View>
// <View>
//       <Text style= {styles.prayer}>مغرب</Text>
//       <Text style= {styles.prayer}>7:15 PM</Text>
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
//       <Text style= {styles.prayer}>6:45 AM</Text>
//     </View> 
// </View>

    
//       <View style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', bottom:5, width: 1000}}>
        
//       <Text style={{color: 'white', fontSize: 20, textAlign: 'center',fontFamily: 'Sansita-Regular'}}>Join our Weekend Islamic School from 9AM - 1PM         Remember to Donate to the Masjid!
//            </Text> 
          
//            </View>
      
//     </View>
//   );
// };

// const styles = StyleSheet.create({
  
//   time:{color: 'black', 
//   opacity: 1, 
//   zIndex: 1,
//   position:'absolute',
//   top: 150,
//   left: 180,
//   textAlign: 'center',
//   fontSize: 110,
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
//   color: 'black',
//   fontSize: 40,
//   fontFamily: 'Sansita-Regular',

//   },

//   customDate:{
//     position: 'absolute',
//     top:45,
//     right: 40,
//     color: 'black',
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
  
//   prayer:{color: 'white', textAlign: 'center', fontSize: 38, fontFamily: 'Sansita-Regular', marginLeft: 20, marginRight: 10, zIndex:1, opacity:1,},

//   isog:{
//     position: 'absolute',
//     top: 13,
//     left: 23,
//     opacity: 0.4
//   }

// })
import React, { useEffect, useState,  } from 'react';
import {Text, Dimensions, View,StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import {useFonts} from 'expo-font';
import nocellphone from './images/nocellphone.webp'
import isog from './images/isog2.png'
import masjid from './images/masjidwo.png'
import { useKeepAwake } from 'expo-keep-awake';
import AnalogClock from 'react-native-clock-analog';
import { LinearGradient } from "expo-linear-gradient";
import moment from 'moment/moment';
// import { TVEventHandler, useTVEventHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default Home = ({navigation, route}) => {
  let[fontsLoaded] = useFonts({
    'Sansita-Regular': require('./assets/fonts/Sansita-Regular.ttf')
  });

  const pressHandler = () => {
    navigation.push("Settings")
    }

  
  const [fajrAthan ,setFajrAthan] = useState()
  const [dhurAthan, setDhurAthan] = useState()
  const [asrAthan, setAsrAthan] = useState()
  const [maghribAthan, setMaghribAthan] = useState()
  const [changeableMaghribAthan, setChangeableMaghribAthan] = useState()
  const [ishaAthan, setIshaAthan] = useState()
  const [shuruq, setShuruq] = useState()
  const [currentDate, setCurrentDate] = useState()
  const [currentCustomDate, setCurrentCustomDate] = useState()
  const [momentDate, setMomentDate] = useState()
  const [currentHijriDay, setCurrentHijriDay] = useState()
  const [currentHijriMonth, setCurrentHijriMonth] = useState()
  const [currentHijriYear, setCurrentHijriYear] = useState()
  const [weatherValue, setWeatherValue] = useState()
  const [weatherText, setWeatherText] = useState()
  const [countDownTimer, setCountDownTimer] = useState('')
  const [until, setUntil] = useState()



  // //For TVEventHandler
  // const [lastEventType, setLastEventType] = useState('');


  // const myTVEventHandler = evt => {
  //   setLastEventType(evt.eventType);
  //   console.log(evt.eventType)

  //   if(evt.eventType === "back"){
  //     setIsModalVisible(false)
  //   }
    
  // };

  // useTVEventHandler(myTVEventHandler);


  const getHijriDate = async () => {
     try {
      const response = await fetch(`https://api.aladhan.com/v1/gToH?=${currentDate}`);
      const json = await response.json();
      setCurrentHijriDay(json.data.hijri.day)
      setCurrentHijriMonth(json.data.hijri.month.ar)
      setCurrentHijriYear(json.data.hijri.year)
    } catch (error) {
      console.log(error)
    }
  }
  const getWeather = async()=>{
    try{
      const response = await fetch('https://dataservice.accuweather.com/currentconditions/v1/49546?apikey=NiPLd1MjN9TM2xPq5AGARfDMoBd8wJ2j')
      const json = await response.json()
      
      var value = (json[0].Temperature.Metric.Value)
      setWeatherValue(value)
      var text = (json[0].WeatherText)
      setWeatherText(text)
      console.log(value)
    }catch(error){
      Alert.alert('There is an error with the weather')}
  }

  const getAthan = async () => {
      try {
      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=Guelph&country=Canada&method=2`);
      const json = await response.json();
      setFajrAthan(convertTo12Hour(json.data.timings.Fajr))
      setDhurAthan(convertTo12Hour(json.data.timings.Dhuhr))
      setAsrAthan(convertTo12Hour(json.data.timings.Asr))
      setMaghribAthan(convertTo12Hour(json.data.timings.Maghrib))
      setChangeableMaghribAthan(json.data.timings.Maghrib)
      setIshaAthan(convertTo12Hour(json.data.timings.Isha))
      convertTo12Hour2(json.data.timings.Sunrise)
    } catch (error) {
      console.log(error);
    }
  }

  function convertTo12Hour(oldFormatTime) {
    console.log("oldFormatTime: " + oldFormatTime);
    var oldFormatTimeArray = oldFormatTime.split(":");

    var HH = parseInt(oldFormatTimeArray[0]);
    var min = oldFormatTimeArray[1];

    var AMPM = HH >= 12 ? "PM" : "AM";
    var hours;
    if(HH == 0){
      hours = HH + 12;
    } else if (HH > 12) {
      hours = HH - 12;
    } else {
      hours = HH;
    }
    var newFormatTime = hours + ":" + min + " " + AMPM;
    return newFormatTime
  }

  function convertTo12Hour2(oldFormatTime) {
    
    var oldFormatTimeArray = oldFormatTime.split(":");

    var HH = parseInt(oldFormatTimeArray[0]);
    var min = oldFormatTimeArray[1];

    var AMPM = HH >= 12 ? "PM" : "AM";
    var hours;
    if(HH == 0){
      hours = HH + 12;
    } else if (HH > 12) {
      hours = HH - 12;
    } else {
      hours = HH;
    }
    var newFormatTime = hours + ":" + min + " " + AMPM;
    setShuruq(newFormatTime)
  }


useKeepAwake();

    
const getDate = () => {
  var today = new Date(),
  date = (today.getMonth() + 1)  + '-' + today.getDate() + '-' + today.getFullYear();
  setCurrentCustomDate(date)
  setCurrentDate(date)
};

const momentGetDate = () =>{
  setMomentDate(moment().format('dddd MMMM D YYYY'))
}


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

var a = moment();//now
var b = moment('2023-03-22T19:35:00');


  useEffect(() => {
      getDate()
      getHijriDate()
      getWeather()
      getAthan()
      momentGetDate()
      
    setInterval(()=>{
      getDate()
      getHijriDate()
      getAthan()
      momentGetDate()
    }, 21600000)

    setInterval(()=>{
      getWeather()
    }, 3600000) 
 }, []);

 useEffect(() => {
    getValueLocally()
   
 }, []);
 

 useEffect(() => {
    getValueLocally()
   
 }, []);

 //Goodluck to anyone who tries to work on this project lol.
    return (
    
    <View style={{ height: 'auto', width: 'auto', fontFamily: 'Sanista', flex:1 }} >
    {/* <View style={{zIndex:2, opacity:1, backgroundColor: 'black', position: 'absolute', top:0, width: 1300}}><Text></Text></View> */}
    {/* <Text style={styles.time}>{currentTime}</Text> */}
    <ImageBackground source={masjid} resizeMode='cover' style={styles.image}></ImageBackground>

    
    
    <TouchableOpacity style={styles.nocellphone} onPress={pressHandler}>
    <Image style={styles.nocellphone} source={nocellphone} ></Image>
    </TouchableOpacity>

<View style={{zIndex:2, opacity:1, padding: 10, position: 'absolute', top: 0, right: 0, fontSize: 23, height: 75, width: 1300, textAlign: 'right', backgroundColor: "rgb(118,113,102)"}}>
    <Image style={styles.isog} source={isog}></Image>
    <Text style={{position: 'absolute', right: 90, top: 10, fontSize:23, color: 'white', fontWeight: 'bold'}}>مسجد أبو بكر الصديق/Masjid Abu Bakr As-Siddique</Text>
    <Text style={{position: 'absolute', right: 180, top: 40, color: 'white'}}>126 Norwich St E, Guelph, ON N1E 2G7, Canada</Text>
    
</View>

    <LinearGradient colors={['rgb(0, 78, 192)', '#000000']} style={styles.hijriDate} end={{ x: 0, y: 1 }}
  start={{ x: 1, y: 1 }}>
    <Text style={styles.customDate}>{momentDate} /({currentHijriYear} Hijri) {currentHijriDay} {currentHijriMonth} </Text>
    </LinearGradient>

    <View style={{zIndex:2, opacity:1, paddingLeft: 5, color: 'white', position: 'absolute', bottom: 26, right: 10, fontSize: 17, flexDirection: 'row'}}>
      <Text style={{backgroundColor: 'rgb(0, 78, 192)', borderBottomLeftRadius: 5, borderTopLeftRadius: 5, color: 'white', width: 120, paddingLeft: 5}}>Today's Weather:</Text>
      <Text style={{backgroundColor: 'white', borderBottomRightRadius: 5, borderTopRightRadius: 5}}> {weatherText} {weatherValue}°C </Text></View>
      
      


<View style={{position:'absolute',
           left: 285, top: 167, zIndex: 3, }}>
       <ImageBackground>
        
         <View style={{ marginBottom: 5}} />
         <AnalogClock
           colorClock='rgb(0, 78, 192)'
           colorNumber="#FFFFFF"
           colorCenter="#000000"
           colorHour="#FFFFFF"
           colorMinutes="#FFFFFF"
           autostart={true}
           showSeconds={true}
           size={160}
        />
        
      </ImageBackground>
   </View>
      <LinearGradient colors={['rgb(0, 78, 192)', '#000000']} style={{zIndex:2, opacity:1, width: 350, position:'absolute', height:550, paddingTop: 5, paddingBottom: 25,  borderBottomRightRadius: 160, borderTopRightRadius: 190}}>

<View style={{display: 'flex', flexDirection: 'row'}}>
<Text style= {{
    color: 'white', 
    textAlign: 'center', 
    paddingLeft: 45,
    fontWeight: 'bold',
    paddingBottom: 20,
    fontSize: 27, 
    fontFamily: 'Sansita-Regular', 
    zIndex:1, 
    opacity:1,
    }}>أَذَان</Text>

      <Text style= {{
    color: 'yellow', 
    textAlign: 'center', 
    paddingLeft: 67,
    fontWeight: 'bold',
    paddingBottom: 20,
    fontSize: 27, 
    fontFamily: 'Sansita-Regular', 
    zIndex:1, 
    opacity:1,
    }}>إِقَامَة</Text>
    </View>

    
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <View>
        <Text style= {styles.athan}>الفجر</Text>
        <Text style= {styles.athan2}>{fajrAthan}</Text>
      </View>

      <View>
        <Text style= {styles.prayer}>الفجر</Text>
        <Text style= {styles.prayer2}>{getFajrHrValue}:{getFajrMinValues} AM</Text>
    </View>
  </View>

<View  style={{display: 'flex', flexDirection: 'row'}}>
<View>
      <Text style= {styles.athan}>الظهر</Text>
      <Text style= {styles.athan2}>{dhurAthan}</Text>
</View>
<View >
      <Text style= {styles.prayer}>الظهر</Text>
      <Text style={{ color: 'yellow', 
    textAlign: 'center', 
    paddingLeft: 10,
    fontSize: 25, 
    fontFamily: 'Sansita-Regular',
    fontWeight: 'bold', 
    zIndex:1, 
    opacity:1,}}>{getDhuhrHrValue}:{getDhuhrMinValues} PM</Text>
</View>
</View>

<View style={{display: 'flex', flexDirection: 'row'}}>
  <View>
    <Text style= {styles.athan}>العصر</Text>
      <Text style= {styles.athan2}>{asrAthan}</Text>
    </View>

  <View >
      <Text style= {styles.prayer}>العصر</Text>
      <Text style= {styles.prayer2}>{getAsrHrValue}:{getAsrMinValues} PM</Text>
</View>
</View>

<View style={{display: 'flex', flexDirection: 'row'}}>

  <View>
    <Text style= {styles.athan}>المغرب</Text>
      <Text style= {styles.athan2}>{maghribAthan}</Text>
  </View>

  <View>
      <Text style= {styles.prayer}>المغرب</Text>
      <Text style= {styles.prayer2}>{maghribAthan}</Text>
</View>
</View>

<View style={{display: 'flex', flexDirection: 'row'}}>
      <View>
        <Text style= {styles.athan}>العشاء</Text>
      <Text style= {styles.athan2}>{ishaAthan}</Text>
      </View>
      <View >
      <Text style= {styles.prayer}>العشاء</Text>
      <Text style= {styles.prayer2}>{getIshaHrValues}:{getIshaMinValues} PM</Text>
      
</View></View>
            
</LinearGradient>
{/* <View>
      <Text style={{
    color: 'yellow', 
    textAlign: 'center',
    fontSize: 28, 
    fontFamily: 'Sansita-Regular', 
    zIndex:2, 
    opacity:1,
    paddingRight: 30
  }}>الشُّروق</Text>
      <Text style={{
    color: 'yellow', 
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28, 
    fontFamily: 'Sansita-Regular', 
    zIndex:2, 
    opacity:1,
    paddingRight: 30
  }}>{shuruq}</Text>
</View> */}
<LinearGradient colors={['rgb(0, 78, 192)', '#000000']}  style={{position:'absolute', zIndex: 4, color: 'white', borderWidth: 3, borderRadius:100, padding: 12,  left: 298, bottom: 104, borderColor: 'green'}}>
      <Text style={{textAlign:'center', color: 'white', fontSize: 23}}>الجمعة</Text>
      <Text style={{color: 'white', fontSize: 23}}> 1:30 PM</Text>
</LinearGradient>
<LinearGradient colors={['rgb(0, 78, 192)', '#000000']}  style={{position:'absolute', zIndex: 4,  border: 1, borderRadius:100, padding: 12, left: 293, top: 75,}}>
      <Text style={{textAlign:'center', color: 'white', fontSize: 23}}>الشُّروق</Text>
      <Text style={{color: 'white', fontSize: 23}}>{shuruq}</Text>
</LinearGradient>
<LinearGradient colors={['rgb(0, 78, 192)', '#000000']}  style={{position:'absolute', zIndex: 4, border: 1, borderRadius:100, padding: 7, left: 240, top: 20,}}>
      <Text style={{textAlign:'center', color: 'white', fontSize: 18}}>سحور</Text>
      <Text style={{color: 'white', fontSize: 18}}>{fajrAthan}</Text>
</LinearGradient>
<LinearGradient colors={['rgb(0, 78, 192)', '#000000']}  style={{position:'absolute', zIndex: 4, border: 1, borderRadius:100, padding: 8, left: 265, bottom: 30,}}>
      <Text style={{textAlign:'center', color: 'white', fontSize: 19}}>إفطار</Text>
      <Text style={{color: 'white', fontSize: 19}}>{maghribAthan}</Text>
</LinearGradient>



    
    <LinearGradient colors={['rgb(0, 78, 192)', '#000000']} style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', right: 0, top: 126, width: 150, display: 'flex', flexDirection: 'column', border: 1, borderRadius:100, padding: 5}}>
      
              <Text style={{color: 'white', zIndex: 1, fontSize: 19, fontFamily: 'Sansita-Regular', paddingBottom:0, textAlign: 'center', }}>
                    Islamic School  
                   </Text> 
                   <Text style={{color: 'white', zIndex: 1, fontSize: 15, fontFamily: 'Sansita-Regular', paddingBottom:0, textAlign: 'center', }}>
                    Saturday's
                   </Text> 
                   <Text style={{color: 'white', zIndex: 1, fontSize: 15, fontFamily: 'Sansita-Regular', paddingBottom:0, textAlign: 'center', }}>
                    9AM - 1PM  
                   </Text> 
                  
                   </LinearGradient>    
           
        <LinearGradient colors={['rgb(0, 78, 192)', '#000000']}  style={{zIndex:1, opacity:1, backgroundColor: 'black', position: 'absolute', right: 0, bottom: 150, width: 140, display: 'flex', flexDirection: 'column', border: 1, borderRadius:100}}>
        
          
        <Text style={{color: 'white', zIndex: 1, fontSize: 19, fontFamily: 'Sansita-Regular', paddingBottom:0, textAlign: 'center', }}>
              Donate
             </Text> 
             <Text style={{color: 'white', zIndex: 1, fontSize: 15, fontFamily: 'Sansita-Regular', paddingBottom:0, textAlign: 'center', }}>
              for your Masjid!
             </Text> 
            
             </LinearGradient>

             <LinearGradient colors={['rgb(0, 78, 192)', '#000000']} style={{zIndex:1, opacity:1, backgroundColor: 'rgb(0, 78, 192)', color: 'white',position: 'absolute', bottom:22, width: 250, textAlign: 'center', borderRadius:100, right: 280, }}>

                  
                   </LinearGradient>
    </View>


  );
};

const styles = StyleSheet.create({
  
  time:{color: 'white', 
  opacity: 1, 
  zIndex: 1,
  position:'absolute',
  top: 150,
  left: 200,
  textAlign: 'center',
  fontSize: 110,
  fontFamily: 'Sansita-Regular'
  },

image: {
        opacity: 1,
        height: 'auto',
        paddingTop: 300,
        paddingBottom: 260,
        marginLeft: 250
        
        
  },
  hijriDate:{
  position:'absolute',
  top: 75,
  right: 0,
  width: 1000,
  textAlign:'right',
  color: 'white',
  fontSize: 22,
  fontFamily: 'Sansita-Regular',
  },

  customDate:{
    
    color: 'white',
    fontSize: 22,
    textAlign: 'right',
    fontFamily: 'Sansita-Regular',
    paddingRight:5
  },

  hadith:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    width: '100%',
    marginBottom: 0,
    
    
  },

  settings:{
   opacity:1,
   backgroundColor: 'white'
  },

  textInput: {
    backgroundColor: 'white',
    color: 'white',
  },


  
  nocellphone:
    {opacity:0.65, 
      zIndex: 1, 
      padding: 40, 
      width: 50, 
      height: 'auto', 
      position: 'absolute', 
      bottom: 30, 
      right: 10},
  
  prayer:{
    color: 'yellow', 
    textAlign: 'center', 
    paddingLeft: 20,
    fontSize: 25, 
    fontFamily: 'Sansita-Regular', 
    zIndex:2, 
    opacity:1,
  },
  prayer2:{
    color: 'yellow', 
    textAlign: 'center', 
    paddingLeft: 25,
    fontSize: 25, 
    fontFamily: 'Sansita-Regular',
    fontWeight: 'bold', 
    zIndex:1, 
    opacity:1,
  },

  athan:{
    color: 'white', 
    textAlign: 'center', 
    paddingLeft: 20,
    fontSize: 25, 
    fontFamily: 'Sansita-Regular', 
    zIndex:1, 
    opacity:1,
  },
  athan2:{
    color: 'white', 
    textAlign: 'center', 
    paddingLeft: 10,
    paddingBottom: 30,
    fontSize: 25, 
    fontFamily: 'Sansita-Regular',
    fontWeight: 'bold', 
    zIndex:1, 
    opacity:1,
  },
  isog:{
    position: 'absolute',
    top: 2,
    right: -2,
    opacity: 1,
    color: 'white',
    width: 80,
    height: 70
  },
    
 
})
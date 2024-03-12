import React, { useEffect, useState,  } from 'react';
import {Text, Dimensions, View,StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import {useFonts} from 'expo-font';
import isog from './images/isog2.png'
import { useKeepAwake } from 'expo-keep-awake';
import moment from 'moment/moment';
import DigitalClock from './components/digitalClock';
import styles from './styles';
import sunHaze from './images/sunHaze.png'
import moon from './images/moon.png'

export default Home = ({navigation, route}) => {

  let[fontsLoaded] = useFonts({ 
    'Jomhuria': require('./assets/fonts/Jomhuria-Regular.ttf'),
    'Inknut Antiqua': require('./assets/fonts/InknutAntiqua-Regular.ttf'),
    'Inter': require('./assets/fonts/Inter-VariableFont_slntwght.ttf')
  });

  
  const [fajrAthan ,setFajrAthan] = useState()
  const [dhurAthan, setDhurAthan] = useState()
  const [asrAthan, setAsrAthan] = useState()
  const [maghribAthan, setMaghribAthan] = useState()
  const [ishaAthan, setIshaAthan] = useState()

  const [fajrPrayer ,setFajrPrayer] = useState()
  const [dhurPrayer, setDhurPrayer] = useState()
  const [asrPrayer, setAsrPrayer] = useState()
  const [maghribPrayer, setMaghribPrayer] = useState()
  const [ishaPrayer, setIshaPrayer] = useState()


  const [shuruq, setShuruq] = useState()
  const [currentDate, setCurrentDate] = useState()
  const [currentCustomDate, setCurrentCustomDate] = useState()
  const [momentDate, setMomentDate] = useState()
  const [currentHijriDay, setCurrentHijriDay] = useState()
  const [currentHijriMonth, setCurrentHijriMonth] = useState()
  const [currentHijriYear, setCurrentHijriYear] = useState()
  const [weatherValue, setWeatherValue] = useState()
  const [weatherText, setWeatherText] = useState()

  const [hadith, setHadith] = useState()
  const [nextPrayer, setNextPrayer] = useState()

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

  const getAthan = async () => {
      try {
      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=Guelph&country=Canada&method=2`);
      const json = await response.json();
      setFajrAthan(convertTo12Hour(json.data.timings.Fajr))
      setShuruq(addMinutesToTime(json.data.timings.Sunrise, 15));
      setDhurAthan(convertTo12Hour(json.data.timings.Dhuhr))
      setAsrAthan(convertTo12Hour(json.data.timings.Asr))
      setMaghribAthan(convertTo12Hour(json.data.timings.Maghrib))
      setIshaAthan(convertTo12Hour(json.data.timings.Isha))
      convertTo12Hour(json.data.timings.Sunrise)
    } catch (error) {
      console.log(error);
    }
  }

  const getPrayerTimes = async () =>{
    try{
      const response = await fetch(`https://sparkling-jade-cowboy-boots.cyclic.app/prayers`);
      const json = await response.json()
      setFajrPrayer(json.fajr)
      setDhurPrayer(json.dhuhr)
      setAsrPrayer(json.asr)
      setMaghribPrayer(json.maghrib)
      setIshaPrayer(json.isha)
    }catch(e){
      console.log(e)
    }
  }


  const getHadiths = async () =>{
    try{
      const response = await fetch(`https://sparkling-jade-cowboy-boots.cyclic.app/hadiths`);
      const json = await response.json()
      setHadith(json.hadith)
    }catch(e){
      console.log(e)
    }
  }

  const getNextPrayer = async () => {
    try {
        const response = await fetch('https://sparkling-jade-cowboy-boots.cyclic.app/nextPrayers', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if needed
            },
            body: JSON.stringify({
                // Your PUT request payload (if necessary)
                // Example: { key: 'value' }
            })
        });
        const json = await response.json();
        setNextPrayer(json.nextPrayer);
    } catch (e) {
        console.log(e);
    }
};


  function convertTo12Hour(oldFormatTime) {
    var oldFormatTimeArray = oldFormatTime.split(":");
  
    var HH = parseInt(oldFormatTimeArray[0]);
    var min = oldFormatTimeArray[1];
  
    var AMPM = HH >= 12 ? "PM" : "AM";
    HH = HH % 12;
    HH = HH ? HH : 12;
    var hours = HH < 10 ? "0" + HH : HH;
  
    var newFormatTime = hours + ":" + min;
    return newFormatTime;
  }

  const addMinutesToTime = (timeString, minutesToAdd) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes + minutesToAdd); 
    const newHours = date.getHours().toString().padStart(2, '0');
    const newMinutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${newHours}:${newMinutes}`;
  };


useKeepAwake();

    
const getDate = () => {
  var today = new Date(),
  date = (today.getMonth() + 1)  + '-' + today.getDate() + '-' + today.getFullYear();
  setCurrentCustomDate(date)
  setCurrentDate(date)
};

const momentGetDate = () =>{
  setMomentDate(moment().format('ddd MMMM D, YYYY'))
}

const [announcements, setAnnouncements] = useState('')

const getAnnouncements = async () =>{
  try{
    const response = await fetch(`https://sparkling-jade-cowboy-boots.cyclic.app/announcements`)
    const data = await response.json()
    setAnnouncements(data.annoucements)
  }catch(e){

  }
}

const [countdownTimeHr, setCountdownTimeHr] = useState("");
const [countdownTimeMn, setCountdownTimeMn] = useState("");
const [upcomingPrayerName, setUpcomingPrayerName] = useState("");


  useEffect(() => {
      getDate()
      getHijriDate()
      getAthan()
      momentGetDate()
      
    setInterval(()=>{
      getDate()
      getHijriDate()
      getAthan()
      momentGetDate()
    }, 21600000)

 }, []);

 useEffect(() => {
     
    getPrayerTimes()
    getAnnouncements()
    getHadiths()
    getNextPrayer()

    setInterval(()=>{
      getAnnouncements()
      getPrayerTimes()
      getHadiths()
      getNextPrayer()
    }, 1800000) 
 }, []);


      if (!fontsLoaded) {
      return null; // Or some other loading indicator
    } else {
      return<View style={styles.background}>
      <View style={styles.layout}>
        <View>
            <View>

              <View style={styles.headerSection1}>
                <Image style={styles.logo} source={isog}></Image>
                <Text style={styles.ISOGText}>Islamic Society of Guelph</Text>
              </View>

              <View style={styles.headerSection2}>
              <Text style={styles.headerFont}>مسجد أبو بكر الصديق</Text>
              <Text style={styles.headerFont2}>www.ISOFG.ca</Text>
            </View>
            
            </View>

            <View style={styles.boxes}> 
              <View>
                <View style={styles.annoucnementsHeaderContainer}>
                  <Text style={styles.announcementsHeader}>TODAY'S MESSAGE</Text>
                </View>

                <View style={styles.announcementsContainer}>
                  <Text style={styles.announcments}>{announcements}</Text>
                </View>
              </View>

              <View>
                <View style={styles.annoucnementsHeaderContainer}>
                  <Text style={styles.announcementsHeader}>HADITH OF THE DAY</Text>
                </View>

                <View style={styles.announcementsContainer}>
                  <Text style={styles.announcments}>{hadith}</Text>
                </View>
              </View>
            </View>

            <View style={styles.reminderBoxes}>
              <View>
                <Text style={styles.reminder}>DONATE TO YOUR MASJID</Text>
              </View>

              <View>
                <Text style={styles.reminder}>SILENCE YOUR PHONE</Text>
              </View>
            </View>

            <View style={styles.prayerContainer}>
                <View style={styles.prayerHeader}>
                  <Text style={styles.athan}>START</Text>
                  <Text style={styles.iqamah}>IQAMAH</Text>
                </View>

                <View style={[styles.prayers, nextPrayer == 'fajr' ? styles.upcomingPrayer : null]}>
                  <Text style={[nextPrayer == 'fajr' ? styles.prayerName1 : styles.prayerName]}>FAJR</Text>
                  <Text style={[nextPrayer == 'fajr' ? styles.athanTime1 : styles.athanTime]}>{fajrAthan}<Text style={styles.AMPM}>AM</Text></Text>
                  <Text style={[nextPrayer == 'fajr' ? styles.prayerTimer1 : styles.prayerTimer]}>{fajrPrayer}<Text style={styles.AMPM}>AM</Text></Text>
                </View>

                <View style={[styles.prayers, nextPrayer == 'dhuhr' ? styles.upcomingPrayer : null]}>
                  <Text style={[nextPrayer == 'dhuhr' ? styles.prayerName1 : styles.prayerName]}>DHUHR</Text>
                  <Text style={[nextPrayer == 'dhuhr' ? styles.athanTime1 : styles.athanTime]}>{dhurAthan}<Text style={styles.AMPM}>PM</Text></Text>
                  <Text style={[nextPrayer == 'dhuhr' ? styles.prayerTimer1 : styles.prayerTimer]}>{dhurPrayer}<Text style={styles.AMPM}>PM</Text></Text>
                </View>

                <View style={[styles.prayers, nextPrayer == 'asr' ? styles.upcomingPrayer : null]}>
                  <Text style={[nextPrayer == 'asr' ? styles.prayerName1 : styles.prayerName]}>ASR</Text>
                  <Text style={[nextPrayer == 'asr' ? styles.athanTime1 : styles.athanTime]}>{asrAthan}<Text style={styles.AMPM}>PM</Text></Text>
                  <Text style={[nextPrayer == 'asr' ? styles.prayerTimer1 : styles.prayerTimer]}>{asrPrayer}<Text style={styles.AMPM}>PM</Text></Text>
                </View>

                <View style={[styles.prayers, nextPrayer == 'maghrib' ? styles.upcomingPrayer : null]}>
                  <Text style={[nextPrayer == 'maghrib' ? styles.prayerName1 : styles.prayerName]}>MAGHRIB</Text>
                  <Text style={[nextPrayer == 'maghrib' ? styles.athanTime1 : styles.athanTime]}>{maghribAthan}<Text style={styles.AMPM}>PM</Text></Text>
                  <Text style={[nextPrayer == 'maghrib' ? styles.prayerTimer1 : styles.prayerTimer]}>{maghribAthan}<Text style={styles.AMPM}>PM</Text></Text>
                </View>

                <View style={[styles.prayers, nextPrayer == 'isha' ? styles.upcomingPrayer : null]}>
                  <Text style={[nextPrayer == 'isha' ? styles.prayerName1 : styles.prayerName]}>ISHA</Text>
                  <Text style={[nextPrayer == 'isha' ? styles.athanTime1 : styles.athanTime]}>{ishaAthan}<Text style={styles.AMPM}>PM</Text></Text>
                  <Text style={[nextPrayer == 'isha' ? styles.prayerTimer1 : styles.prayerTimer]}>{ishaPrayer}<Text style={styles.AMPM}>PM</Text></Text>
                </View>
                

              
            </View>

            <View>
              <Text style={styles.footer}>Quran Classes For All Ages  -  Contact Imam (226)-505-7435</Text>
            </View>
        </View>
      
        <View>
          <View style={styles.dateContainer}>
            <Text style={styles.arabicDate}>{currentHijriMonth}-{currentHijriDay}-{currentHijriYear}</Text>
            <Text style={styles.englishDate}>{momentDate}</Text>
            <View style={styles.border}></View>
          </View>

          <View>
            <Text><DigitalClock /></Text>
          </View>

          {countdownTimeHr !== "" ? 
          <View style={styles.nextPrayer}>
            <Text style={styles.nextPrayerText}>NEXT ATHAN IN:</Text> 
            <Text style={styles.countDown}>
            {countdownTimeHr}<Text style={styles.HRMN}>HR</Text> {countdownTimeMn}<Text style={styles.HRMN}>MIN</Text>
            </Text>
          </View>
          :
            <View  style={styles.nextPrayerNull}>
              <Text> </Text>
              </View>}

          <View style={styles.border2}></View>

          <View>
            <Text style={styles.jumuahHeader}>JUMU'AH</Text>
          </View>

          <View style={styles.jumuah}>

            <View style={styles.startContainer}>
              <Text style={styles.jumuahPrayer}>01:30<Text style={styles.AMPM2}>PM</Text></Text>
              <Text style={styles.jumuahPrayerDetail}>STARTS</Text>
            </View>

            <View style={styles.jumuahContainer}>
              <Text style={styles.jumuahPrayer}>01:50<Text style={styles.AMPM2}>PM</Text></Text>
              <Text style={styles.jumuahPrayerDetail}>JUMU'AH</Text>
            </View>

          </View>


          <View style={styles.fastingContainer}>

            <View style={styles.suhoorContainer}>
              <Image source={sunHaze} style={styles.sun}></Image>
              <Text style={styles.suhoorAthan}>{fajrAthan}<Text style={styles.AMPM3}>AM</Text></Text>
              <Text style={styles.suhoor}>SUHOOR</Text>
            </View>

            <View style={styles.iftarContainer}>
              <Image source={moon} style={styles.moon}></Image>
              <Text style={styles.iftarAthan}>{maghribAthan}<Text style={styles.AMPM3}>PM</Text></Text>
              <Text style={styles.iftar}>IFTAR</Text>
            </View>

          </View>

          <View>
            <Text style={styles.ishraq}>ISHRAQ {shuruq}</Text>
          </View>
        </View>
      
      </View>
    </View>
    }
    
    

};

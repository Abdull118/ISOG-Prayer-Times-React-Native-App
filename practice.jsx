{/*<div className={background}>
<div className={layout}>
 <div>
     <div>

       <div className={headerSection1}>
         <img className={logo} source={isog}></img>
         <div className={ISOGdiv}>Islamic Society of Guelph</div>
       </div>

       <div className={headerSection2}>
       <div className={headerFont}>مسجد أبو بكر الصديق</div>
       <div className={headerFont2}>wwwISOFGca</div>
     </div>
     
     </div>

     <div className={boxes}> 
       <div>
         <div className={annoucnementsHeaderContainer}>
           <div className={announcementsHeader}>TODAY'S MESSAGE</div>
         </div>

         <div className={announcementsContainer}>
           {announcements ? 
         announcementsmap((announcement, index) => (
             <div key={index} className={announcements1}>
               {announcement}
             </div>
         ))
         : 
         null}
         </div>
       </div>

       <div>
         <div className={annoucnementsHeaderContainer}>
           <div className={announcementsHeader}>HADITH OF THE DAY</div>
         </div>

         <div className={announcementsContainer}>
           <div className={announcements}>{hadith}</div>
         </div>
       </div>
     </div>

     <div className={reminderBoxes}>
       <div>
         <div className={reminder}>DONATE TO YOUR MASJID</div>
       </div>

       <div>
         <div className={reminder}>SILENCE YOUR PHONE</div>
       </div>
     </div>

     <div className={prayerContainer}>
         <div className={prayerHeader}>
           <div className={athan}>START</div>
           <div className={iqamah}>IQAMAH</div>
         </div>

         <div className={[prayers, nextPrayer == 'fajr' ? upcomingPrayer : null]}>
           <div className={[nextPrayer == 'fajr' ? prayerName1 : prayerName]}>FAJR</div>
           <div className={[nextPrayer == 'fajr' ? athanTime1 : athanTime]}>{fajrAthan}<div className={AMPM}>AM</div></div>
           <div className={[nextPrayer == 'fajr' ? prayerTimer1 : prayerTimer]}>{fajrPrayer}<div className={AMPM}>AM</div></div>
         </div>

         <div className={[prayers, nextPrayer == 'dhuhr' ? upcomingPrayer : null]}>
           <div className={[nextPrayer == 'dhuhr' ? prayerName1 : prayerName]}>DHUHR</div>
           <div className={[nextPrayer == 'dhuhr' ? athanTime1 : athanTime]}>{dhurAthan}<div className={AMPM}>PM</div></div>
           <div className={[nextPrayer == 'dhuhr' ? prayerTimer1 : prayerTimer]}>{dhurPrayer}<div className=
           {AMPM}>PM</div></div>
         </div>

         <div className={[prayers, nextPrayer == 'asr' ? upcomingPrayer : null]}>
           <div className={[nextPrayer == 'asr' ? prayerName1 : prayerName]}>ASR</div>
           <div className={[nextPrayer == 'asr' ? athanTime1 : athanTime]}>{asrAthan}<div className={AMPM}>PM</div></div>
           <div className={[nextPrayer == 'asr' ? prayerTimer1 : prayerTimer]}>{asrPrayer}<div className={AMPM}>PM</div></div>
         </div>

         <div className={[prayers, nextPrayer == 'maghrib' ? upcomingPrayer : null]}>
           <div className={[nextPrayer == 'maghrib' ? prayerName1 : prayerName]}>MAGHRIB</div>
           <div className={[nextPrayer == 'maghrib' ? athanTime1 : athanTime]}>{maghribAthan}<div className={AMPM}>PM</div></div>
           <div className={[nextPrayer == 'maghrib' ? prayerTimer1 : prayerTimer]}>{maghribAthan}<div className={AMPM}>PM</div></div>
         </div>

         <div className={[prayers, nextPrayer == 'isha' ? upcomingPrayer : null]}>
           <div className={[nextPrayer == 'isha' ? prayerName1 : prayerName]}>ISHA</div>
           <div className={[nextPrayer == 'isha' ? athanTime1 : athanTime]}>{ishaAthan}<div className={AMPM}>PM</div></div>
           <div className={[nextPrayer == 'isha' ? prayerTimer1 : prayerTimer]}>{ishaPrayer}<div className={AMPM}>PM</div></div>
         </div>
         

       
     </div>

     <div>
       <div className={footer}>Quran Classes For All Ages  -  Contact Imam (226)-505-7435</div>
     </div>
 </div>

 <div>
   <div className={dateContainer}>
     <div className={arabicDate}>{currentHijriMonth}-{currentHijriDay}-{currentHijriYear}</div>
     <div className={englishDate}>{momentDate}</div>
     <div className={border}></div>
   </div>

   <div>
     <div><DigitalClock /></div>
   </div>

   {countdownTimeHr !== "" ? 
   <div className={nextPrayer}>
     <div className={nextPrayerdiv}>NEXT ATHAN IN:</div> 
     <div className={countDown}>
     {countdownTimeHr}<div className={HRMN}>HR</div> {countdownTimeMn}<div className={HRMN}>MIN</div>
     </div>
   </div>
   :
     <div  className={nextPrayerNull}>
       <div> </div>
       </div>}

   <div className={border2}></div>

   <div>
     <div className={jumuahHeader}>JUMU'AH</div>
   </div>

   <div className={jumuah}>

     <div className={startContainer}>
       <div className={jumuahPrayer}>01:30<div className={AMPM2}>PM</div></div>
       <div className={jumuahPrayerDetail}>STARTS</div>
     </div>

     <div className={jumuahContainer}>
       <div className={jumuahPrayer}>01:50<div className={AMPM2}>PM</div></div>
       <div className={jumuahPrayerDetail}>JUMU'AH</div>
     </div>

   </div>


   <div className={fastingContainer}>

     <div className={suhoorContainer}>
       <img source={sunHaze} className={sun}></img>
       <div className={suhoorAthan}>{fajrAthan}<div className={AMPM3}>AM</div></div>
       <div className={suhoor}>SUHOOR</div>
     </div>

     <div className={iftarContainer}>
       <img source={moon} className={moon}></img>
       <div className={iftarAthan}>{maghribAthan}<div className={AMPM3}>PM</div></div>
       <div className={iftar}>IFTAR</div>
     </div>

   </div>

   <div>
     <div className={ishraq}>ISHRAQ {shuruq}</div>
   </div>
 </div>

</div>  


</div> */}

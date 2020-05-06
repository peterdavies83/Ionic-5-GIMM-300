import React, { useState } from 'react';
import { IonContent, IonHeader, IonCard, IonCardContent, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCol, IonRow } from '@ionic/react';
import './Tab1.css';
import AddItem from '../AddItem'
import ItemList from '../ItemList';
import {Calendar} from '@ionic-native/calendar/ngx';

const Tab1: React.FC = () => {

  const [current, setCurrent] = useState(null);

  //  const openCalendar = async () => {
  //    const data = await Calendar;
  //    console.log('working');
  //  }
  

  const getEmpty = () => {
    return ({
      title: '',
      content: '',
      date: '',
      location: '',
      picture: '',
      clear: '',
      initialValue: ''
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic React Firebase</IonTitle>
        </IonToolbar>
      </IonHeader>
      {}
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <h3>New Entry</h3>
          </IonCardHeader>
          <AddItem title={current} clear={()=> setCurrent(getEmpty())}>
          </AddItem>          
          <IonCardContent>
            {/* <IonRow>
              <IonCol>Day of Week: </IonCol>
              <IonCol>Sunday</IonCol>
              <IonCol>Monday</IonCol>
              <IonCol>Tuesday</IonCol>
              <IonCol>Wednesday</IonCol>
              <IonCol>Thursday</IonCol>
              <IonCol>Friday</IonCol>
              <IonCol>Saturday</IonCol>
            </IonRow>
            <IonRow>
              <IonCol>12:00 AM</IonCol>
              <IonCol class="borders" id="Sun12AM"></IonCol>
              <IonCol class="borders" id="Mon12AM"></IonCol>
              <IonCol class="borders" id="Tue12AM"></IonCol>
              <IonCol class="borders" id="Wed12AM"></IonCol>
              <IonCol class="borders" id="Thu12AM"></IonCol>
              <IonCol class="borders" id="Fri12AM"></IonCol>
              <IonCol class="borders" id="Sat12AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>1:00 AM</IonCol>
              <IonCol class="borders" id="Sun1AM"></IonCol>
              <IonCol class="borders" id="Mon1AM"></IonCol>
              <IonCol class="borders" id="Tue1AM"></IonCol>
              <IonCol class="borders" id="Wed1AM"></IonCol>
              <IonCol class="borders" id="Thu1AM"></IonCol>
              <IonCol class="borders" id="Fri1AM"></IonCol>
              <IonCol class="borders" id="Sat1AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>2:00 AM</IonCol>
              <IonCol class="borders" id="Sun2AM"></IonCol>
              <IonCol class="borders" id="Mon2AM"></IonCol>
              <IonCol class="borders" id="Tue2AM"></IonCol>
              <IonCol class="borders" id="Wed2AM"></IonCol>
              <IonCol class="borders" id="Thu2AM"></IonCol>
              <IonCol class="borders" id="Fri2AM"></IonCol>
              <IonCol class="borders" id="Sat2AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>3:00 AM</IonCol>
              <IonCol class="borders" id="Sun3AM"></IonCol>
              <IonCol class="borders" id="Mon3AM"></IonCol>
              <IonCol class="borders" id="Tue3AM"></IonCol>
              <IonCol class="borders" id="Wed3AM"></IonCol>
              <IonCol class="borders" id="Thu3AM"></IonCol>
              <IonCol class="borders" id="Fri3AM"></IonCol>
              <IonCol class="borders" id="Sat3AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>4:00 AM</IonCol>
              <IonCol class="borders" id="Sun4AM"></IonCol>
              <IonCol class="borders" id="Mon4AM"></IonCol>
              <IonCol class="borders" id="Tue4AM"></IonCol>
              <IonCol class="borders" id="Wed4AM"></IonCol>
              <IonCol class="borders" id="Thu4AM"></IonCol>
              <IonCol class="borders" id="Fri4AM"></IonCol>
              <IonCol class="borders" id="Sat4AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>5:00 AM</IonCol>
              <IonCol class="borders" id="Sun5AM"></IonCol>
              <IonCol class="borders" id="Mon5AM"></IonCol>
              <IonCol class="borders" id="Tue5AM"></IonCol>
              <IonCol class="borders" id="Wed5AM"></IonCol>
              <IonCol class="borders" id="Thu5AM"></IonCol>
              <IonCol class="borders" id="Fri5AM"></IonCol>
              <IonCol class="borders" id="Sat5AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>6:00 AM</IonCol>
              <IonCol class="borders" id="Sun6AM"></IonCol>
              <IonCol class="borders" id="Mon6AM"></IonCol>
              <IonCol class="borders" id="Tue6AM"></IonCol>
              <IonCol class="borders" id="Wed6AM"></IonCol>
              <IonCol class="borders" id="Thu6AM"></IonCol>
              <IonCol class="borders" id="Fri6AM"></IonCol>
              <IonCol class="borders" id="Sat6AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>7:00 AM</IonCol>
              <IonCol class="borders" id="Sun7AM"></IonCol>
              <IonCol class="borders" id="Mon7AM"></IonCol>
              <IonCol class="borders" id="Tue7AM"></IonCol>
              <IonCol class="borders" id="Wed7AM"></IonCol>
              <IonCol class="borders" id="Thu7AM"></IonCol>
              <IonCol class="borders" id="Fri7AM"></IonCol>
              <IonCol class="borders" id="Sat7AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>8:00 AM</IonCol>
              <IonCol class="borders" id="Sun8AM"></IonCol>
              <IonCol class="borders" id="Mon8AM"></IonCol>
              <IonCol class="borders" id="Tue8AM"></IonCol>
              <IonCol class="borders" id="Wed8AM"></IonCol>
              <IonCol class="borders" id="Thu8AM"></IonCol>
              <IonCol class="borders" id="Fri8AM"></IonCol>
              <IonCol class="borders" id="Sat8AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>9:00 AM</IonCol>
              <IonCol class="borders" id="Sun9AM"></IonCol>
              <IonCol class="borders" id="Mon9AM"></IonCol>
              <IonCol class="borders" id="Tue9AM"></IonCol>
              <IonCol class="borders" id="Wed9AM"></IonCol>
              <IonCol class="borders" id="Thu9AM"></IonCol>
              <IonCol class="borders" id="Fri9AM"></IonCol>
              <IonCol class="borders" id="Sat9AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>10:00 AM</IonCol>
              <IonCol class="borders" id="Sun10AM"></IonCol>
              <IonCol class="borders" id="Mon10AM"></IonCol>
              <IonCol class="borders" id="Tue10AM"></IonCol>
              <IonCol class="borders" id="Wed10AM"></IonCol>
              <IonCol class="borders" id="Thu10AM"></IonCol>
              <IonCol class="borders" id="Fri10AM"></IonCol>
              <IonCol class="borders" id="Sat10AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>11:00 AM</IonCol>
              <IonCol class="borders" id="Sun11AM"></IonCol>
              <IonCol class="borders" id="Mon11AM"></IonCol>
              <IonCol class="borders" id="Tue11AM"></IonCol>
              <IonCol class="borders" id="Wed11AM"></IonCol>
              <IonCol class="borders" id="Thu11AM"></IonCol>
              <IonCol class="borders" id="Fri11AM"></IonCol>
              <IonCol class="borders" id="Sat11AM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>12:00 PM</IonCol>
              <IonCol class="borders" id="Sun12PM"></IonCol>
              <IonCol class="borders" id="Mon12PM"></IonCol>
              <IonCol class="borders" id="Tue12PM"></IonCol>
              <IonCol class="borders" id="Wed12PM"></IonCol>
              <IonCol class="borders" id="Thu12PM"></IonCol>
              <IonCol class="borders" id="Fri12PM"></IonCol>
              <IonCol class="borders" id="Sat12PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>1:00 PM</IonCol>
              <IonCol class="borders" id="Sun1PM"></IonCol>
              <IonCol class="borders" id="Mon1PM"></IonCol>
              <IonCol class="borders" id="Tue1PM"></IonCol>
              <IonCol class="borders" id="Wed1PM"></IonCol>
              <IonCol class="borders" id="Thu1PM"></IonCol>
              <IonCol class="borders" id="Fri1PM"></IonCol>
              <IonCol class="borders" id="Sat1PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>2:00 PM</IonCol>
              <IonCol class="borders" id="Sun2PM"></IonCol>
              <IonCol class="borders" id="Mon2PM"></IonCol>
              <IonCol class="borders" id="Tue2PM"></IonCol>
              <IonCol class="borders" id="Wed2PM"></IonCol>
              <IonCol class="borders" id="Thu2PM"></IonCol>
              <IonCol class="borders" id="Fri2PM"></IonCol>
              <IonCol class="borders" id="Sat2PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>3:00 PM</IonCol>
              <IonCol class="borders" id="Sun3PM"></IonCol>
              <IonCol class="borders" id="Mon3PM"></IonCol>
              <IonCol class="borders" id="Tue3PM"></IonCol>
              <IonCol class="borders" id="Wed3PM"></IonCol>
              <IonCol class="borders" id="Thu3PM"></IonCol>
              <IonCol class="borders" id="Fri3PM"></IonCol>
              <IonCol class="borders" id="Sat3PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>4:00 PM</IonCol>
              <IonCol class="borders" id="Sun4PM"></IonCol>
              <IonCol class="borders" id="Mon4PM"></IonCol>
              <IonCol class="borders" id="Tue4PM"></IonCol>
              <IonCol class="borders" id="Wed4PM"></IonCol>
              <IonCol class="borders" id="Thu4PM"></IonCol>
              <IonCol class="borders" id="Fri4PM"></IonCol>
              <IonCol class="borders" id="Sat4PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>5:00 PM</IonCol>
              <IonCol class="borders" id="Sun5PM"></IonCol>
              <IonCol class="borders" id="Mon5PM"></IonCol>
              <IonCol class="borders" id="Tue5PM"></IonCol>
              <IonCol class="borders" id="Wed5PM"></IonCol>
              <IonCol class="borders" id="Thu5PM"></IonCol>
              <IonCol class="borders" id="Fri5PM"></IonCol>
              <IonCol class="borders" id="Sat5PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>6:00 PM</IonCol>
              <IonCol class="borders" id="Sun6PM"></IonCol>
              <IonCol class="borders" id="Mon6PM"></IonCol>
              <IonCol class="borders" id="Tue6PM"></IonCol>
              <IonCol class="borders" id="Wed6PM"></IonCol>
              <IonCol class="borders" id="Thu6PM"></IonCol>
              <IonCol class="borders" id="Fri6PM"></IonCol>
              <IonCol class="borders" id="Sat6PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>7:00 PM</IonCol>
              <IonCol class="borders" id="Sun7PM"></IonCol>
              <IonCol class="borders" id="Mon7PM"></IonCol>
              <IonCol class="borders" id="Tue7PM"></IonCol>
              <IonCol class="borders" id="Wed7PM"></IonCol>
              <IonCol class="borders" id="Thu7PM"></IonCol>
              <IonCol class="borders" id="Fri7PM"></IonCol>
              <IonCol class="borders" id="Sat7PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>8:00 PM</IonCol>
              <IonCol class="borders" id="Sun8PM"></IonCol>
              <IonCol class="borders" id="Mon8PM"></IonCol>
              <IonCol class="borders" id="Tue8PM"></IonCol>
              <IonCol class="borders" id="Wed8PM"></IonCol>
              <IonCol class="borders" id="Thu8PM"></IonCol>
              <IonCol class="borders" id="Fri8PM"></IonCol>
              <IonCol class="borders" id="Sat8PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>9:00 PM</IonCol>
              <IonCol class="borders" id="Sun9PM"></IonCol>
              <IonCol class="borders" id="Mon9PM"></IonCol>
              <IonCol class="borders" id="Tue9PM"></IonCol>
              <IonCol class="borders" id="Wed9PM"></IonCol>
              <IonCol class="borders" id="Thu9PM"></IonCol>
              <IonCol class="borders" id="Fri9PM"></IonCol>
              <IonCol class="borders" id="Sat9PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>10:00 PM</IonCol>
              <IonCol class="borders" id="Sun10PM"></IonCol>
              <IonCol class="borders" id="Mon10PM"></IonCol>
              <IonCol class="borders" id="Tue10PM"></IonCol>
              <IonCol class="borders" id="Wed10PM"></IonCol>
              <IonCol class="borders" id="Thu10PM"></IonCol>
              <IonCol class="borders" id="Fri10PM"></IonCol>
              <IonCol class="borders" id="Sat10PM"></IonCol>
            </IonRow>
            <br />
            <IonRow>
              <IonCol>11:00 PM</IonCol>
              <IonCol class="borders" id="Sun11PM"></IonCol>
              <IonCol class="borders" id="Mon11PM"></IonCol>
              <IonCol class="borders" id="Tue11PM"></IonCol>
              <IonCol class="borders" id="Wed11PM"></IonCol>
              <IonCol class="borders" id="Thu11PM"></IonCol>
              <IonCol class="borders" id="Fri11PM"></IonCol>
              <IonCol class="borders" id="Sat11PM"></IonCol>
            </IonRow> */}
          </IonCardContent>
          {}
        </IonCard>
        <ItemList doEdit={setCurrent}></ItemList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

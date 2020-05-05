import React, { useState } from 'react';
import { IonContent, IonHeader, IonCard, IonCardContent, IonPage, IonTitle, IonToolbar, IonCardHeader } from '@ionic/react';
import './Tab1.css';
import AddItem from '../AddItem'
import ItemList from '../ItemList';

const Tab1: React.FC = () => {

  const [current, setCurrent] = useState(null);

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
            <h3>Title:</h3>
          </IonCardContent>
          {}
        </IonCard>
        <ItemList doEdit={setCurrent}></ItemList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

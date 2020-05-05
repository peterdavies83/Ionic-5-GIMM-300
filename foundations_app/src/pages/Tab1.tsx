import React, { useState } from 'react';
import { IonContent, IonHeader, IonCard, IonCardContent, IonPage, IonTitle, IonToolbar, IonCardHeader } from '@ionic/react';
import './Tab1.css';

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
            {/*TODO: write a AddItem.tsx file to hold entry */}
          <IonCardContent>
            <h3>Title:</h3>
          </IonCardContent>
          {}
        </IonCard>
        {/* TODO: Add a list of items to database to display */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

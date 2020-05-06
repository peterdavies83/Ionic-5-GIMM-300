import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import {useDocument} from 'react-firebase-hooks/firestore';
import {IonItem, IonButton, IonInput, IonCard, IonCardHeader, IonCardContent, IonDatetime} from '@ionic/react';
import DataProps from './components/DataProps';
import {Plugins} from '@capacitor/core';
import {useCamera} from '@ionic/react-hooks/camera';
import {CameraResultType, CameraSource} from '@capacitor/core';

export function debugInfo(logInfo:DataProps) {
    console.log(logInfo.title, logInfo.content, logInfo.date, logInfo.location, logInfo.picture);
}
export function clearInfo(info:DataProps) {
    info.title = '';
    info.content = '';
    info.date = '';
    info.location = '';
    info.picture = '';
    info.clear = '';
};

const AddItem: React.FC<DataProps> = (props) => {
    const [item, setItem] = useState<DataProps>({
        title:'',
        content:'',
        date:'',
        location:'',
        picture:''
    });

    const {getPhoto} = useCamera();

    const [value, loading, error] = useDocument(
        firebase.firestore().doc("data/" + props.title),
        {
            snapshotListenOptions: {includeMetadataChanges: true}
        }
    );

    useEffect(() => {
        !loading && props.title && value?.exists
        && setItem(value.data().name);
    },
    [loading, props.title, value]);

    const addLocation = async () => {
        const {Geolocation} = Plugins;
        const position = await Geolocation.getCurrentPosition();
        const newPos = "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude;
        return setItem({
            ...item,
            location:newPos
        });
    }
    const takePhoto = async() => {
        const cameraPhoto = await getPhoto({
            resultType: CameraResultType.Base64,
            source:CameraSource.Camera,
            quality:100
        });
        const d = `data:image/jpeg;base64,${cameraPhoto.base64String}`;
        return setItem({
            ...item,
            date: new Date().getDate().toString()
        });
    }

    const onSave = async() => {
        let collectionsRef = firebase.firestore().collection("data");
        if (props.title) {
            await(collectionsRef).doc(props.title).set({
                title: item.title, content: item.content,
                date: item.date ? item.date : "", location: item.location ? item.location : "",
                picture:item.picture ? item.picture : ""}, {merge:true});
                clearInfo(item);
                setItem(item);
                props.clear();
        }
        else{
            await collectionsRef.add({
                title: item.title, content: item.content,
                date: item.date ? item.date: "", location: item.location ? item.location : "",
                picture:item.picture ? item.picture : ""});
                clearInfo(item);
                setItem(item);
                props.clear();
        }
    };

    const updateField = e =>{
        e.preventDefault();
        debugInfo(item);
        setItem({
            ...item,
            [e.target.name]:e.target.value
        });
    };
    return (
        <IonCard>
            <IonCardContent>
                <IonItem>
                    <IonInput value={item.title} placeholder="Event Title" name="title" onIonChange={updateField}>

                    </IonInput>
                </IonItem>
                <IonItem>
                    <IonInput value={item.content} placeholder="Details" name="content" onIonChange={updateField}>
                        
                    </IonInput>
                </IonItem>
                <IonItem>
                    <IonDatetime value={item.date} placeholder="Date" name="date" onIonChange={updateField} min="2020-05-05" max="2022">
                    </IonDatetime> //test
                </IonItem>
                <IonButton onClick={onSave}>
                    Upload
                </IonButton>
                <IonButton onClick={addLocation}>
                    Add Location
                </IonButton>
                <IonButton onClick={takePhoto}>
                    Add Photo
                </IonButton>
            </IonCardContent>
        </IonCard>
    );
}
export default AddItem;
import React from 'react';
import {View} from "react-native";
import {Button, Text} from "react-native-paper";
import {useDispatch} from "react-redux";

const AbscenseScreen = ({route, navigation}) => {
    const {name, attendance} = route.params;
    const dispatch = useDispatch();

    return (
        <View style={{margin:12, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Abscence de : {JSON.stringify(name)}</Text>
            <Text>Nombre d'abscence : {JSON.stringify(attendance)}</Text>
            <View style={{ display: 'flex', justifyContent: 'center'}}>
            <Button
                icon="plus"
                mode="contained"
                compact={true}
                onPress={() => navigation.navigate('Student')} />
            <Button
                icon="minus"
                compact={true}
                style={{marginTop: 5}} mode="contained" onPress={() => dispatch({type: 'DECREMENT'})} />
            </View>
        </View>
    );
}

export default AbscenseScreen;

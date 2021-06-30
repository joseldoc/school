import { List, Divider } from 'react-native-paper';
import React from "react";

const ListItem = ({student, navigation, average, totalCourse}) => {
    return (
        <>
            <List.Item style={{backgroundColor: "white"}}
                title={student.name}
                description={"Nombre d'abscence " + student.attendance + "\n" + "Nombre de cours : " + totalCourse(student.lessons) + "\n" +
                "Moyenne " + average(student.notes)}
                       onPress={() => navigation.navigate('Abscence', student)}
                left={data => <List.Icon {...data} icon="account-circle" />}
            />
            <Divider/>
        </>
    )
};

export default ListItem;

import {List, Avatar} from 'react-native-paper';
import React from "react";
const Student = ({student, navigation, average, totalCourse}) => {
    return (
        <>
        <List.Item style={{backgroundColor: "white", marginTop: 5}} onPress={() => navigation.navigate('Abscence', student)}
            titleStyle={{ color: "rgba(0,0,0,0.7)",fontSize:20 }}
                   descriptionStyle={{fontSize: 15}}
            title={student.name + "\n" }
            description={"Nombre d'abscence: " + student.attendance + " " + "Nombre de cours: " + totalCourse(student.lessons) + "\n"
            + "Moyenne " + average}
            left={props => <Avatar.Image {...props} size={80} source={require('../assets/image_avatar.jpg')} />}
        />
            </>
    )
}

export default Student;

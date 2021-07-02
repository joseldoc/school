import {
    GET_STUDENTS,
    GET_LESSONS,
    RESET_ABSCENCE,
    INCREMENT_ABSCENCE,
    DECREMENT_ABSCENCE,
    GET_STUDENT
} from '../constants/actions';

const stateInit = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] },
        { id: 2, name: "Alan", lessons: [3], attendance: 0, notes: [10, 14.5, 11] },
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 0, notes: [11, 9, 9] },
        { id: 4, name: "Naoudi", lessons: [1], attendance: 0, notes: [14.5, 19, 18] },
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
    ],
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" },
    ],
    behaviours :  [],
    order: false,
    student : {}
}

const school = (state = stateInit, action) => {
    switch (action.type) {

        case GET_STUDENTS: {
            return {...state.students};
        }

        case GET_LESSONS : {
            return {...state.lessons}
        }

        case INCREMENT_ABSCENCE : {
            let students = [...state.students];

            students = students.map(student => {
                if(student.id === action.payload) {
                    student.attendance++;
                }

                return {
                    ...student,
                    lessons: [...student.lessons],
                    notes: [...student.notes]
                }
            });

            return {
                ...state,
                students
            }
        }

        case DECREMENT_ABSCENCE : {
            let students = [...state.students]

            students = students.map(student => {
                if(student.id === action.payload && student.attendance !== 0) student.attendance--;
                return {
                    ...student,
                    lessons: [...student.lessons],
                    notes: [...student.notes]
                }
            });

            return {
                ...state,
                students
            }
        }

        case GET_STUDENT : {
            let students = [...state.students];
            const student = students.find((elt) => elt.id === action.payload);

            return {
                ...state,
                student
            }
        }
        default:
            return state;
    }
}

export default school;

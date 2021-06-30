import React from 'react';
import Nav from "./nav/Nav";
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import rootReducer from "./reducers";
import {createStore} from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer)
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3f51b5',
        accent: 'yellow',
    },
};

export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <Nav />
            </PaperProvider>
        </Provider>
    );
}

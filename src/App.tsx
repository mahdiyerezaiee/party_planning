import React from 'react';
import Container from "./Pages/Contianer/container";
import {Provider} from "react-redux";
import {store} from "./Store/store";

function App() {
    return (
        <Provider store={store}>
            <Container/>
        </Provider>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './Store/FirebaseContext';

import {FirebaseContext} from './Store/FirebaseContext';
import db from './Firebase/config';



ReactDOM.render(

<FirebaseContext.Provider value={{db}}>
    <Context>
           <App />

    </Context>


</FirebaseContext.Provider>,

document.getElementById('root'));

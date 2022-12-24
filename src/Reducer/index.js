
import { configureStore } from '@reduxjs/toolkit';

import basic from './basic';

const store = configureStore({reducer: basic},
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
)
export default store;
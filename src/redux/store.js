import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import videosReducer from './reducers/videosReducer'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, videosReducer)

const store = configureStore({
  reducer: rootReducer,
  persistedReducer
})

const persistor = persistStore(store)

export { store, persistor }

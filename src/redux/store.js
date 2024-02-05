import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

// Load state from localStorage
const persistedState = JSON.parse(localStorage.getItem('reduxState')) || {}

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState // Provide preloadedState during store creation
})

// Subscribe to store updates and save state to localStorage
store.subscribe(() => {
  const stateToPersist = store.getState()
  localStorage.setItem('reduxState', JSON.stringify(stateToPersist))
})

export default store

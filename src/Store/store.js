import { createStore } from 'redux'
// import SiteReducer from '../Reducers/SiteReducer'
import mergedReducers from '../Reducers/CombinedReducer'

const store = createStore(mergedReducers)

export default store
import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { searchTerm: action.searchTerm })
  return newState
}
/**
 * Adds new OMDB data
 * @param {Object} state The current state
 * @param {Object} action Dispatched action {type:ADD_OMDB_DATA, omdbData: {...}, imdbID: 'tt12345' }
 * @returns {Object} The new state
 */
const addomdbData = (state, action) => {
  const newOmdbData = {}
  Object.assign(newOmdbData, state.omdbData, { [action.imdbID]: action.omdbData })
  const newState = {}
  Object.assign(newState, state, { omdbData: newOmdbData })
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case ADD_OMDB_DATA:
      return addomdbData(state, action)
    default:
      return state
  }
}

export default rootReducer

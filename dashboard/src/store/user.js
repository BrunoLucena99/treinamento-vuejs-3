import { reactive } from 'vue'

const userInitialState = {
  currentUser: {}
}

let state = reactive(userInitialState)

export default state

export function clearCurrentUser () {
  state.currentUser = {}
}

export function setCurrentUser (user) {
  state.currentUser = user
}

export function setApiKey (apiKey) {
  const currentUser = { ...state.currentUser, apiKey }
  state.currentUser = currentUser
}

export function resetUserStore () {
  state = reactive(userInitialState)
}

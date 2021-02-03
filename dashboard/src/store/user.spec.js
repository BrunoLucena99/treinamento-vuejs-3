import useStore from '../hooks/useStore'
import {
  setCurrentUser,
  resetUserStore,
  setApiKey,
  clearCurrentUser
} from './user'

describe('UserStore', () => {
  let store;
  beforeEach(() => {
    store = useStore()
  })
  afterEach(() => {
    resetUserStore()
  })

  it('should set current user', () => {
    setCurrentUser({ name: 'Bruno Lucena' })
    expect(store.User.currentUser.name).toBe('Bruno Lucena')
  })

  it('should set api_key on current user', () => {
    setApiKey('abcd12')
    expect(store.User.currentUser.apiKey).toBe('abcd12')
  })

  it('should clean current user', () => {
    setCurrentUser({ name: 'Bruno Lucena' })
    expect(store.User.currentUser.name).toBe('Bruno Lucena')
    clearCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })

})

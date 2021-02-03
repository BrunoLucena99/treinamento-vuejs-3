import { readonly } from 'vue'
import UserModule from './user'
import GlobalModule from './global'

//  Readonly to not directly change the state
export default readonly({
  User: UserModule,
  Global: GlobalModule
})

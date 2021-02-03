<template>
  <modal-factory />
  <router-view/>
</template>

<script>
import { watch } from 'vue'
import ModalFactory from './components/ModalFactory'
import { useRoute, useRouter } from 'vue-router'
//  import jwtDecode from 'jwt-decode'
import services from './services'
import { setCurrentUser } from './store/user'

export default {
  components: { ModalFactory },
  setup () {
    const router = useRouter()
    const route = useRoute()

    watch(() => route.path, async () => {
      console.log(route.meta)
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token')

        if (!token) {
          router.push({ name: 'Home' })
          return
        }

        const { data } = await services.users.getMe()
        //  const data = jwtDecode(token)
        setCurrentUser(data)
      }
    })
  }
}
</script>

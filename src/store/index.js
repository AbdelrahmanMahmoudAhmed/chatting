import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
// import router from 'src/router'
import { firebaseAuth, firebaseDb } from "../boot/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import example from './module-example/index'
import router from 'src/router'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      example,
    },
    state: {
      go: "go",
      user: null
    },
    mutations: {
      SET_USER(state, user) {
        state.user = user
      },
      CLEAR_USER(state) {
        state.user = null;
      }
    },
    actions: {
      async login({ commit }, details) {
        const { email, password } = details
        try {
          await signInWithEmailAndPassword(firebaseAuth, email, password)

        } catch (err) {
          switch (err.code) {
            case 'auth/user-not-found':
              alert("user not found")
              break;
            case 'auth/wrong-password':
              alert("password is wrong")
              break;
            default:
              alert(err.message, "something went wrong")
          }
          return
        }
        commit("SET_USER", firebaseAuth.currentUser)
        // router.push({ path: '/' })
      },
      async register({ commit }, details) {
        const { name, email, password } = details
        try {
          await createUserWithEmailAndPassword(firebaseAuth, email, password)

        } catch (err) {
          switch (err.code) {
            case 'auth/email-already-in-use':
              alert("email is already in use")
              break;
            case 'auth/invalid-email':
              alert("invalid emai")
              break;
            case 'auth/operation-not-allowed':
              alert("operation not allowed")
              break;
            case 'auth/weak-password':
              alert("weak password")
              break;
            default:
              alert(err.message, "something went wrong")
          }
          return
        }
        commit("SET_USER", firebaseAuth.currentUser)
        // router.push({ path: '/' })


      },
      async logout({ commit }) {
        await signOut(firebaseAuth)
        // router.push({ path: '/auth' })

      },

      fetchUser({ commit }) {
        firebaseAuth.onAuthStateChanged(async user => {
          if (user === null) {
            commit('CLEAR_USER')
          } else {
            commit('SET_USER', user)

            if (router.isReady() && router.currentRoute.value.path === '/auth') {
              router.push('/')
            }
          }
        })
      },


      // must to know the way to use firebase 9
      registerUser({ }, payload) {
        // firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
        //   .then(response => {
        //     console.log(response);
        //   })
        //   .catch((err) => {
        //     console.log(err.message);
        //   })

      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})

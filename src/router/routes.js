import UserPage from "../pages/UserPage.vue"
import ChatPage from "../pages/ChatPage.vue"
import AuthPage from "../pages/AuthPage.vue"
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/UserPage.vue'), meta: { requiresAuth: true } },
      { path: '/chat', component: () => import('src/pages/ChatPage.vue'), meta: { requiresAuth: true } },
      { path: '/auth', component: () => import('src/pages/AuthPage.vue') }
    ]
  },
  // {
  //   path: "/",
  //   component: UserPage,
  //   name: "UserPage",
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: "/chat",
  //   component: ChatPage,
  //   name: "ChatPage",
  //   meta: { requiresAuth: true }
  // },
  // {
  //   path: "/auth",
  //   component: AuthPage,
  //   name: "AuthPage",
  //   meta: { requiresAuth: true }
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

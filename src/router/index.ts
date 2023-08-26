import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      meta: {  },
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../layouts/MainLayout.vue'),
        },
      ],
    },
    // {
    //   path: '/:catchAll(.*)*',
    //   component: () => {
    //     if(!document.body.classList.contains('twig-content-loaded'))
    //       return import('../views/ErrorNotFound.vue')
    //     else
    //       return import('../views/EmptyPageView.vue')
    //   },
    // },
  ],
})

router.beforeEach(() => {
  //
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

import CategoryPage from '../views/Categories.vue'
import CotailsPage from '../views/Cocktails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cocktails',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'cocktailsCategories',
          component: CategoryPage,
        },
        {
          path: ':category',
          name: 'CocktailsByCategory',
          props: (route) => ({ category: String(route.params.category) }),
          component: CotailsPage,
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

router.onError((error) => {
  if (error.message.includes('Failed to fetch dynamically imported module') || error.message.includes('Importing a module script failed')) {
    // window.location = to.fullPath
  }
})

export default router

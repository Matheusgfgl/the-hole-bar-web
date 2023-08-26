import { createRouter, createWebHistory } from 'vue-router'

import CategoryPage from '../views/Categories.vue'
import CocktailsPage from '../views/Cocktails.vue'
import CocktailDetails from '../views/CocktailDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'cocktailsCategories',
          component: CategoryPage,
        },
      ],
    },
    {
      path: '/cocktails',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: ':category',
          name: 'CocktailsByCategory',
          props: (route) => ({ category: String(route.params.category) }),
          component: CocktailsPage,
        },
      ],
    },
    {
      path: '/cocktail',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: ':id',
          name: 'CocktailDetails',
          props: (route) => ({ id: Number(route.params.id) }),
          component: CocktailDetails,
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

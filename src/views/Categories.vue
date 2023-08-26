<template>
  <div class="category">
    <h1 class="category__title">
      Lista de Categorias de Bebidas
    </h1>
    <ul
      v-if="categories"
      class="category__list"
    >
      <li
        v-for="category in categories"
        :key="category.strCategory"
        class="category__item"
      >
        <RouterLink
          class="category__item__link"
          :to="{ name: 'CocktailsByCategory',
                 params: { category: category.strCategory } }"
        >
          {{ category.strCategory }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const cocktailsStore = useCocktailsStore();

const {
  getCategories,
} = cocktailsStore;

const {
	categories,
} = storeToRefs(cocktailsStore);

const loading = ref(false);

onMounted(async (): Promise<void> => {

  if(!categories.value.length){
    loading.value = true;

    await Promise.all([
      getCategories(),
    ]);

    loading.value = false;
  }

});
</script>


<style scoped lang="scss">
.category {
  text-align: center;
  padding: 0 10%;
  background-color: var(--white);

  @include screen(tablet-big-up) {
    padding: 2rem 15%;
  }

  &__title {
    font-size: $text-3xl;
    font-weight: bold;
    margin-bottom: 2rem;

    @include screen(tablet-up) {
      font-size: $text-4xl;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin-top: 20px;

    @include screen(tablet-big-up) {
      gap: 1.8rem;
    }
  }

  &__item {
    background-color: var(--primary-light);
    color: var(--black);
    padding: 0.8rem 0.8rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    font-weight: $font-bold;
    font-size: $text-lg;
    text-align: center;

    &__link {
      color: var(--black);
      text-decoration: none;
    }
  }
}

</style>

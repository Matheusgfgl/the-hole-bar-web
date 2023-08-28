<template>
  <div class="category">
    <h1 class="category__title">
      Lista de Categorias de Bebidas
    </h1>
    <template v-if="loading">
      <div class="loading">
        <div class="loading__item">
          <SkeletonElement height="100%" />
        </div>
        <div class="loading__item">
          <SkeletonElement height="100%" />
        </div>
        <div class="loading__item">
          <SkeletonElement height="100%" />
        </div>
        <div class="loading__item">
          <SkeletonElement height="100%" />
        </div>
        <div class="loading__item">
          <SkeletonElement height="100%" />
        </div>
        <div class="loading__item">
          <SkeletonElement height="100%" />
        </div>
        <div class="loading__item">
          <SkeletonElement height="100%" />
        </div>
        <div class="loading__item">
          <SkeletonElement height="100%" />
        </div>
      </div>
    </template>
    <template v-else-if="categories">
      <ul class="category__list">
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
      <div class="search">
        <input
          v-model="searchQuery"
          placeholder="Busque pelo nome da bebida"
          class="search__input"
        >
        <button
          class="search__button"
          @click.prevent="searchByName()"
        >
          Realizar Busca
        </button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import router from '@/router';

const cocktailsStore = useCocktailsStore();

const {
  getCategories,
} = cocktailsStore;

const {
	categories,
} = storeToRefs(cocktailsStore);

const loading = ref(false);
const searchQuery = ref('');

onMounted(async (): Promise<void> => {
  loading.value = true;

  await Promise.all([
    getCategories(),
  ]);

  loading.value = false;

});

const searchByName = async () => {
  router.push({ name: 'CocktailsByName', query: { search: searchQuery.value } });
}
</script>


<style scoped lang="scss">
.loading {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.8rem;

  &__item {
    height: 3.5rem;
    width: 100%;
  }
}
.category {
  padding: 2rem 10%;
  text-align: center;
  background-color: var(--white);

  @include screen(tablet-big-up) {
    padding: 2rem 15%;
  }

  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    width: 100%;
    max-width: 50rem;

    &__input {
      width: 40%;
      height: 2.5rem;
      border-radius: 0.5rem;
      border: 1px solid var(--gray-300);
      padding: 0.5rem;
      font-size: $text-base;
      font-weight: $font-bold;
      color: var(--black);
      text-decoration: none;
      margin-right: 2rem;
    }

    &__button {
      width: 20%;
      border-radius: $radius-md;
      border: 1px solid var(--gray-300);
      padding: 0.5rem;
      font-size: $text-base;
      font-weight: $font-bold;
      color: var(--white);
      background-color: var(--secondary);
      cursor: pointer;
    }
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

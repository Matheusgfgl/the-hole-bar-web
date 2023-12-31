<template>
  <div class="cocktails">
    <h1
      v-if="!searchQuery"
      class="cocktails__title"
    >
      Cocktails - {{ props.category }}
    </h1>
    <h1
      v-else
      class="cocktails__title"
    >
      Busca por Cocktails - {{ searchQuery }}
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
      </div>
    </template>
    <template v-else>
      <section class="cocktails__content">
        <CocktailCard
          v-for="cocktail in cocktails"
          :key="cocktail.idDrink"
          :cocktail="cocktail"
        />
      </section>
    </template>
  </div>
</template>
<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import CocktailCard from '@/components/cocktail/Card.vue';
import { useRoute } from 'vue-router';

const cocktailsStore = useCocktailsStore();

// Props
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const {
  getCocktails,
  searchCocktails,
} = cocktailsStore;

const {
	cocktails,
  cocktailsByName,
} = storeToRefs(cocktailsStore);

const loading = ref(false);
let searchQuery = ref('');

onMounted(async (): Promise<void> => {
  searchQuery.value = useRoute().query?.search as string;

  if(!props.category && !searchQuery.value)
    return;

  if(props.category) {
    loading.value = true;

    await Promise.all([
      getCocktails(props.category),
    ]);

    loading.value = false;
  } else {
    try {
      await searchCocktails(searchQuery.value);

    } catch (error) {
      // console.error(error);
    }

    cocktails.value = cocktailsByName.value;
  }

  loading.value = false;

});
</script>


<style lang="scss" scoped>
.loading {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 2rem;

  @include screen(tablet-up) {
    grid-template-columns: 1fr 1fr;
  }

  @include screen(tablet-big-up) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  &__item {
    height: 14rem;
    padding-top: 0.5rem;
    width: 100%;
  }
}
.cocktails {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 10%;
  background-color: var(--white);

  @include screen(tablet-big-up) {
    padding: 2rem 15%;
  }

  &__title {
    font-size: $text-4xl;
    font-weight: bold;
    margin: 0 0 2rem;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    gap: 2rem;
    width: 100%;

    @include screen(tablet-up) {
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
    }

    @include screen(tablet-big-up) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>

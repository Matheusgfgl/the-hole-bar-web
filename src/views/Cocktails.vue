<template>
  <div class="cocktails">
    <h1 class="cocktails__title">
      Cocktails - {{ props.category }}
    </h1>
    <div class="cocktails__content">
      <CocktailCard
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
        :cocktail="cocktail"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

import CocktailCard from '@/components/cocktail/Card.vue';

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
} = cocktailsStore;

const {
	cocktails,
} = storeToRefs(cocktailsStore);

const loading = ref(false);

onMounted(async (): Promise<void> => {
  loading.value = true;

  await Promise.all([
    getCocktails(props.category),
  ]);

  loading.value = false;

});
</script>


<style lang="scss" scoped>
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

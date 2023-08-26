<template>
  <div class="cocktails">
    <h1 class="cocktails__title">
      Cocktails
    </h1>
    <div class="cocktails__content">
      <div
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
        class="cocktails__item"
      >
        <img
          :src="cocktail.strDrinkThumb"
          :alt="cocktail.strDrink"
          class="cocktails__item__image"
        >
        <p class="cocktails__item__name">
          {{ cocktail.strDrink }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCocktailsStore } from '@/stores/cocktails';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

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
  padding: 2rem 2rem;
  background-color: var(--white);

  &__title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 1rem;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }

  &__item {
    background-color: #fff;
    padding: 20px;
    border-radius: $radius-lg;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;

    &__image {
      max-width: 100%;
      max-height: 18rem;
      height: auto;
      margin-bottom: 10px;
    }

    &__name {
      font-size: 18px;
      font-weight: bold;
      margin: 1rem 0;
    }
  }
}
</style>

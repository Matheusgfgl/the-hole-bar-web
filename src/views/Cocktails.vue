<template>
  <div class="cocktails">
    <h1 class="cocktails__title">
      Cocktails - {{ props.category }}
    </h1>
    <div class="cocktails__content">
      <div
        v-for="cocktail in cocktails"
        :key="cocktail.idDrink"
        class="cocktails__item"
      >
        <RouterLink
          class="cocktails__item__link"
          :to="{ name: 'CocktailDetails',
                 params: { id: cocktail.idDrink } }"
        >
          <img
            :src="`${cocktail.strDrinkThumb}`"
            :alt="cocktail.strDrink"
            class="cocktails__item__image"
          >
          <p class="cocktails__item__name">
            {{ cocktail.strDrink }}
          </p>
        </RouterLink>
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

  &__item {
    background-color: #fff;
    padding: 0 0 1.5rem 0;
    border-radius: $radius-lg;
    box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.3);
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &__link {
      color: var(--black);
      text-decoration: none;
    }

    &__image {
      width: 100%;
      height: auto;
      margin-bottom: 1.5rem;
    }

    &__name {
      font-size: 18px;
      font-weight: bold;
      margin: 0.5rem 0;
    }
  }
}
</style>

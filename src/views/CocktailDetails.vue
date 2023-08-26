<template>
  <div class="cocktail-details">
    <h1 class="cocktail-details__title">
      Detalhes do Cocktail
    </h1>
    <div class="cocktail-details__content">
      <div class="cocktail-details__container">
        <img
          :src="`${cocktail.strDrinkThumb}`"
          :alt="cocktail.strDrink"
          class="cocktail-details__image"
        >
      </div>
      <div class="cocktail-details__tags">
        <span
          v-for="tag in cocktailTags"
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>
      <h4 class="cocktail-details__name">
        <span class="label">
          Cocktail -
        </span>
        {{ cocktail.strDrink }}
      </h4>
      <p class="cocktail-details__ingredients">
        <span class="label">
          Ingredients:
        </span>
        <span
          v-for="(ingredient, index) in cocktailIngridients"
          :key="ingredient"
        >
          <span v-if="index === cocktailIngridients.length - 1">
            and {{ ingredient }}.
          </span>
          <span v-else>
            {{ ingredient }},
          </span>
        </span>
      </p>
      <p class="cocktail-details__measures">
        <span class="label">
          Measures:
        </span>
        <span
          v-for="(measures, index) in cocktailMeasures"
          :key="measures"
        >
          <span v-if="index === cocktailMeasures.length - 1">
            and {{ measures }}.
          </span>
          <span v-else>
            {{ measures }},
          </span>
        </span>
      </p>
      <p class="cocktail-details__instructions">
        <span class="label">Instructions:</span>
        {{ cocktail.strInstructions }}
      </p>
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
  id: {
    type: Number,
    required: true,
  },
});

const {
  getCocktailDetails,
} = cocktailsStore;

const {
	cocktail,
} = storeToRefs(cocktailsStore);

const loading = ref(false);
let cocktailTags = ref([] as string[]);
let cocktailIngridients = ref([] as string[]);
let cocktailMeasures = ref([] as string[]);

onMounted(async (): Promise<void> => {
  loading.value = true;

  await Promise.all([
    getCocktailDetails(props.id),
  ]);

  cocktailTags.value = [
    cocktail.value.strAlcoholic,
    cocktail.value.strCategory,
    cocktail.value.strGlass,
  ];

  cocktailIngridients.value = [
    cocktail.value.strIngredient1,
    cocktail.value.strIngredient2,
    cocktail.value.strIngredient3,
    cocktail.value.strIngredient4,
  ];

  if(cocktail.value.strMeasure1) {
    cocktailMeasures.value = [
      cocktail.value.strMeasure1,
      cocktail.value.strMeasure2,
    ]
  }

  loading.value = false;

});
</script>

<style lang="scss" scoped>
.cocktail-details {
  padding: 1.5rem 8%;
  text-align: center;

  @include screen(tablet-up) {
    padding: 1rem 0 1.5rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;

    @include screen(tablet-up) {
      margin: 1rem 20% 1.5rem;
    }

    @include screen(tablet-big-up) {
      margin: 1rem 28% 1.5rem;
    }
  }

  &__title {
    font-size: $text-3xl;
    font-weight: bold;
    margin: 0 0 1rem;

    @include screen(tablet-up) {
      font-size: $text-4xl;
    }
  }

  &__container {
    background: no-repeat center;
    background-size: cover;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__tags {
    margin-top: 1.5rem;
    display: flex;
    gap: 0.7rem;
    .tag {
      display: inline-block;
      background-color: var(--primary-light);
      padding: 0.3rem 0.8rem;
      font-weight: $font-semi-bold;
      border-radius: $radius-sm;
      font-size: $text-sm;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    border-radius: 0 0 $radius-lg $radius-lg;
    box-shadow: 2px 8px 12px rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  &__name {
    font-size: $text-base;
    margin-top: 0.5rem;

    @include screen(tablet-up) {
      font-size: $text-lg;
    }
  }

  &__ingredients {
    font-size: $text-base;
    margin-bottom: 0.5rem;

    @include screen(tablet-up) {
      font-size: $text-lg;
    }
  }

  &__measures {
    font-size: $text-base;
    margin-bottom: 0.5rem;

    @include screen(tablet-up) {
      font-size: $text-lg;
    }
  }

  &__instructions {
    font-size: $text-base;
  }

  .label {
    font-weight: bold;
    text-align: start;
  }
}


</style>

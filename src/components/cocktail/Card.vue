<template>
  <div class="card">
    <RouterLink
      class="card__link"
      :to="{ name: 'CocktailDetails',
             params: { id: cocktail.idDrink } }"
    >
      <img
        :src="`${cocktail.strDrinkThumb}`"
        :alt="cocktail.strDrink"
        class="card__image"
      >
      <p class="card__name">
        {{ cocktail.strDrink }}
      </p>
      <p class="card__id">
        <b> Id: </b>
        {{ cocktail.idDrink }}
      </p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
// Props
defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped lang="scss">
  .card {
    background-color: #fff;
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
      max-height: 18rem;
    }

    &__name {
      font-size: $text-lg;
      font-weight: bold;
      margin-top: 1.2rem;
    }

    &__id {
      font-size: $text-base;
      margin: 0.5rem 0 1.2rem;
    }
  }
</style>

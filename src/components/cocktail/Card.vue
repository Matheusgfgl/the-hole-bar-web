<template>
  <section class="card">
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
    </RouterLink>
  </section>
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
    padding: 0 0 1rem 0;
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
    }

    &__name {
      font-size: 18px;
      font-weight: bold;
      margin: 1rem 0;
    }
  }
</style>

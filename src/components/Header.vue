<template>
  <header class="header">
    <picture>
      <img
        class="header__logo"
        src="public/img/logo.png"
        alt="Logo The Hole Bar"
      >
    </picture>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  background-color: var(--black);
  color: #fff;

  &__logo {
    max-height: 85px;
    width: 100%;
  }
}

</style>

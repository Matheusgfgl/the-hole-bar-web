<template>
  <div
    class="skeleton-loading"
    :class="customClass"
    :style="style"
  >
    <div class="skeleton-loading__content" />
  </div>
</template>

<script setup lang="ts">
  // Props
  const props = defineProps({
    height: {
      type: String,
      required: false,
      default: null,
    },

    width: {
      type: String,
      required: false,
      default: null,
    },

    customClass: {
      type: String,
      required: false,
      default: null,
    },
  });

  const style = {
    height: props.height,
    width: props.width,
  };

</script>

<style lang="scss" scoped>
  .skeleton-loading {
    &__content {
      height: 100%;
      width: 100%;
      border-radius: $radius-normal;
      display: inline-block;
      position: relative;
      overflow: hidden;
      background-color: var(--gray-300);

      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        background-image:
          linear-gradient(
            90deg,
            rgba(#f6f6f6, 0) 0,
            rgba(#f6f6f6, 0.2) 20%,
            rgba(#f6f6f6, 0.5) 60%,
            rgba(#f6f6f6, 0)
          );
        animation: shimmer 2s infinite;
      }

      @keyframes shimmer {
        100% {
          transform: translateX(100%);
        }
      }
    }
  }
</style>

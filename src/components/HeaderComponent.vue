<template>
  <div class="header">
    <div class="header__logo">
      <a href="https://github.com/KuratovIgor" target="_blank">
        <img src="../assets/images/logo.png" />
      </a>
    </div>
    <div class="header__burger">
      <img src="../assets/images/burger.png" @click="handleBurgerClick" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',

  setup(_, { emit }) {
    const handleBurgerClick = (): void => {
      emit('on-burger-click')
    }

    return { handleBurgerClick }
  },
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--el-color-primary);
  border-radius: 0 0 20px 20px;
  background: var(--el-color-primary-light-8);

  &__logo {
    img {
      margin: 10px;
      height: 40px;
    }
  }

  &__burger {
    img {
      margin-right: 10px;
      width: 60px;
    }
  }
}
</style>

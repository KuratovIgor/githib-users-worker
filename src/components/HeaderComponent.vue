<template>
  <div class="header">
    <a href="https://github.com/KuratovIgor" target="_blank">
      <img class="header__logo" src="../assets/images/logo.png" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
})
</script>

<style lang="scss" scoped>
.header {
  border: 1px solid var(--el-color-primary);
  border-radius: 0 0 20px 20px;
  background: var(--el-color-primary-light-8);

  &__logo {
    margin: 10px;
    height: 40px;
  }
}
</style>

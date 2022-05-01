<template>
  <div class="footer">
    <div class="footer__link">
      <a href="https://github.wiki/en/rest" target="_blank">Github API</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',
})
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid var(--el-color-info);
  border-radius: 20px 20px 0 0;
  height: 80px;
  font-size: $font-size--30;
  background: var(--el-color-info-light-7);

  &__link {
    margin-right: 20px;
  }
}

a {
  text-decoration: none;
  color: var(--el-color-danger-dark-2);
}
</style>

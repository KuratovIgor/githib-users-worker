<template>
  <div class="repo">
    <div class="repo__header">
      <div class="repo__name">{{ repo.name }}</div>
      <div class="repo__visibility">{{ repo.visibility }}</div>
    </div>
    <div class="repo__description">{{ repo.description }}</div>
    <div class="repo__footer">
      <ul class="repo__languages">
        <li v-for="lang in repo.languages" class="repo__languages__item">
          {{ lang }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { repoType } from '@/types/githubType'

export default defineComponent({
  name: 'RepoComponent',

  props: {
    repo: Object as PropType<repoType>,
  },
})
</script>

<style lang="scss" scoped>
.repo {
  border: 1px solid var(--el-border-color);
  border-radius: 10px;
  padding: 10px;
  min-height: 100px;
  max-width: 800px;
  background: var(--el-color-warning-light-9);

  &__header {
    display: flex;
  }

  &__name {
    margin-right: 10px;
    font-size: $font-size--24;
    color: var(--el-color-warning);
  }

  &__visibility {
    border: 1px solid var(--el-color-info-dark-2);
    border-radius: 10px;
    padding: 5px;
    font-size: $font-size--16;
    color: var(--el-color-info-dark-2);
  }

  &__description {
    margin: 5px 0 15px;
    font-size: $font-size--20;
    color: var(--el-color-info);
  }

  &__languages {
    display: flex;
    font-size: $font-size--20;
    color: var(--el-color-primary-light-3);

    &__item {
      margin-right: 15px;
    }
  }
}
</style>

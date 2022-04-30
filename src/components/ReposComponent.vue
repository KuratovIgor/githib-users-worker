<template>
  <el-scrollbar height="600px" class="repos">
    <repo-component
      v-for="repo in repos"
      :key="repo"
      :repo="repo"
      class="repos__item"
    />
  </el-scrollbar>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { repoType } from '@/types/githubType'
import RepoComponent from '@/components/RepoComponent.vue'

export default defineComponent({
  name: 'ReposComponent',
  components: { RepoComponent },

  props: {
    repos: Array as PropType<repoType[]>,
  },
})
</script>

<style lang="scss" scoped>
.repos {
  overflow: auto;
  border: 1px solid var(--el-border-color-dark);
  border-radius: 10px;
  padding: 15px;
  min-width: 850px;

  &__item {
    margin-bottom: 5px;
  }
}
</style>

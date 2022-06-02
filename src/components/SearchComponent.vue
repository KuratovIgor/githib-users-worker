<template>
  <div class="search">
    <el-input
      v-model="userName"
      clearable
      class="w-25 m-2 search__input"
      placeholder="Введите имя пользователя..."
    >
      <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
    <el-button type="primary" @click="handleSearchUer">Найти</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SearchComponent',

  setup(__, { emit }) {
    let userName = ref<string>()

    const handleSearchUer = (): void => {
      emit('search-user', userName.value)
    }

    return {
      userName,
      handleSearchUer,
    }
  },
})
</script>

<style lang="scss" scoped>
.search {
  display: flex;

  &__input {
    margin-right: 20px;
  }
}

@media (max-width: $window-size--580) {
  .search {
    display: flex;
    flex-direction: column;

    &__input {
      margin-bottom: 10px;
    }
  }
}
</style>

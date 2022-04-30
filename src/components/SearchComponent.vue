<template>
  <el-input
    v-model="userName"
    clearable
    class="w-25 m-2"
    placeholder="Введите имя пользователя..."
    @keydown.enter="handleSearchUer"
  >
    <template #prefix>
      <el-icon class="el-input__icon"><search /></el-icon>
    </template>
  </el-input>
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

<style lang="scss" scoped></style>

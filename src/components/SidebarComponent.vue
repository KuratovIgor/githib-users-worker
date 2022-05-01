<template>
  <div class="sidebar">
    <el-form class="sidebar" :model="form">
      <div class="sidebar__sort">
        <p class="sidebar__title">Сортировка</p>
        <div class="sidebar__sort-items">
          <el-form-item>
            <el-select
              v-model="form.sortParameter"
              placeholder="Выберите параметр..."
            >
              <el-option label="А - Я" />
              <el-option label="Я - А" />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="sidebar__filter">
        <p class="sidebar__title">Фильтры</p>
        <div class="sidebar__filter-items">
          <p>Языки программирования:</p>
          <div class="sidebar__filter-item">
            <el-form-item>
              <el-checkbox-group v-model="form.languages">
                <el-checkbox label="C++" name="type" />
                <el-checkbox label="C#" name="type" />
                <el-checkbox label="JavaScript" name="type" />
                <el-checkbox label="TypeScript" name="type" />
                <el-checkbox label="HTML" name="type" />
                <el-checkbox label="Vue" name="type" />
                <el-checkbox label="React" name="type" />
                <el-checkbox label="Java" name="type" />
                <el-checkbox label="Python" name="type" />
                <el-checkbox label="Pascal" name="type" />
                <!--<el-checkbox v-for="lang in languages" label="lang" name="type" />-->
              </el-checkbox-group>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="sidebar__limit">
        <p class="sidebar__title">Количество результатов</p>
        <div class="sidebar__limit__items">
          <el-form-item>
            <el-input v-model="form.limit" />
          </el-form-item>
        </div>
      </div>

      <div class="sidebar__buttons">
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Применить</el-button>
          <el-button>Отменить</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'SidebarComponent',

  setup(_, { emit }) {
    const form = reactive({
      sortParameter: '',
      languages: [],
      limit: -1,
    })

    const onSubmit = () => {
      emit('on-sort', form.sortParameter)
      emit('on-filter', form.languages)
      emit('on-limit', form.limit)
    }

    return {
      form,
      onSubmit,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--el-border-color-dark);
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  max-width: 450px;
  background: var(--el-color-warning-light-5);

  &__title {
    margin-bottom: 10px;
    font-size: $font-size--30;
    color: var(--el-color-danger-dark-2);
  }

  &__sort {
    &-items {
      margin-left: 20px;
    }
  }

  &__filter {
    &-items {
      margin-left: 20px;
      font-size: $font-size--20;
    }

    &-item {
      margin-left: 40px;
    }
  }

  &__limit {
    &__items {
      margin-left: 20px;
      max-width: 100px;
    }
  }
}
</style>

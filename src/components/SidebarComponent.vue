<template>
  <el-form class="sidebar" :model="form">
    <div class="sidebar__content">
      <div class="sidebar__form">
        <p class="sidebar__title">Сортировка</p>
        <div class="sidebar__form-items">
          <el-form-item>
            <el-select
              v-model="form.sortParameter"
              placeholder="Выберите параметр..."
            >
              <el-option label="А - Я" value="А - Я" />
              <el-option label="Я - А" value="Я - А" />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <div class="sidebar__form">
        <p class="sidebar__title">Фильтры</p>
        <div class="sidebar__form-items">
          <p>Языки программирования:</p>
          <div class="sidebar__form-item">
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
              </el-checkbox-group>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="sidebar__form">
        <p class="sidebar__title">Количество результатов</p>
        <div class="sidebar__form-items">
          <el-form-item>
            <el-input v-model="form.limit" />
          </el-form-item>
        </div>
      </div>
    </div>

    <div class="sidebar__buttons">
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Применить</el-button>
        <el-button @click="onCancel">Отменить</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SidebarComponent',

  setup() {
    const store = useStore()

    const form = reactive({
      sortParameter: '',
      languages: [],
      limit: 0,
    })

    const onSubmit = () => {
      store.state.sortParameter = form.sortParameter
      store.state.languages = form.languages
      store.state.limit = form.limit
    }

    const onCancel = () => {
      store.state.sortParameter = ''
      store.state.languages = []
      store.state.limit = 0

      form.sortParameter = ''
      form.languages = []
      form.limit = 0
    }

    return {
      form,
      onSubmit,
      onCancel,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--el-border-color-dark);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  background: var(--el-color-warning-light-5);

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 10px;
    font-size: $font-size--30;
    color: var(--el-color-danger-dark-2);
  }

  &__form {
    margin-bottom: 20px;
    min-width: 400px;
    max-width: 550px;

    &-items {
      margin-left: 20px;
      font-size: $font-size--20;
    }

    &-item {
      margin-left: 40px;
    }
  }

  &__buttons {
    align-self: flex-end;
  }
}

@media (max-width: $window-size--580) {
  .sidebar {
    &__form {
      min-width: 200px;
      max-width: 300px;
    }
  }
}
</style>

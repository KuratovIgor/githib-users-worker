<template>
  <div class="main">
    <search-component class="main__search" @search-user="handleSearchUser" />
    <div v-if="isNameEntered && isUserExists" class="main__about-user">
      <user-component
        v-loading="loadingUser"
        element-loading-text="Загрузка..."
        element-loading-background="rgba(0, 0, 0, 0.6)"
        :user="user"
      />
      <repos-component
        v-loading="loadingRepos"
        element-loading-text="Загрузка..."
        element-loading-background="rgba(0, 0, 0, 0.6)"
        :repos="repos"
      />
    </div>
    <div v-if="!isUserExists" class="main__error">Пользователь не найден!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import ReposComponent from '@/components/ReposComponent.vue'
import { repoType, userType } from '@/types/githubType'
import { GithubApi } from '@/utils/github.api'
import UserComponent from '@/components/UserComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'

export default defineComponent({
  name: 'MainPage',
  components: { SearchComponent, UserComponent, ReposComponent },

  setup() {
    const loadingUser = ref(true)
    const loadingRepos = ref(true)

    let isNameEntered = ref<boolean>(false)
    let isUserExists = ref<boolean>(true)

    let user = ref<userType>()
    let repos = ref<repoType[]>()

    const getUser = async (userName: string): Promise<void> => {
      if (userName !== '') {
        isNameEntered.value = true
        loadingUser.value = true

        try {
          user.value = await GithubApi.getUser(userName)
          isUserExists.value = true
        } catch (e) {
          isUserExists.value = false
        }

        loadingUser.value = false
      }
    }

    const getRepos = async (userName: string): Promise<void> => {
      if (userName !== '') {
        isNameEntered.value = true
        loadingRepos.value = true

        try {
          repos.value = await GithubApi.getRepos(userName)
          isUserExists.value = true
        } catch (e) {
          isUserExists.value = false
        }

        loadingRepos.value = false
      }
    }

    const handleSearchUser = (userName: string): void => {
      getUser(userName)
      getRepos(userName)
    }

    onMounted((): void => {
      getRepos('')
      getUser('')
    })

    return {
      isNameEntered,
      isUserExists,
      loadingUser,
      loadingRepos,
      user,
      repos,
      handleSearchUser,
    }
  },
})
</script>

<style lang="scss" scoped>
.main {
  margin: 50px auto;
  padding: 10px;
  max-width: 1200px;

  &__search {
    margin-bottom: 30px;
  }

  &__about-user {
    display: flex;
    justify-content: space-between;
  }

  &__error {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size--24;
  }
}
</style>

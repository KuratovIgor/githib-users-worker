<template>
  <div class="content">
    <search-component class="content__search" @search-user="handleSearchUser" />
    <div v-if="isNameEntered && isUserExists" class="content__about-user">
      <user-component
        v-loading="loadingUser"
        element-loading-text="Загрузка..."
        element-loading-background="rgba(0, 0, 0, 0.6)"
        :user="user"
        class="content__about-user__user"
      />
      <repos-component
        v-loading="loadingRepos"
        element-loading-text="Загрузка..."
        element-loading-background="rgba(0, 0, 0, 0.6)"
        :repos="reposFiltered"
      />
    </div>
    <div v-if="!isUserExists" class="content__error">
      Пользователь не найден!
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import SearchComponent from '@/components/SearchComponent.vue'
import UserComponent from '@/components/UserComponent.vue'
import ReposComponent from '@/components/ReposComponent.vue'
import { repoType, userType } from '@/types/githubType'
import { GithubApi } from '@/utils/github.api'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'ContentComponent',

  components: {
    SearchComponent,
    UserComponent,
    ReposComponent,
  },

  setup() {
    const store = useStore()

    const loadingUser = ref(true)
    const loadingRepos = ref(true)

    let isNameEntered = ref<boolean>(false)
    let isUserExists = ref<boolean>(true)

    let user = ref<userType>()
    let repos = ref<repoType[]>([])

    const reposFiltered = computed((): repoType[] => {
      const filteredRepos: repoType[] = repos.value.filter((repo) => {
        if (store.state.languages.length > 0) {
          for (const lang of store.state.languages) {
            if (repo.languages.includes(lang)) {
              return true
            }
          }

          return false
        }

        return true
      })

      if (store.state.sortParameter === 'А - Я') {
        filteredRepos.sort()
      }
      if (store.state.sortParameter === 'Я - А') {
        filteredRepos.sort((f, s) => {
          let first: string = f.name.toLowerCase()
          let second: string = s.name.toLowerCase()
          if (first < second) return 1
          if (first > second) return -1
        })
      }

      if (store.state.limit > 0) {
        return filteredRepos.splice(0, store.state.limit)
      }

      return filteredRepos
    })

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
      reposFiltered,
      handleSearchUser,
    }
  },
})
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  max-width: 1200px;

  &__search {
    margin-bottom: 30px;
  }

  &__about-user {
    display: flex;
    justify-content: space-between;

    &__user {
      margin-right: 20px;
      max-width: 300px;
    }
  }

  &__error {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-size--24;
  }
}

@media (max-width: $window-size--1000) {
  .content {
    &__about-user {
      flex-direction: column;

      &__user {
        margin-bottom: 30px;
        max-width: 100%;
      }
    }
  }
}
</style>

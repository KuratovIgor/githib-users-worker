<template>
  <div class="user">
    <img class="user__photo" :src="user?.photo" />
    <div class="user__about">
      <div class="user__name">{{ user?.name }}</div>
      <div v-if="user" class="user__follow">
        <span>
          {{ user?.followers }} подписчиков * {{ user?.following }} подписок
        </span>
      </div>
      <div v-if="user && user?.location" class="user__location">
        Город: {{ user?.location }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { userType } from '@/types/githubType'

export default defineComponent({
  name: 'UserComponent',

  props: {
    user: Object as PropType<userType>,
  },
})
</script>

<style lang="scss" scoped>
.user {
  color: var(--el-color-info-dark-2);

  &__photo {
    margin-bottom: 10px;
    border-radius: 50%;
    width: 300px;
  }

  &__about {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__name {
    margin-bottom: 10px;
    font-size: $font-size--30;
    color: var(--el-color-danger);
  }

  &__follow {
    margin-bottom: 10px;
    font-size: $font-size--20;
  }

  &__location {
    font-size: $font-size--20;
  }
}

@media (max-width: $window-size--1000) {
  .user {
    display: flex;

    &__about {
      margin: 50px 0 0 50px;
    }
  }
}

@media (max-width: $window-size--720) {
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__about {
      margin: 0;
    }
  }
}
</style>

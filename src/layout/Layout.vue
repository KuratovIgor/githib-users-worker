<!--1665px-->
<template>
  <div class="layout">
    <header-component
      class="layout__header"
      @on-burger-click="handleBurgerClick"
    />
    <sidebar-component
      class="layout__sidebar"
      :class="
        isBurgerOpened ? 'layout__sidebar--opened' : 'layout__sidebar--closed'
      "
    />
    <div class="layout__content">
      <content-component calss="layout__content-main" />
    </div>
    <footer-component class="layout__footer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import ContentComponent from '@/components/ContentComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default defineComponent({
  name: 'Layout',

  components: {
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
  },

  setup() {
    let isBurgerOpened = ref<boolean>(false)

    const handleBurgerClick = (): void => {
      isBurgerOpened.value = !isBurgerOpened.value
    }

    return {
      isBurgerOpened,
      handleBurgerClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__header {
    z-index: 1;
  }

  &__sidebar {
    z-index: 0;
    transition: 0.5s linear;

    &--closed {
      position: absolute;
      top: -100%;
    }

    &--opened {
      position: relative;
      top: 0;
    }
  }

  &__content {
    z-index: 1;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    margin: 50px;
  }
}
</style>

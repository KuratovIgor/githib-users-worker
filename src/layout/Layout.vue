<template>
  <div class="layout">
    <header-component class="layout__header" />
    <div class="layout__content">
      <sidebar-component class="layout__content-sidebar" />
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
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__content {
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;
    margin: 50px;
    height: 100%;
  }
}
</style>

<template>
  <div class="layout">
    <div class="layout__content">
      <div class="layout__content-listing">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Layout',
})
</script>

<style lang="scss" scoped></style>

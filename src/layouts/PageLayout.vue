<template>
  <div id="pag-layout">
      <navbar />
    <n-layout position="relative">
    
      <root/>
      <footer-component/>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Root from './Root.vue'
import { NLayout } from 'naive-ui'
import Navbar from '@/components/NavBar.vue'
import FooterComponent from '@/components/Footer.vue'
export default defineComponent({
  name: 'PageLayout',
  components: {
    Root,
    NLayout,
    Navbar,
    FooterComponent
  },
})
</script>

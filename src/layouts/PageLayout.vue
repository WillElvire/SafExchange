<template>
  <div id="pag-layout">
   <n-layout position="absolute">
      <page-navbar />
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout
          content-style="padding: 1.75rem; background-color: #F3F4F6; min-height: 100%"
          :native-scrollbar="false"
        >
          <root />
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Root from './Root.vue'
import { NLayout} from 'naive-ui'

export default defineComponent({
  name: 'PageLayout',
  components: {
    Root,
    NLayout,
  },
})
</script>

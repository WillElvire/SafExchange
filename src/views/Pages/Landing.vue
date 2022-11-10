<template>
 <div>
    <n-button> button</n-button>
 </div>
</template>

<script lang="ts">

    import { defineComponent ,ref } from 'vue';
    import { NButton} from 'naive-ui';

    export default defineComponent({
        name: 'Landing',
        components : {
            NButton,
    
        
        }
    })
</script>
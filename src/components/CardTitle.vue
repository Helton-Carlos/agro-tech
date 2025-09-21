<template>
  <div>
    <h2 class="text-h4 text-bold q-pt-md q-pl-md">{{ title }}</h2>
    <p class="text-sm x q-pa-md">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = computed<string>(() => (route.meta.title as string) || '');
const subtitle = computed<string>(() => (route.meta.subtitle as string) || '');
</script>

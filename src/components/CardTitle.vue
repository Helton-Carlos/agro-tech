<template>
  <div>
    <h2 class="text-h4 text-bold q-pa-md">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const title = computed<string>(() => (route.meta.title as string) || '');
</script>

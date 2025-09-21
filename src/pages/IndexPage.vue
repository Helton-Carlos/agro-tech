<template>
  <q-page padding>
    <CardTitle />
    <q-card class="min-w-[200px] q-pa-md">
      <p>Numero de grãos</p>
      <ApexCharts type="bar" :options="options" :series="series" height="350" />
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { series, options } from 'src/utils/chartOptions';
import CardTitle from 'src/components/CardTitle.vue';
</script>

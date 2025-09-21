<template>
  <q-page padding>
    <CardTitle />

    <div :class="{ flex: widthCard }">
      <q-card class="q-pa-md q-ma-md">
        <p>Numero de grãos</p>
        <ApexCharts
          type="bar"
          :options="productOptions"
          :series="productSeries"
          :width="widthCard"
          height="350"
        />
      </q-card>

      <q-card class="q-pa-md q-ma-md">
        <p>Vendas</p>
        <ApexCharts
          type="pie"
          :options="salesOptions"
          :series="salesSeries"
          :width="widthCard"
          height="350"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { productSeries, salesSeries, productOptions, salesOptions } from 'src/chart/dashboard';
import CardTitle from 'src/components/CardTitle.vue';
import { isTablet } from 'src/composable/useBreakpoints';
import { computed } from 'vue';

const widthCard = computed(() => (isTablet.value ? '350' : '750'));
</script>

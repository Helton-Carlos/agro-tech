<template>
  <q-page padding>
    <CardTitle />

    <div :class="{ flex: widthCard }">
      <q-card class="q-pa-md q-ma-md">
        <p class="text-bold">Numero de grãos</p>
        <ApexCharts
          type="bar"
          :options="productOptions"
          :series="productSeries"
          :width="widthCard"
          height="350"
        />
      </q-card>

      <q-card class="q-pa-md q-ma-md">
        <p class="text-bold">Vendas</p>
        <ApexCharts
          type="pie"
          :options="salesOptions"
          :series="salesSeries"
          :width="widthCard"
          height="350"
        />
      </q-card>
    </div>

    <q-card class="q-ma-md">
      <q-card class="my-card">
        <q-card-section class="bg-teal text-white">
          <div class="text-h6">Créditos Agro</div>
        </q-card-section>

        <q-card-section>
          <p>
            Os créditos agropecuários são linhas de financiamento voltadas para produtores rurais,
            auxiliando na aquisição de insumos, máquinas e infraestrutura. Eles podem ser oferecidos
            por diversos bancos com condições especiais para o setor agrícola.
          </p>
          <p>
            Para saber mais sobre opções de crédito, consulte o
            <a href="https://www.banconordeste.gov.br/" target="_blank" class="text-teal">
              Banco do Nordeste </a
            >.
          </p>
        </q-card-section>

        <q-card-actions align="left">
          <q-btn label="Saiba Mais" color="teal" flat unelevated @click="openBancoNordeste" />
        </q-card-actions>
      </q-card>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { productSeries, salesSeries, productOptions, salesOptions } from 'src/chart/dashboard';
import CardTitle from 'src/components/CardTitle.vue';
import { isTablet } from 'src/composable/useBreakpoints';
import { computed } from 'vue';

const widthCard = computed(() => (isTablet.value ? '350' : '750'));

function openBancoNordeste() {
  window.open('https://www.bnb.gov.br/', '_blank');
}
</script>

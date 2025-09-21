<template>
  <q-page class="q-h-full q-pa-md">
    <div ref="mapContainer" class="map-container"></div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
import type { Lugar } from 'src/types/mapa';

const mapContainer = ref<HTMLDivElement | null>(null);
let map: maplibregl.Map | null = null;

const zoom = 5;

const lugares: Lugar[] = [
  { nome: 'São Paulo', coords: [-46.6333, -23.5505] },
  { nome: 'Rio de Janeiro', coords: [-43.2096, -22.9035] },
  { nome: 'Belo Horizonte', coords: [-43.9352, -19.9208] },
  { nome: 'Brasília', coords: [-47.8825, -15.7942] },
  { nome: 'Salvador', coords: [-38.5023, -12.9714] },
  { nome: 'Fortaleza', coords: [-38.5267, -3.7172] },
  { nome: 'Manaus', coords: [-60.0217, -3.1019] },
  { nome: 'Curitiba', coords: [-49.2643, -25.4284] },
];

const { appContext } = getCurrentInstance()!;
const maplibregl = appContext.config.globalProperties.$maplibre;

onMounted(() => {
  if (!mapContainer.value) return;

  map = new maplibregl.Map({
    container: mapContainer.value,
    style: 'https://demotiles.maplibre.org/style.json',
    center: [-47.8825, -15.7942],
    zoom,
  });

  map.addControl(new maplibregl.NavigationControl());

  lugares.forEach((lugar) => {
    if (map) {
      new maplibregl.Marker()
        .setLngLat(lugar.coords)
        .setPopup(new maplibregl.Popup().setText(`Estamos em: ${lugar.nome}`))
        .addTo(map);
    }
  });
});

onBeforeUnmount(() => {
  map?.remove();
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100vh;
}
</style>

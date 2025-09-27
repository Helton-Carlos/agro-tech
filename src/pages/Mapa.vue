<template>
  <q-page padding>
    <CardTitle />
    <div class="map-container" ref="mapContainer"></div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
import type { Lugar } from 'src/types/mapa';
import CardTitle from 'src/components/CardTitle.vue';

const mapContainer = ref<HTMLDivElement | null>(null);
let map: maplibregl.Map | null = null;
const zoom = 5;

const lugares: Lugar[] = [
  {
    nome: 'São Paulo',
    coords: [-46.6333, -23.5505],
    bairro: 'Centro',
    rua: 'Av. Paulista',
    numero: 1000,
  },
  {
    nome: 'Rio de Janeiro',
    coords: [-43.2096, -22.9035],
    bairro: 'Copacabana',
    rua: 'Av. Atlântica',
    numero: 1500,
  },
  {
    nome: 'Belo Horizonte',
    coords: [-43.9352, -19.9208],
    bairro: 'Savassi',
    rua: 'Rua da Bahia',
    numero: 200,
  },
  { nome: 'Brasília', coords: [-47.8825, -15.7942], bairro: 'Asa Sul', rua: 'SQS 308', numero: 1 },
  {
    nome: 'Salvador',
    coords: [-38.5023, -12.9714],
    bairro: 'Pelourinho',
    rua: 'Rua das Laranjeiras',
    numero: 45,
  },
  {
    nome: 'Fortaleza',
    coords: [-38.5267, -3.7172],
    bairro: 'Meireles',
    rua: 'Av. Beira Mar',
    numero: 3000,
  },
  {
    nome: 'Manaus',
    coords: [-60.0217, -3.1019],
    bairro: 'Centro',
    rua: 'Av. Eduardo Ribeiro',
    numero: 500,
  },
  {
    nome: 'Curitiba',
    coords: [-49.2643, -25.4284],
    bairro: 'Centro',
    rua: 'Rua XV de Novembro',
    numero: 100,
  },
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

  const legend = document.createElement('div');
  legend.innerHTML = `
    <div style="
      background:#fff;
      padding:10px;
      border-radius:6px;
      font-size:13px;
      line-height:1.4;
      box-shadow:0 2px 6px rgba(0,0,0,0.2);
      max-width:200px;
      margin:7px;
    ">
      <h4 style="margin:0 0 7px; font-size:14px; font-weight:bold;">Lugares</h4>
      <ul style="list-style:none; padding:0; margin:0;">
        ${lugares
          .map(
            (l) => `
            <li style="margin:4px 0; display:flex; align-items:center;">
              <span style="
                width:10px;
                height:10px;
                background:#008000;
                border-radius:50%;
                margin-right:6px;
              "></span>
              ${l.nome} - <small>${l.bairro}</small>
            </li>
          `,
          )
          .join('')}
      </ul>
    </div>
  `;

  map.addControl(
    {
      onAdd: () => legend,
      onRemove: () => legend.parentNode?.removeChild(legend),
    },
    'bottom-right',
  );

  lugares.forEach((lugar) => {
    new maplibregl.Marker()
      .setLngLat(lugar.coords)
      .setPopup(
        new maplibregl.Popup().setHTML(`
          <div style="font-size:14px; line-height:1.4;">
            <strong>Estamos em:</strong> ${lugar.nome}<br/>
            <span>Bairro: ${lugar.bairro}</span><br/>
            <span style="color:#555;">Rua: ${lugar.rua ?? ''}, N°: ${lugar.numero ?? ''}</span>
          </div>
        `),
      )
      .addTo(map!);
  });
});

onBeforeUnmount(() => {
  map?.remove();
});
</script>

<style scoped>
.map-container {
  width: 80%;
  height: 80vh;
  margin-left: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

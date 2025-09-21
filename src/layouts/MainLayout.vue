<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="flex items-center">
          <img src="/public/icons/agro-tech.png" alt="Logo Agro-Tech" width="40" height="40" />
          Agrotech
        </q-toolbar-title>

        <q-btn flat dense round icon="logout" aria-label="Logout" @click="logout" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/useUserStore';
import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';

const router = useRouter();
const { clearUser } = useUserStore();

const linksList: EssentialLinkProps[] = [
  {
    title: 'Dashboard',
    caption: 'Gráficos e estatísticas',
    icon: 'dashboard',
    link: '/',
  },
  {
    title: 'Mapa',
    caption: 'Mapa e estatísticas',
    icon: 'mapa',
    link: '/mapa',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function logout() {
  clearUser();

  void router.push('/login');
}
</script>

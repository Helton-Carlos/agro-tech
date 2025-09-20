<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <q-card class="q-pa-lg" style="min-width: 500px">
      <q-card-section>
        <h3 class="text-h5 q-mb-md text-black text-weight-bold">Login</h3>
        <q-form @submit.prevent="onLogin">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            :rules="[(val) => !!val || 'Informe o email']"
            filled
            class="q-mb-md"
          />
          <q-input
            v-model="password"
            label="Senha"
            type="password"
            :rules="[(val) => !!val || 'Informe a senha']"
            filled
            class="q-mb-md"
          />
          <q-btn
            label="Entrar"
            color="primary"
            type="submit"
            class="full-width"
            :loading="loading"
            no-caps
          />
        </q-form>
        <q-banner v-if="error" class="bg-red-2 text-red q-mt-md">
          {{ error }}
        </q-banner>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

function onLogin(): void {
  loading.value = true;
  error.value = '';

  loading.value = false;
  if (email.value === 'admin@teste.com' && password.value === '123456') {
    error.value = '';
    void router.push('/');
  } else {
    error.value = 'Email ou senha inválidos';
  }
}
</script>

<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <q-card class="q-pa-lg" style="min-width: 500px">
      <q-card-section>
        <h3 class="text-h5 q-mb-md text-black text-weight-bold">{{ title }}</h3>

        {{ hidden }}
        <q-form @submit.prevent="onLogin">
          <q-input
            v-model="login.email"
            label="Email"
            type="email"
            :rules="[(val) => !!val || 'Informe o email']"
            filled
            class="q-mb-md"
          />
          <q-input
            v-model="login.password"
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
import { computed, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '../stores/useUserStore';

const router = useRouter();
const route = useRoute();
const { setUser } = useUserStore();
const login = reactive({
  email: '',
  password: '',
});
const loading = ref<boolean>(false);
const error = ref<string>('');
const hidden = ref<string>('admin@test.com');

const title = computed<string>(() => {
  return (route.meta.title as string) || '';
});

function onLogin(): void {
  loading.value = true;
  error.value = '';

  const { email, password } = login;
  loading.value = false;

  if (email === 'admin@test.com' && password === 'admin@test.com') {
    error.value = '';

    setUser({
      email: login.email,
      password: login.password,
      token: 'tokeyn123456',
    });

    void router.push('/');
  } else {
    error.value = 'Email ou senha inválidos';
  }
}
</script>

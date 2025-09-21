<template>
  <div
    class="fullscreen text-center q-pa-md flex flex-center"
    :style="{
      backgroundImage:
        'url(https://cdn.pixabay.com/photo/2018/07/09/18/40/nature-3526840_960_720.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <q-card class="q-pa-lg" style="min-width: 500px">
      <q-card-section>
        <CardTitle />
        <p class="text-white">{{ hidden }}</p>
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
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/useUserStore';
import CardTitle from 'src/components/CardTitle.vue';

const router = useRouter();
const { setUser } = useUserStore();
const login = reactive({
  email: '',
  password: '',
});
const loading = ref<boolean>(false);
const error = ref<string>('');
const hidden = ref<string>('admin@test.com');

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

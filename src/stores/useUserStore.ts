import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = computed(() => !!user.value);

  function setUser(newUser: User) {
    user.value = newUser;

    localStorage.setItem('user', JSON.stringify(newUser));
  }

  function clearUser() {
    user.value = null;
  }

  return {
    user,
    isAuthenticated,
    setUser,
    clearUser,
  };
});

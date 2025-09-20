import { defineStore } from 'pinia';
import type { User } from '../types/user';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(JSON.parse(localStorage.getItem('user') || 'null'));

  const isAuthenticated = computed(() => !!user.value);

  function setUser(newUser: User) {
    user.value = newUser;

    localStorage.setItem('user', JSON.stringify(newUser));
  }

  function clearUser() {
    user.value = null;

    localStorage.removeItem('user');
  }

  return {
    user,
    isAuthenticated,
    setUser,
    clearUser,
  };
});

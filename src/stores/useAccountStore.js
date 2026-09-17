import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAccountStore = defineStore('account', () => {
  const selectedAccount = ref(null)

  function setSelectedAccount(account) {
    // TODO: store the selected account
    // Stretch: persist to localStorage and restore on refresh
  }

  return {
    selectedAccount,
    setSelectedAccount,
  }
})

<script setup>
import { storeToRefs } from 'pinia'
import { useAccountStore } from '../stores/useAccountStore'

const accountStore = useAccountStore()
const { selectedAccount } = storeToRefs(accountStore)
</script>

<template>
  <header class="header">
    <h1>Analytics Portal</h1>
    <p class="working-in">
      Working in: {{ selectedAccount ? selectedAccount.name : '—' }}
    </p>
  </header>
</template>

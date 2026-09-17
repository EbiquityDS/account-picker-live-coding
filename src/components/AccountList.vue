<script setup>
import { ref } from 'vue'
import { useAccountStore } from '../stores/useAccountStore'

const accountStore = useAccountStore()

// TODO: fetch GET /api/accounts and render the list
// TODO: loading, empty, and error states
// TODO: clicking an account should update the Pinia store
// Stretch: filter by account name

const accounts = ref([])
</script>

<template>
  <section>
    <!-- TODO: loading / empty / error -->
    <div class="account-list">
      <!-- TODO: render accounts (name + organisation) -->
      <p class="status">No accounts loaded yet.</p>
    </div>
  </section>
</template>

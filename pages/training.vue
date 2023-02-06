<template>
  <!-- Ariane -->
  <Breadcrumb />

  <section class="flex flex-col max-w-7xl items-center my-4 mx-auto sm:px-6 lg:px-8">
    <h2 class="text-3xl text-gunmetal mb-3">Nos formations</h2>

    <AllTraining />
    
    <SaveTime />

  </section>

</template>

<script setup lang="ts">
useHead({
  title: 'Carentica - Nos formations',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});
</script>
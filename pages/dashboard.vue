<template>
  <body class="h-full">
    <div class="min-h-full">
      <div class="bg-gray-800 pb-32">
        <!-- Ariane -->
        <Breadcrumb />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">

          <header class="py-10 flex flex-col items-center sm:flex-row gap-2 sm:justify-between">
            <div class="max-w-7xl">
              <h1 class="text-3xl font-bold text-white">Tableau de bord</h1>
            </div>

            <!-- Search bar -->
            <DashboardSearch />
          </header>
          
          <DashboardTabs />

        </div>
      </div>

      <!-- <DashboardMain /> -->

    </div>

  </body>
</template>

<script setup lang="ts">
useHead({
  title: 'Carentica - Tableaux de bord',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});

</script>
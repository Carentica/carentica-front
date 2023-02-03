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

          <!-- Mobile Navigation -->
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base sm:text-sm rounded-md">
              <option selected>Tableau de bord</option>

              <option>Statistiques</option>

              <option>Messagerie</option>

              <option>Profil</option>

              <option>Paramètre</option>
            </select>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden sm:block">
            <div class="border-b border-gray-700">
              <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                <nuxt-link to="/dashboard"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Tableau de bord </nuxt-link>

                <nuxt-link to="/statistics"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Statistiques </nuxt-link>

                <nuxt-link to="/messaging"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Messagerie </nuxt-link>

                <nuxt-link to="/course"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  aria-current="page"> Cours </nuxt-link>

                <nuxt-link to="/profile"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Profil </nuxt-link>

                <nuxt-link to="/setting"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  aria-current="page"> Paramètre </nuxt-link>
              </nav>
            </div>
          </div>

          <!-- Profil card -->
          <DashboardCardProfil />
        </div>
      </div>

      <main class="-mt-32">
        <div class="min-h-full">
          <main class="-mt-24 pb-8">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 class="sr-only">Profil</h1>
              <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                <!-- Left column -->
                <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                  <DashboardCardProfile />
                  <DashboardLastTraining />
                  <NewTrainingList />
                </div>
                <!-- Right column -->
                <DashboardAside />
              </div>
            </div>
          </main>
        </div>
      </main>

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
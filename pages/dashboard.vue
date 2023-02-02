<template>

  <body class="h-full">
    <div class="min-h-full">
      <div class="bg-gray-800 pb-32">
        <!-- Ariane -->
        <DashboardBreadcrumb />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">

          <header class="py-10 flex flex-col items-center sm:flex-row gap-2 sm:justify-between">
            <div class="max-w-7xl">
              <h1 class="text-3xl font-bold text-white">Tableau de bord</h1>
            </div>

            <!-- Search bar -->
            <DashboardSearch />
          </header>

          <!-- Navigation -->
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

          <!-- Profil card -->
          <DashboardCardProfil />
        </div>
      </div>

      <main class="-mt-32">
        <div class="min-h-full">
          <main class="-mt-24 pb-8">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 class="sr-only">Profil</h1>
              <!-- Main 3 column grid -->
              <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                <!-- Left column -->
                <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                  <!-- Welcome panel -->
                  <section aria-labelledby="Profil-overview-title">
                    <div class="rounded-lg bg-white overflow-hidden shadow">
                      <h2 class="sr-only" id="Profil-overview-title">Profil Overview</h2>
                      <div class="bg-white p-6">
                        <div class="sm:flex sm:items-center sm:justify-between">
                          <div class="sm:flex sm:space-x-5">
                            <div class="flex-shrink-0">
                              <img class="mx-auto h-20 w-20 rounded-full"
                                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="">
                            </div>
                            <div class="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                              <p class="text-sm font-medium text-gray-600">Bienvenue,</p>
                              <p class="text-xl font-bold text-gray-900 sm:text-2xl">Chelsea
                                Hagon</p>
                              <p class="text-sm font-medium text-gray-600">Human Resources
                                Manager</p>
                            </div>
                          </div>
                          <div class="mt-5 flex justify-center sm:mt-0">
                            <a href="setting_profil.html"
                              class="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                              Modifier le profil </a>
                          </div>
                        </div>
                      </div>
                      <div
                        class="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                        <div class="px-6 py-5 text-sm font-medium text-center">
                          <span class="text-gray-900">12</span>
                          <span class="text-gray-600">Formations terminé</span>
                        </div>

                        <div class="px-6 py-5 text-sm font-medium text-center">
                          <span class="text-gray-900">4</span>
                          <span class="text-gray-600">Formations en court</span>
                        </div>

                        <div class="px-6 py-5 text-sm font-medium text-center">
                          <span class="text-gray-900">80</span>
                          <span class="text-gray-600">cours vue</span>
                        </div>
                      </div>
                    </div>
                  </section>

                  
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
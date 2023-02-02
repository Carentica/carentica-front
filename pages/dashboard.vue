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
            <Search />
          </header>

          <!-- Navigation -->
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base sm:text-sm rounded-md">
              <option selected>Tableau de bord</option>

              <option>Statistiques</option>

              <option>Messagerie</option>

              <option>Profil</option>

              <option>Paramètre</option>
            </select>
          </div>

          <CardProfil />

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


                  <div>
                    <h2 class="text-3xl font-bold text-gunmetal py-4">Dernière formation lancée</h2>

                    <section class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
                      <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                          <img class="h-48 w-full object-cover" src="../assets/images/Blockchain.jpeg" alt="">
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                          <div class="flex-1">
                            <div class=" flex justify-between">
                              <a href="#" class="text-xl font-medium text-carmine"> Les bases
                                de la blockchain: </a>


                            </div>
                            <div class="text-sm flex justify-between">
                              <div class="text-sm flex flex-col">
                                <span class="flex justify-center items-center">
                                  <svg class="h-3 w-3 fill-black inline mr-1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                    <path
                                      d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                                  </svg>
                                  2heures
                                </span>
                                <span
                                  class="px-2 py-1 text-teal-800 text-xs font-medium bg-teal-100 rounded-full">Niveau
                                  1</span>
                              </div>
                              <span>22 Leçons</span>
                            </div>
                            <a href="#" class="block mt-2">
                              <p class="text-xl font-semibold text-gray-900">Titre leçon</p>
                              <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit
                                amet
                                consectetur adipisicing elit. Velit facilis asperiores porro
                                quaerat
                                doloribus, eveniet dolore. Adipisci tempora aut inventore
                                optio
                                animi., tempore temporibus quo laudantium.</p>
                            </a>
                          </div>

                          <div class="mt-4 w-full bg-gray-200 rounded-full">
                            <div
                              class="bg-teal-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                              style="width: 25%"> 25%</div>
                          </div>


                          <div class="mt-6 flex flex-row items-center justify-between">
                            <div class="flex flex-row items-center">
                              <div class="flex-shrink-0">
                                <a href="#">
                                  <span class="sr-only">Brenna Goyette</span>
                                  <img class="h-10 w-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="">
                                </a>
                              </div>
                              <div class="flex flex-col">
                                <div class="flex sm:items-center justify-between flex-col sm:flex-row">
                                  <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                      <a href="#" class="hover:underline"> Brenna
                                        Goyette
                                      </a>
                                    </p>
                                  </div>
                                </div>





                              </div>
                            </div>
                            <div class="flex flex-col md:flex-row gap-2">
                              <div class="mt-5 flex sm:mt-0">
                                <a href="#"
                                  class="flex w-full justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white bg-carmine hover:bg-gunmetal">
                                  Reprendre </a>
                              </div>

                              <div class="mt-5 flex sm:mt-0">
                                <a href="#"
                                  class="gap-2 flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                  <svg class="h-4 w-4 fill-black" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                    <path
                                      d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z" />
                                  </svg>
                                  Suivre </a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </section>
                  </div>

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
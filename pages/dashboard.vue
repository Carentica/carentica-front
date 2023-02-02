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
            <div class="pt-2 relative text-gray-600">
              <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search" name="search" placeholder="Search">
              <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                  viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                  width="512px" height="512px">
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
            </div>
          </header>

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


          <div class="hidden sm:block">
            <div class="border-b border-gray-700">
              <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                <a href="dashboard.html"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Tableau de bord </a>

                <a href="dashboard_stat.html"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Statistiques </a>

                <a href="messagerie.html"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Messagerie </a>

                <a href="cours.html"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  aria-current="page"> Cours </a>

                <a href="page404.html"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  aria-current="page"> page404</a>

                <a href="profilpublic.html"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                  Profil </a>

                <a href="setting_profil.html"
                  class="border-transparent text-white  hover:border-carmine whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  aria-current="page"> Paramètre </a>


              </nav>
            </div>
          </div>
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
                <div class="grid grid-cols-1 gap-4">
                  <!-- Announcements -->
                  <section aria-labelledby="announcements-title">
                    <div class="rounded-lg bg-white overflow-hidden shadow">
                      <div class="p-6">
                        <h2 class="text-base font-medium text-gray-900" id="announcements-title">
                          Annonces</h2>
                        <div class="flow-root mt-6">
                          <ul role="list" class="-my-5 divide-y divide-gray-200">
                            <li class="py-5">
                              <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                <h3 class="text-sm font-semibold text-gray-800">
                                  <a href="#" class="hover:underline focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    Office closed on July 2nd
                                  </a>
                                </h3>
                                <p class="mt-1 text-sm text-gray-600 line-clamp-2">Cum qui
                                  rem
                                  deleniti. Suscipit in dolor veritatis sequi aut. Vero ut
                                  earum
                                  quis deleniti. Ut a sunt eum cum ut repudiandae
                                  possimus. Nihil
                                  ex tempora neque cum consectetur dolores.</p>
                              </div>
                            </li>

                            <li class="py-5">
                              <div class="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                <h3 class="text-sm font-semibold text-gray-800">
                                  <a href="#" class="hover:underline focus:outline-none">
                                    <!-- Extend touch target to entire panel -->
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    New password policy
                                  </a>
                                </h3>
                                <p class="mt-1 text-sm text-gray-600 line-clamp-2">Alias
                                  inventore
                                  ut autem optio voluptas et repellendus. Facere totam
                                  quaerat
                                  quam quo laudantium cumque eaque excepturi vel.
                                  Accusamus maxime
                                  ipsam reprehenderit rerum id repellendus rerum. Culpa
                                  cum vel
                                  natus. Est sit autem mollitia.</p>
                              </div>
                            </li>

                          </ul>
                        </div>
                        <div class="mt-6">
                          <a href="#"
                            class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Voir plus </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div class="wrapper px-2 w-full">
                    <form action="" class="max-w-sm bg-gray-100 px-3 py-5 rounded shadow-lg my-10 m-auto">
                      <label for="contact" class="font-bold">Contacter un coach:</label>
                      <div class="flex flex-col gap-4">
                        <div class=" items-center bg-white border border-gray-100 rounded w-full">
                          <textarea type="text" id="contact" class="w-full focus:ring-carmine focus:border-carmine"
                            autocomplete="off"></textarea>
                        </div>
                        <button type="submit" class="text-white bg-carmine hover:bg-gunmetal px-4 py-2 rounded">
                          Envoyer
                        </button>
                      </div>
                    </form>
                  </div>

                </div>
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
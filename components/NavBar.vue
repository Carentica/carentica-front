<template>
  <!-- <nav>
    <nuxt-link to="/">Accueil</nuxt-link>
    <nuxt-link to="/about">A propos</nuxt-link>
  </nav> -->
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="border-b border-gray-200">
        <div class="flex items-center justify-between h-16 px-4 sm:px-0 relative">
          <div class="flex items-center h-full ">
            <a href="index.html" class="flex-shrink-0">
              <img class="h-12" src="images/carentica-logo-texte.svg" alt="Carentica">
            </a>
            <div class="hidden h-full md:block">
              <div class="ml-4 h-full flex items-baseline  md:space-x-3 lg:space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="dashboard.html"
                  class="h-full border-transparent text-gunmetal hover:border-carmine  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  aria-current="page">Tableau de bord</a>


                <a href="apropos.html"
                  class="h-full border-transparent text-gunmetal hover:border-carmine  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">À
                  propos</a>

                <a href="nosformation.html"
                  class="h-full border-transparent text-gunmetal hover:border-carmine  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Nos
                  formations</a>

                <a href="Lexique.html"
                  class="h-full border-transparent text-gunmetal hover:border-carmine  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Lexique</a>

                <a href="contact.html"
                  class="h-full border-transparent text-gunmetal hover:border-carmine  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Contact</a>
              </div>
            </div>

          </div>
          <div class="absolute inset-y-0 right-0 flex gap-2 items-center pr-1 sm:static sm:inset-auto  sm:pr-0">


            <!-- Profil dropdown -->
            <div class="hidden   md:flex lg:items-center lg:justify-end lg:inset-y-0 lg:left-0">
              <span class="inline-flex rounded-md shadow">
                <a href="inscription.html"
                  class="inline-flex items-center md:p-1 lg:p-2 border border-gunmetal md:text-sm lg:text-base font-medium rounded-md text-carmine bg-white hover:bg-gray-200">
                  Inscription </a>
              </span>
            </div>
            <div class="hidden  md:flex lg:items-center lg:justify-end lg:inset-y-0 lg:right-0">
              <span class="inline-flex rounded-md shadow">
                <a href="login.html"
                  class="inline-flex items-center md:p-1 lg:p-2  md:text-sm lg:text-base font-medium rounded-md text-white bg-carmine hover:bg-gunmetal">
                  Connexion </a>
              </span>
            </div>
          </div>
          <div class="hidden ">
            <div class="ml-4 flex items-center md:ml-6">
              <button type="button" class="bg-white p-1 text-gray-700 rounded-full hover:text-gray-900 ">
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <a href="messagerie.html" class="bg-white p-1 fill-gray-700 rounded-full hover:fill-gray-900 ">
                <span class="sr-only">View notifications</span>
                <!-- Heroicon name: outline/bell -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
                </svg>
              </a>

              <!-- Profil dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button id="profilMenu user-menu-button" type="button"
                    class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm " aria-expanded="false"
                    aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="">
                  </button>
                </div>

                <div id="profilList"
                  class="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                  role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a href="profilpublic.html" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                    tabindex="-1" id="user-menu-item-0">Profil</a>

                  <a href="setting_profil.html" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                    tabindex="-1" id="user-menu-item-1">Paramètre</a>

                  <a href="index.html" class="block px-4 py-2 text-sm text-carmine" role="menuitem" tabindex="-1"
                    id="user-menu-item-2">Déconnexion</a>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button id="btnMenu" type="button"
              class="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-white"
              aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!--
                        Heroicon name: outline/menu
      
                        Menu open: "hidden", Menu closed: "block"
                      -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!--
                        Heroicon name: outline/x
      
                        Menu open: "block", Menu closed: "hidden"
                      -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="hidden border-b border-gray-700 md:hidden" id="mobile-menu">
      <div class="px-2 py-3 space-y-1 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="dashboard.html"
          class="border-transparent text-gunmetal hover:bg-gunmetal hover:text-white hover:border-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          aria-current="page">Tableau de bord</a>

        <a href="apropos.html"
          class="border-transparent text-gunmetal hover:bg-gunmetal hover:text-white hover:border-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium">À
          propos</a>

        <a href="nosformation.html"
          class="border-transparent text-gunmetal hover:bg-gunmetal hover:text-white hover:border-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Nos
          formations</a>

        <a href="Lexique.html"
          class="border-transparent text-gunmetal hover:bg-gunmetal hover:text-white hover:border-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Lexique</a>

        <a href="contact.html"
          class="border-transparent text-gunmetal hover:bg-gunmetal hover:text-white hover:border-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact</a>
      </div>
      <div class=" pt-4 pb-3 border-t border-gray-700">
        <div class="flex  items-center gap-1 justify-center ">
          <span class="inline-flex rounded-md shadow">
            <a href="inscription.html"
              class="inline-flex items-center px-2 py-2 border border-gunmetal text-base font-medium rounded-md text-carmine bg-white hover:bg-gray-200">
              Inscription </a>
          </span>
          <span class="inline-flex rounded-md shadow">
            <a href="login.html"
              class="inline-flex items-center px-2 py-2  text-base font-medium rounded-md text-white bg-carmine hover:bg-gunmetal">
              Connexion </a>
          </span>
        </div>
        <div class="hidden  items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="">
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-gray-900">Tom Cook</div>
            <div class="text-sm font-medium leading-none text-gray-700">tom@example.com</div>
          </div>
          <button type="button"
            class="ml-auto flex-shrink-0 bg-white p-1 text-gray-700 rounded-full hover:text-gray-900">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <a href="messagerie.html" class="bg-white p-1 fill-gray-700 rounded-full hover:fill-gray-900 ">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
            </svg>
          </a>
        </div>

        <div class="hidden mt-3 px-2 space-y-1">
          <a href="profilpublic.html"
            class="border-transparent text-gunmetal hover:bg-gunmetal hover:text-white hover:border-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Profil</a>

          <a href="setting_profil.html"
            class="border-transparent text-gunmetal hover:bg-gunmetal hover:text-white hover:border-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Parmètres</a>

          <a href="index.html"
            class="border-transparent text-gunmetal hover:bg-gunmetal hover:text-white hover:border-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Déconnexion</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">

</script>
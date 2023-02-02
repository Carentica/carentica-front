<template>
  <!-- <nav>
    <nuxt-link to="/">Accueil</nuxt-link>
    <nuxt-link to="/about">A propos</nuxt-link>
  </nav> -->
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="-ml-2 mr-2 flex items-center md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-carmine">
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-12 w-auto" src="../assets/images/carentica-logo-texte.svg"
              alt="Workflow" />
            <img class="hidden lg:block h-12 w-auto"
              src="../assets/images/carentica-logo-texte.svg" alt="Workflow" />
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <!-- Current: "border-carmine text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a href="#"
              class="border-carmine text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Dashboard
            </a>
            <a href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Team
            </a>
            <a href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Projects
            </a>
            <a href="#"
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Calendar
            </a>
          </div>
        </div>

        <div class="hidden md:flex items-center">
          <div class="flex-shrink-0">

            <button type="button"
              class="inline-flex items-center p-2 lg:p-2 border border-gunmetal md:text-sm lg:text-base font-medium rounded-md text-carmine bg-white hover:bg-gray-200">
              <span>Inscription</span>
            </button>

            <button type="button"
              class="inline-flex items-center p-2 ml-3 lg:p-2 md:text-sm lg:text-base font-medium rounded-md text-white bg-carmine hover:bg-gunmetal">
              <span>Connexion</span>
            </button>

          </div>
        </div>

      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <!-- Current: "bg-indigo-50 border-carmine text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <a href="#"
          class="bg-indigo-50 border-carmine text-carmine block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">Dashboard</a>
        <a href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">Team</a>
        <a href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">Projects</a>
        <a href="#"
          class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">Calendar</a>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4 sm:px-6">

            <button type="button"
              class="inline-flex items-center p-2 border border-gunmetal md:text-sm lg:text-base font-medium rounded-md text-carmine bg-white hover:bg-gray-200">
              <span>Inscription</span>
            </button>

            <button type="button"
              class="inline-flex items-center p-2 ml-2 font-medium rounded-md text-white bg-carmine hover:bg-gunmetal">
              <span>Connexion</span>
            </button>

        </div>

      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { PlusIcon } from '@heroicons/vue/solid'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    PlusIcon,
    XIcon,
  },
};
</script>
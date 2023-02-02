<template>
  <!-- Ariane -->
  <Breadcrumb />
  
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 mb-6">
    <div class="flex flex-col sm:flex-row sm:justify-between items-center mt-4">
      <h1 class="text-3xl font-bold">Lexique</h1>

      <div class="w-6/12">
        <div class="relative mt-1">
          <input id="combobox" type="text"
            class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm sm:text-sm focus:ring-carmine focus:border-carmine"
            role="combobox" aria-controls="options" aria-expanded="false">
          <button type="button" class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2">
            <!-- Heroicon name: solid/selector -->
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>

          <ul
            class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm hidden"
            id="options" role="listbox">
            <!--
                Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.
        
                Active: "text-white bg-indigo-600", Not Active: "text-gray-900"
              -->
            <li class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="option-0" role="option"
              tabindex="-1">
              <!-- Selected: "font-semibold" -->
              <span class="block truncate">Leslie Alexander</span>

              <!--
                  Checkmark, only display for selected option.
        
                  Active: "text-white", Not Active: "text-indigo-600"
                -->
              <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                <!-- Heroicon name: solid/check -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </li>

            <!-- More items... -->
          </ul>
        </div>
      </div>
    </div>





    <section aria-labelledby="quick-links-title">
      <h3 class="text-2xl font-bold pl-2">A</h3>

      <div
        class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <h2 class="sr-only" id="quick-links-title">Quick links</h2>

        <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Request time off
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="sm:rounded-tr-lg relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Benefits
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Schedule a one-on-one
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Payroll
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="sm:rounded-bl-lg relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Submit an expense
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6">
          <div>
          </div>
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Training
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>
      </div>
      <div
        class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <h2 class="sr-only" id="quick-links-title">Quick links</h2>

        <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Request time off
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="sm:rounded-tr-lg relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Benefits
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Schedule a one-on-one
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Payroll
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="sm:rounded-bl-lg relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Submit an expense
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6">
          <div>
          </div>
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Training
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>
      </div>
    </section>



    <section aria-labelledby="quick-links-title">
      <h3 class="text-2xl font-bold pl-2 mt-2">B</h3>
      <div
        class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <h2 class="sr-only" id="quick-links-title">Quick links</h2>

        <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Request time off
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="sm:rounded-tr-lg relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Benefits
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Schedule a one-on-one
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Payroll
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="sm:rounded-bl-lg relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Submit an expense
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6">
          <div>
          </div>
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Training
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>
      </div>
      <div
        class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        <h2 class="sr-only" id="quick-links-title">Quick links</h2>

        <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Request time off
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="sm:rounded-tr-lg relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Benefits
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Schedule a one-on-one
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Payroll
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="sm:rounded-bl-lg relative group bg-white p-6">
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Submit an expense
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>

        <div class="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6">
          <div>
          </div>
          <div>
            <h3 class="text-lg font-medium">
              <a href="#">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true"></span>
                Training
              </a>
            </h3>
            <p class="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod
              et
              dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
          </div>
        </div>
      </div>
    </section>
  </div>


  <a href="#" class="fixed bottom-8 right-4 hidden lg:block z-10">
    <svg class="p-1 h-8 w-8 fill-gray-500 rounded-full bg-tranparent hover:bg-gray-700"
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
      <path
        d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
    </svg>
  </a>

</template>

<script setup lang="ts">
useHead({
  title: 'Carentica - Lexique',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});
</script>
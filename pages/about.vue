<template>
  <!-- Ariane -->
  <Breadcrumb />
  
  <div class="relative bg-white py-16 sm:py-24">
    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
      <div class="relative sm:py-16 lg:py-0">
        <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
          <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
          <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392"
            fill="none" viewBox="0 0 404 392">
            <defs>
              <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
          </svg>
        </div>
        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
          <img src="../assets/images/pexels-michael-burrows-7129007.jpeg">
        </div>
      </div>

      <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
        <!-- Content area -->
        <div class="pt-12 sm:pt-16 lg:pt-20">
          <h2 class="text-3xl text-gunmetal font-extrabold tracking-tight sm:text-4xl">On a mission to empower
            teams</h2>
          <div class="mt-6 text-gray-500 space-y-6">
            <p class="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
              consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus
              faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
            <p class="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis
              elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec
              laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis
              elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec
              laoreet quam urna.</p>
            <p class="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis
              tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis
              vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim
              fermentum lacus in. Viverra.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Carentica - A propos',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});
</script>
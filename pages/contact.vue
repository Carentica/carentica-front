<template>
  <!-- Ariane -->
  <Breadcrumb />

  <div class="relative">
    <div class="hidden sm:block lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <video class="h-56  w-full object-cover object-center lg:absolute lg:h-full"
          src="../assets/videos/production_ID_5137610.mp4" type="video/mp4" autoplay muted loop />
      </div>
    </div>
    <div class="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
      <div class="lg:pr-8">
        <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-gunmetal">Une question, une suggestion ?
          </h2>
          <p class="mt-4 text-lg text-gunmetal sm:mt-3">Si vous souhaitez prendre contact avec nous, vous pouvez
            utiliser le formulaire ci-dessous. Vous pouvez également nous contacter par mail ou par téléphone via les
            coordonnées en bas de page.
          </p>
          <form action="#" method="POST" class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label for="first-name" class="block text-sm font-medium text-gunmetal">Prénom</label>
              <div class="mt-1">
                <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                  class="block w-full shadow-sm sm:text-sm focus-visible:ring-carmine focus-visible:border-carmine border-gray-300 rounded-md border-2">
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-medium text-gunmetal">Nom</label>
              <div class="mt-1">
                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                  class="block w-full shadow-sm sm:text-sm focus:ring-carmine  focus:border-carmine border-gray-300 rounded-md border-2">
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm font-medium text-gunmetal">E-mail</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email"
                  class="block w-full shadow-sm sm:text-sm focus:ring-carmine  focus:border-carmine border-gray-300 rounded-md border-2">
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="phone" class="block text-sm font-medium text-gunmetal">Numéro de
                  téléphone</label>
                <span id="phone-description" class="text-sm text-gunmetal">Optionnel
                </span>
              </div>
              <div class="mt-1">
                <input type="text" name="phone" id="phone" autocomplete="tel" aria-describedby="phone-description"
                  class="block w-full shadow-sm sm:text-sm focus:ring-carmine  focus:border-carmine border-gray-300 rounded-md border-2">
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex justify-between">
                <label for="how-can-we-help" class="block text-sm font-medium text-gunmetal">Comment
                  pouvons-nous vous aider?</label>
                <span id="how-can-we-help-description" class="text-sm text-gunmetal">Max. 500
                  caractères</span>
              </div>
              <div class="mt-1">
                <textarea id="how-can-we-help" name="how-can-we-help" aria-describedby="how-can-we-help-description"
                  rows="4"
                  class="block w-full shadow-sm sm:text-sm focus:ring-carmine  focus:border-carmine border border-gray-300 rounded-md"></textarea>
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="how-did-you-hear-about-us" class="block text-sm font-medium text-gunmetal">Comment avez-vous
                entendu parler de
                nous?</label>
              <div class="mt-1">
                <input type="text" name="how-did-you-hear-about-us" id="how-did-you-hear-about-us"
                  class="shadow-sm focus:ring-carmine  focus:border-carmine block w-full sm:text-sm border-gray-300 rounded-md border-2">
              </div>
            </div>
            <div class="text-right sm:col-span-2">
              <button type="submit"
                class="text-white inline-flex justify-center w-full sm:w-1/2 py-2 px-4 bg-carmine hover:bg-gunmetal shadow-sm text-sm font-medium rounded-md">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Carentica - Contact',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});
</script>
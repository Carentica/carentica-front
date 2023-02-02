<template>
  <!-- Ariane -->
  <Breadcrumb />

  <section class="flex flex-col max-w-7xl items-center my-4 mx-auto sm:px-6 lg:px-8">
    <h2 class="text-3xl text-gunmetal mb-3">Nos formations</h2>

    <AllTraining />

    <!-- save time section -->
    <div class="  overflow-hidden py-20">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <!-- point -->
        <svg class="hidden lg:block absolute right-full transform translate-x-1/2" width="404" height="784" fill="none"
          viewBox="0 0 404 784" aria-hidden="true">
          <defs>
            <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>

        <div class="relative ">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-2">
              <h3 class="text-2xl font-extrabold text-gunmetal tracking-tight sm:text-3xl">Gagnez du temps
              </h3>
              <p class="mt-3 text-lg text-gray-500"> Économisez des heures de recherches avec un programme
                détaillé et progressif conçu par notre équipe pédagogique.</p>

              <dl class="mt-10 space-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-carmine">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-white w-8">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                          d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z" />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-gunmetal"> Évitez les pièges</p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">Assurez-vous d’avoir de solides bases
                    avant de vous lancer dans le monde sans pitié des cryptomonnaies..</dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md text-white bg-carmine">
                      <!-- Heroicon name: outline/mail -->
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fill-white w-8">
                        <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path
                          d="M152.1 38.16C161.9 47.03 162.7 62.2 153.8 72.06L81.84 152.1C77.43 156.9 71.21 159.8 64.63 159.1C58.05 160.2 51.69 157.6 47.03 152.1L7.029 112.1C-2.343 103.6-2.343 88.4 7.029 79.03C16.4 69.66 31.6 69.66 40.97 79.03L63.08 101.1L118.2 39.94C127 30.09 142.2 29.29 152.1 38.16V38.16zM152.1 198.2C161.9 207 162.7 222.2 153.8 232.1L81.84 312.1C77.43 316.9 71.21 319.8 64.63 319.1C58.05 320.2 51.69 317.6 47.03 312.1L7.029 272.1C-2.343 263.6-2.343 248.4 7.029 239C16.4 229.7 31.6 229.7 40.97 239L63.08 261.1L118.2 199.9C127 190.1 142.2 189.3 152.1 198.2V198.2zM224 96C224 78.33 238.3 64 256 64H480C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H256C238.3 128 224 113.7 224 96V96zM224 256C224 238.3 238.3 224 256 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H256C238.3 288 224 273.7 224 256zM160 416C160 398.3 174.3 384 192 384H480C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z" />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-gunmetal"> Progression balisée </p>
                  </dt>
                  <div class="mt-2 ml-16 text-base text-gray-500">Nos programmes sont conçus pour avoir
                    la courbe d’apprentissage la plus douce et linéaire possible.</div>
                </div>
              </dl>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784"
                height="404" fill="none" viewBox="0 0 784 404" aria-hidden="true">
                <defs>
                  <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x="0" y="0" width="20" height="20"
                    patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="784" height="404" fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
              </svg>
              <img class="relative mx-auto" width="490" src="../assets/images/photo_page_login.jpeg" alt="">
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
useHead({
  title: 'Carentica - Nos formations',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});
</script>
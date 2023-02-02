<template>
    <div class="bg-white">
        <!-- Header -->
        <div class="relative pb-32 bg-gunmetal">
            <div class="absolute inset-0">
                <img class="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
                    alt="">
                <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true"></div>
            </div>
            <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Accompagné</h1>
                <p class="mt-6 max-w-3xl text-xl text-gray-300">Chez Carentica nous croyons profondément au mentorat.
                    Tout au long de votre parcours de <strong>formation crypto</strong>, notre équipe sera à vos côtés
                    pour répondre à
                    toutes vos questions. Vous serez entouré d’une communauté active animée par nos coachs.</p>
            </div>
        </div>

        <!-- Overlapping cards -->
        <section class="-mt-32 max-w-7xl mx-auto relative z-10  px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
            <h2 class="sr-only" id="contact-heading">Contact us</h2>
            <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                    <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div
                            class="absolute top-0 p-5 inline-block bg-carmine rounded-xl shadow-lg transform -translate-y-1/2">
                            <!-- Heroicon name: outline/phone -->
                            <svg class="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">Progressez à votre rythme</h3>
                        <p class="mt-4 text-base text-gray-500">Les programmes de <strong>formation crypto</strong> sont
                            conçus pour pouvoir
                            être suivi quand vous le décidez. Vous pouvez reprendre là où vous vous êtes arrêté lors de
                            votre dernière séance d’apprentissage.</p>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                        <nuxt-link to="/contact" class="text-base font-medium text-gunmetal">Contactez-nous<span
                                aria-hidden="true">
                                &rarr;</span></nuxt-link>
                    </div>
                </div>

                <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                    <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div
                            class="absolute top-0 p-5 inline-block bg-carmine rounded-xl shadow-lg transform -translate-y-1/2">
                            <!-- Heroicon name: outline/support -->
                            <svg class="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">Accès illimité à vie</h3>
                        <p class="mt-4 text-base text-gray-500">Bénéficiez d’un accès sans limite de temps à votre
                            parcours de <strong>formation blockchain</strong>, à notre matériel pédagogique ainsi qu’aux
                            outils de
                            communication de notre <strong>communauté crypto</strong>.</p>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                        <nuxt-link to="/contact" class="text-base font-medium text-gunmetal">Contactez-nous<span
                                aria-hidden="true">
                                &rarr;</span></nuxt-link>
                    </div>
                </div>

                <div class="flex flex-col bg-white rounded-2xl shadow-xl">
                    <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div
                            class="absolute top-0 p-5 inline-block bg-carmine rounded-xl shadow-lg transform -translate-y-1/2">
                            <!-- Heroicon name: outline/newspaper -->
                            <svg class="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                                <path
                                    d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-medium text-gray-900">Contenu de haute qualité</h3>
                        <p class="mt-4 text-base text-gray-500">Tout notre matériel pédagogique est garantie de haute
                            qualité, avec notamment des vidéos en qualité UHD 4K, une interface soignée et un parcours
                            balisé pour faciliter votre <strong>initiation à la crypto</strong>.</p>
                    </div>
                    <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                        <nuxt-link to="/contact" class="text-base font-medium text-gunmetal">Contactez-nous<span
                                aria-hidden="true">
                                &rarr;</span></nuxt-link>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
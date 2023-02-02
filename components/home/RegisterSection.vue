<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div class="bg-gunmetal rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                    <div class="lg:self-center">
                        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                            <span class="block">Démarrez votre parcours de <strong>formation crypto</strong>.</span>
                        </h2>
                        <p class="mt-4 text-lg leading-6 text-white">Aucun pré-requis nécessaire pour vous lancer dans
                            le monde des <strong>crypomonnaies</strong>, il vous suffit d’un email valide pour valider
                            votre inscription
                            gratuitement.</p>

                        <nuxt-link to="/siginIn"
                            class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-carmine hover:bg-indigo-50">
                            Inscription gratuite
                        </nuxt-link>
                    </div>
                </div>
                <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                    <img class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                        src="../../assets/images/dashboard_screen.png" alt="dashboard">
                </div>
            </div>
        </div>
    </div>
</template>
<template>
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
</template>
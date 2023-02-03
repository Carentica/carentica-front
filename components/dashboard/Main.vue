<template>
    <!-- Profil card -->
    <DashboardCardProfil />

    <main class="-mt-32">
        <div class="min-h-full">
            <main class="-mt-24 pb-8">
                <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 class="sr-only">Profil</h1>
                    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
                        <!-- Left column -->
                        <div class="grid grid-cols-1 gap-4 lg:col-span-2">
                            <DashboardCardProfile />
                            <DashboardLastTraining />
                            <NewTrainingList />
                        </div>
                        <!-- Right column -->
                        <DashboardAside />
                    </div>
                </div>
            </main>
        </div>
    </main>
    
</template>
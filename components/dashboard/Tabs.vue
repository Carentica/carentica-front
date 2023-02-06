<template>
    <div>
        <!-- Tabs mobile -->
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <select id="tabs" name="tabs"
                class="block w-full pl-3 pr-10 py-2 text-base border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
            </select>
        </div>

        <!-- Tabks desktop -->
        <div class="hidden sm:block">
            <div class="border-b border-gray-500">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                    <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
                        :class="['border-transparent text-white hover:border-carmine', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
                        :aria-current="tab.current ? 'page' : undefined">
                        {{ tab.name }}
                    </a>
                </nav>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
const tabs = [
    { name: 'Tableau de bord', href: '#', current: true },
    { name: 'Statistiques', href: '#', current: false },
    { name: 'Messagerie', href: '#', current: false },
    { name: 'Profil', href: '#', current: false },
    { name: 'Paramètre', href: '#', current: false },
];

export default {
    setup() {
        return {
            tabs,
        }
    },
};
</script>
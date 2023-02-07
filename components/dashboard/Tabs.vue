<template>
    <div>
        <v-tabs>
            <v-tab v-for="(tab, index) in tabs" v-bind:key="index" @click="selectedTab = index">
                {{ tab.title }}
            </v-tab>
            <template v-for="(tab, index) in tabs">
                <component :is="tab.component" v-if="selectedTab === index" />
            </template>
        </v-tabs>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            selectedTab: 0,
            tabs: [
                {   
                    title: 'Tableau de bord',
                    component: 'DashboardMain'
                },
                {
                    title: 'Statistiques',
                    component: 'DashboardMain'
                },
                {
                    title: 'Messagerie',
                    component: 'DashboardMain'
                },
                {
                    title: 'Profil',
                    component: 'DashboardMain'
                },
                {
                    title: 'Paramètre',
                    component: 'DashboardMain'
                },
            ]
        }
    }
};
</script>
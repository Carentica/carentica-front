<template>
    <div>
        <h2 class="text-3xl font-bold text-gunmetal py-4">Nouvelles formations</h2>
        
        <div class="relative">
            <div class="relative max-w-7xl mx-auto">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">  
                    <div v-for="training in trainings" :key="training.title"
                        class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div class="flex-shrink-0">
                            <img class="h-48 w-full object-cover" :src="training.imageUrl" alt="" />
                        </div>
                        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div class="flex-1">
                                <p class="text-sm font-medium text-indigo-600">
                                    <a :href="training.category.href" class="hover:underline">
                                        {{ training.category.name }}
                                    </a>
                                </p>
                                <a :href="training.href" class="block mt-2">
                                    <p class="text-xl font-semibold text-gray-900">
                                        {{ training.title }}
                                    </p>
                                    <p class="mt-3 text-base text-gray-500">
                                        {{ training.description }}
                                    </p>
                                </a>
                            </div>
                            <div class="mt-6 flex items-center">
                                <div class="flex-shrink-0">
                                    <a :href="training.author.href">
                                        <span class="sr-only">{{ training.author.name }}</span>
                                        <img class="h-10 w-10 rounded-full" :src="training.author.imageUrl" alt="" />
                                    </a>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">
                                        <a :href="training.author.href" class="hover:underline">
                                            {{ training.author.name }}
                                        </a>
                                    </p>
                                    <div class="flex space-x-1 text-sm text-gray-500">
                                        <time :datetime="training.datetime">
                                            {{ training.date }}
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> {{ training.readingTime }} read </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
const trainings = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '4 min',
        author: {
            name: 'Brenna Goyette',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export default {
    setup() {
        return {
            trainings,
        }
    },
}
</script>
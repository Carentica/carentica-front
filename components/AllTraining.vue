<template>
    <div class="relative max-w-7xl mx-auto">
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div v-for="training in trainings" :key="training.title"
                class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img class="h-48 w-full object-cover" :src="training.imageUrl" alt="" />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div class="flex flex-1 flex-col justify-between">
                        <p class="text-sm font-medium text-carmine">
                            <a :href="training.category.href" class="hover:underline">
                                {{ training.category.name }}
                            </a>
                        </p>
                        <a :href="training.href" class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">
                                    {{ training.title }}
                                </p>

                                <span 
                                    class="px-2 py-1 text-xs font-medium rounded-full" 
                                    v-bind:style="{ 'background-color': training.tag.color, 'color': training.tag.text }"
                                > 
                                Niveau {{ training.tag.level }}
                                </span>
                                
                                <p class="mt-3 text-base text-gray-500 text-justify">
                                    {{ training.description }}
                                </p>
                        </a>

                        <div class="mt-5 flex justify-center py-4 sm:mt-0">
                            <a href="cursus.html"
                                class="flex justify-center items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-carmine hover:bg-gunmetal">
                                Voir cursus de la formation</a>
                        </div>

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
</template>

<script>
const trainings = [
    {
        title: 'Boost your conversion rate',
        tag : {
            level: 3,
            color: '#fecaca',
            text: '#991b1b',
        },
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
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
        tag : {
            level: 1,
            color: '#99F6E4',
            text: '#22716A',
        },
        href: '#',
        category: { name: 'Video', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
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
    {
        title: 'Improve your customer experience',
        tag : {
            level: 2,
            color: '#BAE6FD',
            text: '#3355B8',
        },
        href: '#',
        category: { name: 'Case Study', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '11 min',
        author: {
            name: 'Daniela Metz',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
];

export default {
    setup() {
        return {
            trainings,
        }
    },
};
</script>
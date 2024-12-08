<script setup lang="ts">
const links = ref([
    {
        to: '/dashboard',
        text: 'Dashboard',
    },
]);
</script>

<template>
    <div class="h-screen">
        <div class="h-screen w-full">
            <div class="grid h-screen grid-cols-12">
                <div class="col-span-3">
                    <div class="container px-2">
                        <ul class="menu w-full">
                            <li v-for="(dataLink, index) in links" :key="index">
                                <NuxtLink
                                    :to="dataLink.to"
                                    active-class="bg-primary text-white"
                                    class="hover:bg-primary/75">
                                    {{ dataLink.text }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-9 h-full">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

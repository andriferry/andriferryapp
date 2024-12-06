<script setup lang="ts">
definePageMeta({
    title: 'Blog',
});
const route = useRoute();

useHead({
    titleTemplate: (titleChunk) => {
        return `${titleChunk} - ${route.meta.title}`;
    },
});
</script>

<template>
    <div class="pt-36 min-h-screen overflow-hidden relative pb-0">
        Hello this is Blogs Pages
    </div>
</template>

<style scoped></style>

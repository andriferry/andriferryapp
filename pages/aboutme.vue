<script setup lang="ts">
definePageMeta({
    title: 'About Me',
});
const route = useRoute();

useHead({
    titleTemplate: (titleChunk) => {
        return `${titleChunk} - ${route.meta.title}`;
    },
});
</script>

<template>
    <Wrapper class="pt-16 lg:pt-36">
        <Container class="bg-red-500"> Hello </Container>
    </Wrapper>
</template>

<style scoped></style>

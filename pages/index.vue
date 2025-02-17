<script setup lang="ts">
const route = useRoute()
definePageMeta({ title: 'Home' })

useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} - ${route.meta.title}`
  },
})
</script>

<template>
  <div>
    <Hero />

    <Service />

    <LatestProject />

    <AboutMe />
  </div>
</template>

<style>
.tooltip::before {
  @apply bg-white shadow-xl font-semibold text-accent;
}

.tooltip::after {
  @apply hidden;
}
</style>

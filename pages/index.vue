<script setup lang="ts">
const description = ref('Highly skilled Full Stack developer with 5 years of experience in software development.')

useSeoMeta({
  titleTemplate: '%s - %siteName',
  title: 'Home',
  // og title is not effected by titleTemplate, we can use template params here if we need
  ogTitle: '%s',

  twitterTitle: '%s',
  // ogImage: 'http://localhost:3000/__og-image__/image/og.png',

  description: description.value,
  ogDescription: description.value,
  // explicit twitter title is only needed when we want to display something just for X
  twitterDescription: description.value,
})

defineOgImageComponent('Default', {
  title: 'Hey There, it\'s andri',
  description: description.value,
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

<script setup lang="ts"></script>

<template>
    <div>
        <Hero />

        <Service />

        <LatestProject />

        <AboutMe />

        <!-- <div>Latest Project</div>

        <div>Service</div>

        <div>Testimonial</div>

        <div>Resume / About me</div>

        <div>Contact me</div>

        <div>Blog</div> -->
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

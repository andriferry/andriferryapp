<script setup lang="ts"></script>

<template>
    <div>
        <Hero />

        <Service />

        <LatestProject />

        <AboutMe />


        <!-- This is Blogs 3 -->

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

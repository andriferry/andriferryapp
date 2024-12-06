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
    <div>
        <WrapperPages>
            <Container>
                <article
                    class="prose max-w-none text-justify lg:text-start !w-full">
                    <h1
                        class="font-semibold text-lg lg:text-3xl text-info tracking-wide leading-normal lg:leading-relaxed">
                        I am a freelencer, Full Stack Developer , Based in
                        Indonesia. Successful Remote work with client around the
                        world more than 5 years of professional experience &
                        with lots of Satisfied Customers.
                    </h1>

                    <!-- Stats Here -->

                    <Stats />

                    <!-- <h1
                        class="font-semibold text-lg lg:text-3xl text-info tracking-wide leading-normal lg:leading-relaxed">
                        Work with passion, diligence, and integrity no matter
                        how big or small the project is that is precisely what
                        you need when you hire a developer. Not someone who is
                        solely focused on the budget, but rather someone who
                        cares deeply about the VALUE they provide.
                    </h1> -->
                </article>

                <!-- Almost 5 years i was spent more than 3000 hours at
                        Upwork and working with difference around the world. I'm
                        always interested in doing random things on my desk and
                        build something -->
            </Container>
        </WrapperPages>
    </div>
</template>

<style scoped></style>

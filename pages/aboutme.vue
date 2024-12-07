<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';

definePageMeta({
    title: 'About Me',
});
const route = useRoute();

const { workHistory, allTestimonials } = useAboutMe();

useHead({
    titleTemplate: (titleChunk) => {
        return `${titleChunk} - ${route.meta.title}`;
    },
});
</script>

<template>
    <WrapperPages>
        <Container>
            <article
                class="prose max-w-none text-justify lg:text-start !w-full">
                <h1
                    data-aos="fade-up"
                    class="font-semibold text-lg lg:text-3xl text-info tracking-wide leading-normal lg:leading-relaxed">
                    I am a freelencer, Full Stack Developer , Based in
                    Indonesia. Successful Remote work with client around the
                    world more than 5 years of professional experience & with
                    lots of Satisfied Customers.
                </h1>

                <Stats />

                <h1
                    data-aos="fade-up"
                    class="font-semibold mt-10 text-lg lg:text-3xl text-info tracking-wide leading-normal lg:leading-relaxed">
                    Work with passion, diligence, and integrity no matter how
                    big or small the project is that is precisely what you need
                    when you hire a developer. Not someone who is solely focused
                    on the budget, but rather someone who cares deeply about the
                    VALUE they provide.
                </h1>

                <div class="card bg-base-100 w-full shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title mt-0">
                            <span
                                class="text-transparent absolute box-content w-fit bg-clip-text blur-xl bg-gradient-to-r from-primary to-secondary">
                                Work History
                            </span>
                            <span
                                class="text-transparent relative bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Work History
                            </span>
                        </h2>
                        <ul
                            class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                            <li
                                v-for="(data, index) in workHistory"
                                :key="index">
                                <hr v-if="index !== 0" />
                                <div class="timeline-middle">
                                    <span
                                        class="icon-[lets-icons--check-fill] w-5 h-5"></span>
                                </div>
                                <div
                                    data-aos="fade-up"
                                    :class="data.class"
                                    class="mb-10">
                                    <time class="font-mono italic">
                                        {{ data.date }}
                                    </time>
                                    <div class="text-lg font-black">
                                        {{ data.title }}
                                    </div>

                                    <div class="text-sm my-2 font-semibold">
                                        {{ data.clientStatus }}
                                    </div>

                                    {{ data.text }}

                                    <div
                                        :class="
                                            data.stackClass !== ''
                                                ? 'lg:justify-end'
                                                : 'lg:justify-start'
                                        "
                                        class="flex justify-start mt-3 items-center">
                                        <div
                                            class="flex flex-wrap gap-3 w-full mt-0 lg:w-96 justify-start"
                                            :class="data.stackClass">
                                            <component
                                                v-for="(
                                                    stack, indexStack
                                                ) in data.stack"
                                                :key="indexStack"
                                                :is="stack"
                                                class="w-10 h-10 transition-all duration-300 ease-in-out" />
                                        </div>
                                    </div>
                                </div>
                                <hr v-if="index !== workHistory.length - 1" />
                            </li>
                        </ul>

                        <h2 class="card-title mt-0">
                            <span
                                class="text-transparent absolute box-content w-fit bg-clip-text blur-xl bg-gradient-to-r from-primary to-secondary">
                                Testimonials
                            </span>
                            <span
                                class="text-transparent relative bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Testimonials
                            </span>
                        </h2>

                        <Vue3Marquee
                            :gradient-color="[255, 255, 255]"
                            :duration="100"
                            gradient-length="30%"
                            :gradient="true"
                            class="!h-80 mt-5">
                            <TestimonialCard
                                v-for="(data, index) in allTestimonials"
                                :key="index"
                                v-bind="data"
                                class="!bg-base-100 !w-80 mx-5 shadow-sm drop-shadow-xl" />
                        </Vue3Marquee>

                        <Vue3Marquee
                            :gradient-color="[255, 255, 255]"
                            :duration="100"
                            gradient-length="30%"
                            :gradient="true"
                            class="!h-80"
                            direction="reverse">
                            <TestimonialCard
                                v-for="(data, index) in allTestimonials"
                                :key="index"
                                v-bind="data"
                                class="!bg-base-100 !w-80 mx-5 shadow-sm drop-shadow-xl" />
                        </Vue3Marquee>
                    </div>
                </div>
            </article>
        </Container>
    </WrapperPages>
</template>

<style scoped></style>

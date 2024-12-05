<script setup lang="ts">
interface Props {
    img?: string;
    title?: string;
    subtitle?: string;
    date?: string;
    url?: string;
}

defineProps<Props>();
</script>

<template>
    <NuxtLink data-aos="zoom-out-down" :to="url">
        <div
            class="card cursor-pointer bg-base-100 duration-300 ease-in-out transition hover:scale-95 hover:shadow-lg">
            <figure>
                <img :src="img" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-info">
                    {{ title }}
                </h2>
                <p class="text-accent">{{ subtitle }}</p>
                <div class="card-actions mt-3 justify-between">
                    <div class="avatar">
                        <div class="mask shadow-xl mask-squircle w-5">
                            <img src="~assets/image/profile.jpg" />
                        </div>
                    </div>
                    <div class="text-xs text-accent font-semibold">
                        {{ date }}
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped></style>

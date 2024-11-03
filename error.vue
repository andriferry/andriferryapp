<script setup lang="ts">
import type { NuxtError } from '#app';

definePageMeta({
    layout: '404',
});

defineProps({
    error: Object as () => NuxtError,
});
</script>

<template>
    <div class="h-screen flex justify-center flex-col gap-10 items-center">
        <div
            class="flex text-9xl gap-3 font-bold text-slate-600 items-center justify-center">
            <span class="icon-[noto--sad-but-relieved-face]"></span>
            <h1 class="">{{ error?.statusCode }}</h1>
        </div>

        <h1 class="text-2xl lg:text-3xl font-bold text-slate-700">
            {{ error?.message }}
        </h1>

        <NuxtLink to="/" class="btn btn-primary text-white text-lg">
            Back to Home
        </NuxtLink>
    </div>
</template>

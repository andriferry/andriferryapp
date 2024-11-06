<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook('page:start', () => {
    loading.value = true;
});
nuxtApp.hook('page:finish', () => {
    loading.value = false;
});
</script>

<template>
    <div :class="{ 'h-screen overflow-hidden': loading }">
        <Transition name="slide-fade" mode="out-in">
            <div
                v-if="loading"
                class="fixed h-screen transition duration-300 ease-in-out flex justify-center items-center top-0 w-full z-[1000] bg-neutral">
                <span
                    class="loading loading-infinity bg-gradient-to-r from-primary to-secondary w-52 h-52"></span>
            </div>
        </Transition>

        <NuxtLoadingIndicator />
        <NuxtLayout class="font-inter">
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>

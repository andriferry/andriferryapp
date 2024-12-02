<script setup lang="ts">
interface Props {
    icon: string;
}

defineProps<Props>();
</script>

<template>
    <span :class="`icon-[${icon}]`"></span>
</template>

<style scoped></style>

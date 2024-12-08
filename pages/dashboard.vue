<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
    layout: 'dashboardlayout',
});

let dataEditor = ref('');
const titleArticle = ref('');

const checkData = () => {
    console.log(dataEditor.value);
};
</script>

<template>
    <div class="h-screen p-20">
        <label class="input mb-4 input-bordered flex items-center gap-2">
            <input
                v-model="titleArticle"
                type="text"
                class="grow input-md"
                placeholder="Title" />
        </label>
        <ClientOnly>
            <QuillEditor
                contentType="html"
                v-model:content="dataEditor"
                theme="snow"
                toolbar="full" />
        </ClientOnly>

        <button @click="checkData" class="btn mt-4 btn-primary text-white">
            Submit
        </button>
    </div>
</template>

<style scoped></style>

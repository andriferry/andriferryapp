<script lang="ts" setup>
/**
 * @credits NuxtLabs <https://nuxtlabs.com/>
 * @see https://github.com/nuxt/nuxt.com/blob/main/components/OgImage/Docs.vue
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string }>(), {
  title: 'title',
  description: 'description',
  headline: 'headline',
})

const config = useRuntimeConfig()

const title = computed(() => (props.title || '').slice(0, 60))
const description = computed(() => (props.description || '').slice(0, 200))
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center bg-[#020420]">
    <div class="w-[800px] pl-[100px]">
      <p class="text-[24px] text-[#00DC82] mb-4 font-semibold">
        {{ config.public.title }}
      </p>

      <h1
        v-if="title"
        class="w-[600px] m-0 text-6xl font-semibold mb-4 text-white flex items-center"
      >
        <span>{{ title }}</span>
      </h1>
      <p
        v-if="description"
        class="text-3xl w-full text-[#E4E4E7] leading-tight"
      >
        {{ description }}
      </p>
    </div>

    <svg
      class="absolute bottom-0 left-0 right-0"
      viewBox="0 0 1200 627"
      width="1200"
      height="627"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 513L28.5 509.8C57 506.7 114 500.3 171.2 484.5C228.3 468.7 285.7 443.3 342.8 435C400 426.7 457 435.3 514.2 447.3C571.3 459.3 628.7 474.7 685.8 490.7C743 506.7 800 523.3 857.2 522.5C914.3 521.7 971.7 503.3 1028.8 491.8C1086 480.3 1143 475.7 1171.5 473.3L1200 471L1200 628L1171.5 628C1143 628 1086 628 1028.8 628C971.7 628 914.3 628 857.2 628C800 628 743 628 685.8 628C628.7 628 571.3 628 514.2 628C457 628 400 628 342.8 628C285.7 628 228.3 628 171.2 628C114 628 57 628 28.5 628L0 628Z"
        fill="#0c0f36"
        strokeLinecap="round"
        strokeLinejoin="miter"
      />
    </svg>
  </div>
</template>

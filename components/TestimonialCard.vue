<script setup lang="ts">
withDefaults(defineProps<Props>(), { photoProfile: false })

interface Props {
  text: string
  img: string
  name: string
  company?: string
  photoProfile: boolean
}
</script>

<template>
  <div
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    class="card bg-zinc-50 w-96 h-64 lg:mx-5"
  >
    <div class="card-body">
      <article class="prose prose-img:!m-0 text-info-content prose-p:!m-0">
        <p class="text-justify h-36 line-clamp-5">
          {{ text }}
        </p>

        <div class="flex items-start gap-3 mt-4">
          <div class="avatar">
            <div class="mask shadow-xl !flex justify-center mask-squircle w-10">
              <img
                v-if="photoProfile"
                :src="img"
              />

              <span
                v-else
                class="icon-[fa6-brands--upwork]"
                style="width: 2em; height: 2em"
              ></span>
            </div>
          </div>

          <div class="">
            <p class="font-bold">
              {{ name }}
            </p>
            <p class="text-xs text-start font-medium">
              {{ company }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

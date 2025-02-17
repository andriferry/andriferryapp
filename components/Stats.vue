<script setup lang="ts">
import AnimatedCounter from 'vue-animated-counter'

const stats = ref([
  {
    value: 5,
    label: 'years of Experience',
    class: 'plus',
  },
  {
    value: 40,
    label: 'of Projects Completed',
    class: '',
  },
  {
    value: 100,
    label: 'Job Success Score',
    class: 'percentage',
  },
])
</script>

<template>
  <div
    data-aos="flip-down"
    class="grid grid-cols-2 sm:grid-cols-3 py-4 mt-10 border-b border-slate-100"
  >
    <div
      v-for="(data, index) in stats"
      :key="index"
      class="flex justify-center items-center"
    >
      <div class="stats bg-transparent">
        <div class="stat px-0">
          <ClientOnly>
            <AnimatedCounter
              :duration="1000"
              v-bind="data"
              class="mb-0 stat-value text-5xl lg:text-6xl font-[800] text-primary"
            />
          </ClientOnly>

          <div class="stat-desc font-semibold text-sm">
            {{ data.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.percentage::after {
  content: ' %';
}

.plus::after {
  content: ' +';
}
</style>

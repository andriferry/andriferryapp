<script setup lang="ts">
const description = ref('Latest Creative Works Works & Featured Projects Project')

useSeoMeta({
  titleTemplate: '%s - %siteName',
  title: 'Project',
  // og title is not effected by titleTemplate, we can use template params here if we need
  ogTitle: '%s - %siteName',

  twitterTitle: '%s - %siteName',
  // ogImage: 'http://localhost:3000/__og-image__/image/og.png',

  description: description.value,
  ogDescription: description.value,
  // explicit twitter title is only needed when we want to display something just for X
  twitterDescription: description.value,
})

defineOgImageComponent('Default', {
  title: 'Hey There, it\'s andri',
  description: description.value,
})
</script>

<template>
  <WrapperPages>
    <Container>
      <article class="prose max-w-none text-justify lg:text-start !w-full">
        <h1
          data-aos="fade-up"
          class="font-semibold m-0 text-3xl lg:text-6xl text-info tracking-wide leading-normal lg:leading-relaxed"
        >
          Latest Creative
          <span class="text-transparent absolute box-content w-fit bg-clip-text blur-xl bg-gradient-to-r from-primary to-secondary">
            Works
          </span>
          <span class="text-transparent relative bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Works
          </span>
          <br />
          & Featured
          <span class="text-transparent absolute box-content w-fit bg-clip-text blur-xl bg-gradient-to-r from-primary to-secondary">
            Projects
          </span>
          <span class="text-transparent relative bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects
          </span>
        </h1>

        <p class="text-accent lg:font-medium my-0">
          The work we do, and the people we help.
        </p>
      </article>

      <div class="grid gap-10 mt-10">
        <div class="col-span-1">
          <div class="card bg-slate-200 shadow-lg min-h-96">
            <div class="card-body items-center justify-center relative overflow-hidden lg:px-16">
              <div class="grid gap-5 z-10 lg:grid-cols-2 w-full">
                <div
                  data-aos="fade-right"
                  class="flex justify-center lg:justify-start items-center"
                >
                  <article class="prose text-center justify-center lg:text-start text-accent">
                    <h1 class="text-slate-500 mb-0 text-4xl lg:text-5xl">
                      The Univuerse Kit
                    </h1>

                    <p class="mt-0 text-slate-500">
                      Open Source Landing Page Boilerplate built with Nuxt v3 + Tailwind CSS, Eslint Config, SEO
                    </p>

                    <NuxtLink
                      href="https://nuxttailuservuerse.vercel.app/"
                      target="_blank"
                    >
                      <button class="btn btn-wide lg:w-auto bg-slate-500 hover:bg-slate-500/60 text-white border-none">
                        See More
                      </button>
                    </NuxtLink>
                  </article>
                </div>

                <div class="flex items-center relative">
                  <img
                    data-aos="zoom-out"
                    class="rounded-2xl z-10 relative shadow-2xl"
                    src="~assets/image/univuerseLight.png"
                    alt=""
                  />

                  <img
                    data-aos="zoom-out"
                    class="rounded-lg lg:rounded-2xl z-20 w-48 -left-5 top-28 md:w-80 lg:-left-36 lg:top-40 absolute shadow-2xl"
                    src="~assets/image/univuerseDark.png"
                    alt=""
                  />

                  <div
                    data-aos="fade-right"
                    data-aos-duration="5000"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -top-7 -left-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>

                  <div
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -bottom-[1.5rem] -right-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <div class="card bg-[#a87df8] shadow-lg min-h-96">
            <div class="card-body items-center justify-center relative overflow-hidden lg:px-16">
              <div class="grid gap-5 z-10 lg:grid-cols-2 w-full">
                <div
                  data-aos="fade-right"
                  class="flex justify-center lg:justify-start items-center"
                >
                  <article class="prose text-center justify-center lg:text-start text-accent">
                    <h1 class="text-[#532a9f] mb-0 text-4xl lg:text-5xl">
                      URL Monitor
                    </h1>

                    <p class="mt-0 text-[#6431c5]">
                      Software Apps Project
                    </p>

                    <NuxtLink
                      href="https://urlmonitor-f2vl.vercel.app/"
                      target="_blank"
                    >
                      <button class="btn btn-wide lg:w-auto bg-[#532a9f] hover:bg-[#532a9f]/60 text-white border-none">
                        See More
                      </button>
                    </NuxtLink>
                  </article>
                </div>

                <div class="flex items-center relative">
                  <img
                    data-aos="zoom-out"
                    class="rounded-2xl z-10 relative shadow-2xl"
                    src="~assets/image/urlMonitor.png"
                    alt=""
                  />

                  <div
                    data-aos="fade-right"
                    data-aos-duration="5000"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -top-7 -left-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>

                  <div
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -bottom-[1.5rem] -right-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <div class="card bg-[#4ADE80] shadow-lg min-h-96">
            <div class="card-body items-center justify-center relative overflow-hidden lg:px-16">
              <div class="grid gap-5 z-10 lg:grid-cols-2 w-full">
                <div
                  data-aos="fade-right"
                  class="flex justify-center lg:justify-start items-center"
                >
                  <article class="prose text-center justify-center lg:text-start text-accent">
                    <div class="indicator">
                      <span class="indicator-item text-white font-semibold badge bg-[#166534] translate-x-10 border-none">
                        v1.0
                      </span>
                      <h1 class="text-[#166534] mb-0 text-4xl lg:text-5xl">
                        Tomdash
                      </h1>
                    </div>

                    <p class="mt-0 text-[#166534]">
                      Multi-Purpose Dashboard UI
                    </p>

                    <button class="btn btn-wide lg:w-auto bg-[#166534] hover:bg-[#166534]/60 text-white border-none">
                      See More
                    </button>
                  </article>
                </div>

                <div class="flex items-center relative">
                  <img
                    data-aos="zoom-out"
                    class="rounded-2xl z-10 relative shadow-2xl"
                    src="~assets/image/dashboardConcept.png"
                    alt=""
                  />

                  <div
                    data-aos="fade-right"
                    data-aos-duration="5000"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -top-7 -left-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>

                  <div
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -bottom-[1.5rem] -right-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <div class="card bg-slate-200 shadow-lg min-h-96">
            <div class="card-body items-center justify-center relative overflow-hidden lg:px-16">
              <div class="grid gap-5 z-10 lg:grid-cols-2 w-full">
                <div
                  data-aos="fade-right"
                  class="flex justify-center lg:justify-start items-center"
                >
                  <article class="prose text-center justify-center lg:text-start text-accent">
                    <h1 class="text-slate-500 mb-0 text-4xl lg:text-5xl">
                      CosyPos
                    </h1>

                    <p class="mt-0 text-slate-500">
                      Point of Sale Apps
                    </p>

                    <NuxtLink
                      href="https://poi-cozy.web.app/"
                      target="_blank"
                    >
                      <button class="btn btn-wide lg:w-auto bg-slate-500 hover:bg-slate-500/60 text-white border-none">
                        See More
                      </button>
                    </NuxtLink>
                  </article>
                </div>

                <div class="flex items-center relative">
                  <div class="relative">
                    <img
                      data-aos="zoom-out"
                      class="rounded-lg lg:rounded-2xl z-20 w-20 -left-5 top-10 lg:w-40 lg:-left-32 lg:top-28 absolute shadow-2xl"
                      src="~assets/image/cozyPosOrder.png"
                      alt=""
                    />

                    <img
                      data-aos="zoom-out"
                      class="rounded-lg lg:rounded-2xl z-10 relative shadow-2xl"
                      src="~assets/image/cozyPos.png"
                      alt=""
                    />
                  </div>

                  <div
                    data-aos="fade-right"
                    data-aos-duration="5000"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -top-7 -left-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>

                  <div
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -bottom-[1.5rem] -right-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- infitech -->
        <div class="col-span-1">
          <div class="card bg-[#293462] shadow-lg min-h-96">
            <div class="card-body items-center justify-center relative overflow-hidden lg:px-16">
              <div class="grid gap-5 z-10 lg:grid-cols-2 w-full">
                <div
                  data-aos="fade-right"
                  class="flex justify-center lg:justify-start items-center"
                >
                  <article class="prose text-center justify-center lg:text-start text-accent">
                    <h1 class="text-white/80 mb-0 text-4xl lg:text-5xl">
                      infitech
                    </h1>

                    <p class="mt-0 text-white/50">
                      Responsive Landing Pages
                    </p>

                    <NuxtLink
                      href="https://infitect.vercel.app/"
                      target="_blank"
                    >
                      <button class="btn btn-wide lg:w-auto bg-[#000D6B]/45 hover:bg-[#000D6B]/25 text-white border-none">
                        See More
                      </button>
                    </NuxtLink>
                  </article>
                </div>

                <div class="flex items-center relative">
                  <div class="relative">
                    <img
                      data-aos="zoom-out"
                      class="rounded-lg lg:rounded-2xl z-10 relative shadow-2xl"
                      src="~assets/image/infitech.png"
                      alt=""
                    />
                  </div>

                  <div
                    data-aos="fade-right"
                    data-aos-duration="5000"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -top-7 -left-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>

                  <div
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -bottom-[1.5rem] -right-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1">
          <div class="card bg-[#e3f5f9] shadow-lg min-h-96">
            <div class="card-body items-center justify-center relative overflow-hidden lg:px-16">
              <div class="grid gap-5 z-10 lg:grid-cols-2 w-full">
                <div
                  data-aos="fade-right"
                  class="flex justify-center lg:justify-start items-center"
                >
                  <article class="prose text-center justify-center lg:text-start text-accent">
                    <h1 class="text-cyan-900/50 mb-0 text-4xl lg:text-5xl">
                      Cittamap
                    </h1>

                    <p class="mt-0 text-cyan-900/50">
                      Responsive Landing Pages
                    </p>

                    <NuxtLink
                      target="_blank"
                      href="https://cittamapwebsite.vercel.app/"
                    >
                      <button class="btn btn-wide lg:w-auto bg-cyan-900/50 hover:bg-cyan-900/45 text-white border-none">
                        See More
                      </button>
                    </NuxtLink>
                  </article>
                </div>

                <div class="flex items-center relative">
                  <div class="relative">
                    <img
                      data-aos="zoom-out"
                      class="rounded-lg lg:rounded-2xl z-10 relative shadow-2xl"
                      src="~assets/image/cittamap.png"
                      alt=""
                    />
                  </div>

                  <div
                    data-aos="fade-right"
                    data-aos-duration="5000"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -top-7 -left-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>

                  <div
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    class="bg-cyan-900/25 z-0 -bottom-[1.5rem] -right-8 h-20 w-20 lg:h-40 lg:w-40 rounded-full absolute"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </WrapperPages>
</template>

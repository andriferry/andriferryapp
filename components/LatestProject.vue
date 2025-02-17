<template>
  <Wrapper>
    <Container>
      <article
        id="latest-project"
        data-aos="fade-down"
        class="prose mb-3"
      >
        <h1 class="text-info text-3xl flex items-center gap-3 capitalize lg:text-4xl">
          Featured projects
          <span class="icon-[twemoji--telescope] w-8 h-8"></span>
        </h1>
      </article>
    </Container>

    <Container class="pt-0">
      <div class="grid gap-10">
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
      </div>
    </Container>
  </Wrapper>
</template>

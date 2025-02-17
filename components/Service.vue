<script setup lang="ts">
const allServices = ref([
  {
    label: 'Website Design',
    icon: 'icon-[fluent--design-ideas-24-filled]',
    textItalic: 'Bring Your Ideas to Life',
    paragraph: [
      'Transform your vision into a captivating digital presence with my experience web design services.',
      `Whether you're starting from scratch or looking to refresh your current website.`,
      'A design that is not only visually appealing but also functional and user friendly.',
    ],
    oas: 'fade-right',
  },
  {
    label: 'Software Development',
    icon: 'icon-[solar--code-broken]',
    textItalic: 'Let\'s Build Something Great',
    paragraph: [
      'Your business with custom software solutions tailored to meet your unique needs. With a focus on innovation and reliability.',
      'Deliver software that enhances your operations, boosts efficiency, and drives growth.',
      'Ready to start ?',
    ],
    oas: 'fade-up',
  },
  {
    label: 'Experience Peace of Mind',
    icon: 'icon-[mdi--hours-24]',
    textItalic: `He literally responds whether it's 12 AM or 12 PM" --Upwork client--`,
    paragraph: [
      'When you work with me, you\'re choosing a partner you can trust to handle your project with care and diligence.',
      'Whether it\'s web development, software solutions, or any other service, reliability is at the core of my work ethic.',
      'Ready to experience reliable service ?',
    ],
    oas: 'fade-left',
  },
])
</script>

<template>
  <Wrapper>
    <Container class="grid gap-4 lg:grid-cols-2">
      <article
        class="prose"
        data-aos="fade-right"
      >
        <h1 class="text-info text-3xl flex items-center gap-3 lg:text-4xl">
          The ways I can help you <span class="icon-[twemoji--memo] w-8 h-8"></span>
        </h1>

        <p class="text-accent italic">
          "Knowledge is Power" - Think And Grow Rich
        </p>

        <p class="text-accent">
          I know how hard it can be your
          <span class="text-primary underline decoration-2">
            Ideas
          </span>
          into real project for a growing business you have tons of
          other projects going on but no time to dedicate to your
          Knowledge.
        </p>

        <p class="text-accent">
          It can be especially frustrating when you know exactly what
          you want, but know that it's holding back your growth. It's
          a pretty common theme I see among founders I've worked with.
        </p>
      </article>

      <div class="flex justify-center items-center">
        <img
          data-aos="fade-left"
          src="~/assets/image/stats.png"
          alt=""
          class="pb-2"
        />
      </div>
    </Container>

    <Container class="relative">
      <article
        data-aos="fade-down"
        class="prose mb-3"
      >
        <h1 class="text-info text-3xl lg:text-4xl">
          <span class="icon-[codicon--quote] w-10 h-10"></span> I take all of that off your shoulders and get the job done

          <span class="icon-[fluent-color--beach-20] w-10 h-10"></span>
        </h1>
      </article>

      <div
        data-aos="fade-up"
        class="grid lg:grid-cols-3 gap-4"
      >
        <div
          v-for="(data, index) in allServices"
          :key="index"
          class="card bg-white cursor-pointer group hover:bg-primary transition duration-300 ease-in-out hover:scale-95 shadow-xl text-primary-content"
        >
          <div class="card-body">
            <div class="card-title flex gap-3 justify-start items-center group-hover:text-white text-accent">
              <div class="avatar">
                <div class="w-12 !flex justify-center items-center ease-in-out transition-all duration-300 group-hover:bg-white bg-primary rounded-xl">
                  <span
                    :class="data.icon"
                    class="text-3xl group-hover:text-primary ease-in-out transition-all duration-300 text-white"
                  ></span>
                </div>
              </div>
              {{ data.label }}
            </div>

            <article class="prose group-hover:text-white text-accent text-sm mt-3">
              <p class="italic">
                "{{ data.textItalic }}"
              </p>

              <p
                v-for="(paragraph, indexP) in data.paragraph"
                :key="indexP"
              >
                {{ paragraph }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </Container>
  </Wrapper>
</template>

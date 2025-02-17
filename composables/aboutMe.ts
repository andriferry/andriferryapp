import Css from '@/components/Icons/Css.vue'
import Figma from '@/components/Icons/Figma.vue'
import Git from '@/components/Icons/Git.vue'
import GoogleCloudApi from '@/components/Icons/GoogleCloudApi.vue'
import Html from '@/components/Icons/Html.vue'
import Javascript from '@/components/Icons/Javascript.vue'
import Laravel from '@/components/Icons/Laravel.vue'
import Next from '@/components/Icons/Next.vue'
import Nuxt from '@/components/Icons/Nuxt.vue'
import Pinia from '@/components/Icons/Pinia.vue'
import React from '@/components/Icons/React.vue'
import Slack from '@/components/Icons/Slack.vue'
import Supabase from '@/components/Icons/Supabase.vue'
import Tailwindcss from '@/components/Icons/Tailwindcss.vue'
import Typescript from '@/components/Icons/Typescript.vue'
import Vite from '@/components/Icons/Vite.vue'
import VsCode from '@/components/Icons/VsCode.vue'
import Vue from '@/components/Icons/Vue.vue'
import Vuetifyjs from '@/components/Icons/Vuetifyjs.vue'
import { AutoPlay } from '@egjs/flicking-plugins'
import cazner from 'assets/image/caznerLogo.png'
import jonahAC from 'assets/image/jonahAC.svg'
import narimo from 'assets/image/narimo.png'
import orsoLogo from 'assets/image/orsoLogo.png'
import paynetMy from 'assets/image/paynetMy.png'
import surveyLogo from 'assets/image/survey-logo.svg'
import Axios from '~/components/Icons/Axios.vue'
import Bootstrap from '~/components/Icons/Bootstrap.vue'
import Bulma from '~/components/Icons/Bulma.vue'
import Chartjs from '~/components/Icons/Chartjs.vue'
import CkEditor from '~/components/Icons/CkEditor.vue'
import Clickup from '~/components/Icons/Clickup.vue'
import Cloudflare from '~/components/Icons/Cloudflare.vue'
import Directus from '~/components/Icons/Directus.vue'
import Docker from '~/components/Icons/Docker.vue'
import Eslint from '~/components/Icons/Eslint.vue'
import Firebase from '~/components/Icons/Firebase.vue'
import Gitlab from '~/components/Icons/Gitlab.vue'
import Golang from '~/components/Icons/Golang.vue'
import GoogleMaps from '~/components/Icons/GoogleMaps.vue'
import Jira from '~/components/Icons/Jira.vue'
import LaravelNova from '~/components/Icons/LaravelNova.vue'
import Mailgun from '~/components/Icons/Mailgun.vue'
import Postgresql from '~/components/Icons/Postgresql.vue'
import Quasar from '~/components/Icons/Quasar.vue'
import Sentry from '~/components/Icons/Sentry.vue'
import Shopify from '~/components/Icons/Shopify.vue'
import XD from '~/components/Icons/XD.vue'

export function useAboutMe(): any {
  const plugins = ref([new AutoPlay({
    duration: 2000,
    direction: 'NEXT',
    stopOnHover: false,
  })])

  const options = ref({
    renderOnlyVisible: true,
    circular: true,
    defaultIndex: 2,
  })

  const iconsComponent = [
    {
      text: 'Nuxt',
      component: Nuxt,
    },
    {
      text: 'Vue',
      component: Vue,
    },
    {
      text: 'Html',
      component: Html,
    },
    {
      text: 'CSS',
      component: Css,
    },

    {
      text: 'React',
      component: React,
    },
    {
      text: 'Next',
      component: Next,
    },
    {
      text: 'Javascript',
      component: Javascript,
    },
    {
      text: 'Typescript',
      component: Typescript,
    },
    {
      text: 'Supabase',
      component: Supabase,
    },
    {
      text: 'Pinia',
      component: Pinia,
    },
    {
      text: 'Tailwindcss',
      component: Tailwindcss,
    },
    {
      text: 'Vuetifyjs',
      component: Vuetifyjs,
    },
    {
      text: 'Vite',
      component: Vite,
    },
    {
      text: 'Google Cloud Api',
      component: GoogleCloudApi,
    },

    {
      text: 'Figma',
      component: Figma,
    },
  ]

  const myTools = [
    {
      text: 'VS Code',
      component: VsCode,
    },
    {
      text: 'Git',
      component: Git,
    },
    {
      text: 'Slack',
      component: Slack,
    },
    {
      text: 'Eslint',
      component: Eslint,
    },
  ]

  const testimonials = ref([
    {
      text: 'Andri has supported us in our project for re-developing a mobile and web-based GIS Application based on Vue.js. He has helped us a lot to get forward with the project, has developed to be very productive in developing new features and bugfixing equally. Andri is working well with the entire team, gives frequent feedback about his progress, responds quickly, is available and easy to work with. I definitely recommend working with Andri and am looking forward to do the same',
      img: 'https://www.upwork.com/profile-portraits/c17vsiSaxPorjR2E4zzi7SxvOTdzKME0srnDaaC_tlq1Fy59iuET1C91ZxGkd3MJQE',
      name: 'Ulrich Mann',
      company: 'Narimo systems',
      photoProfile: true,
    },
    {
      text: 'Andri is a persistent man. He doesn\'t give up easily. A good-natured guy with a good work ethic. He is nearly always available. I have never seen him go offline. He literally responds whether it\'s 12 AM or 12 PM. He works around the clock to get the job done. He never said No even if the work we gave him sometimes fell outside the scope of the project. I highly recommend him. He is a fast learner',
      img: 'https://www.upwork.com/profile-portraits/c1Ytdxg7i-qp0r7cfXBqzdlG4IMHKVFCQAGzBxoqjYVDcxTplBYcEJb-OHABRWrfH8',
      name: 'Roshan Jonnalagadda',
      company: 'Jonah and Associates Pty Ltd',
      photoProfile: true,
    },
    {
      text: 'Great to work with and can work with Tailwind CSS within vuejs fine. We had one project here we had hired Andri for -  I will be hiring Andri again for any Tailwind CSS / front end work',
      img: 'https://www.upwork.com/profile-portraits/c1y5663lpxcND-IA7isd0LhwRfgp-GdppGKVQqAZuz943r2xbUVudKvEF55CiivVxX',
      name: 'Nathan Sapwell',
      company: 'DreamFast',
      photoProfile: true,
    },
    {
      text: 'He delivered VueJS web application project within the timeline. The communication was smooth and he met all deadlines. I enjoyed working with Andri ...',
      img: 'https://www.upwork.com/profile-portraits/c1XkdwXmAbqmIR4L0fgLsGgJx9Wd7oU8I8Jpdh4FIhfP-b0OB2NY_gfbkgORkwdZb_',
      name: 'Helmi Hasan',
      company: 'PayNet',
      photoProfile: true,
    },
  ])

  const allTestimonials = ref([
    ...testimonials.value,
    {
      text: 'Very good person to work with reliable, communicable, and milestone achiever',
      img: '',
      name: 'Santosh Kumar',
      company: '',
      photoProfile: false,
    },
    {
      text: 'Andri has delivered good work on this VueJS development for landing page. He understand the requirement and developed based on design provided. He worked faster than timeline provided and provided fixes based on my feedback quickly. Smooth communication and highly recommended',
      img: 'https://www.upwork.com/profile-portraits/c1XkdwXmAbqmIR4L0fgLsGgJx9Wd7oU8I8Jpdh4FIhfP-b0OB2NY_gfbkgORkwdZb_',
      name: 'Helmi Hasan',
      company: 'PayNet',
      photoProfile: true,
    },
    {
      text: `We were in need of a Vue.js developer that could adjust a Vue template to our Figma design and connect the GUI to our backend API. Thanks to Andri our dashboard looks exactly as per design and it works excellent! I really enjoyed working with Andri. Andri is extremely responsive to instructions and feedback. I gave him an initial specification which he took and did almost everything perfectly as per instructed right away, the rest was quickly adjusted with the feedback he received. Andri reached out to me daily to give updates on what had been done, which is highly appreciated. It's obvious Andri is professional and very skilled at what he does. Our dashboard came out looking absolutely gorgeous and all functionality is as per expected/instructed. I am definitely working with Andri again in the near future`,
      img: '',
      name: 'Mateo Garcia',
      company: 'CNTIVO',
      photoProfile: false,
    },
    {
      text: `Once again Andri did an excellent job building a Vue.js app form scratch for us. Everything looks exactly as per design and works precisely as instructed. Andri makes sure to give daily updates and inform if he for some reason ever will be unavailable (which is barely ever). He sometimes goes the extra mile to make sure the user experience will be as good as possible. I highly recommend working with Andri, and I will myself most definitely work with him again. Thanks for this time Andri!`,
      img: '',
      name: 'Mateo Garcia',
      company: 'CNTIVO',
      photoProfile: false,
    },
    {
      text: `Andri was, as always, a pleasure to work with. It's a delight working with a dev that always delivers exactly what was asked for. Thank you again Andri!`,
      img: '',
      name: 'Mateo Garcia',
      company: 'CNTIVO',
      photoProfile: false,
    },
    {
      text: `thank you andri, good job`,
      img: '',
      name: 'Megat Kurniawan',
      company: 'Upwork Client',
      photoProfile: false,
    },
    {
      text: `We are happy to work with Andri. Andri is an excellent frontend developer that takes much care in the quality of his work. As he continues to work and improve his skills, he'll gain the speed needed to put him among the top Upwork providers. Looking forward to working with you again, Andri.`,
      img: '',
      name: 'Azadeh Dee',
      company: 'CNTIVO',
      photoProfile: false,
    },
    {
      text: `Great experience. Quick and flawless work. I had no revisions needed.`,
      img: '',
      name: 'Chris May',
      company: 'Bramalea Tire',
      photoProfile: false,
    },
    {
      text: `Andri delivers a great looking application as always. Always a pleasure working with Andri. I've worked with him on multiple occasions now and it's great to have someone you know you will deliver good results.`,
      img: '',
      name: 'Mateo Garcia',
      company: 'CNTIVO',
      photoProfile: false,
    },
    {
      text: `Andri took the time to write a detailed and informative documentation, which was what we were looking for. Thanks again Andri!`,
      img: '',
      name: 'Mateo Garcia',
      company: 'CNTIVO',
      photoProfile: false,
    },
    {
      text: `Great delivery as always, Andri is one of our go-to-guys for frontend matters on Upwork. Highly recommend him.`,
      img: '',
      name: 'Azadeh Dee',
      company: 'CNTIVO',
      photoProfile: false,
    },
    {
      text: `Andri made the new page in our project look exactly as per design, as always. Andri is extremely good at what he does`,
      img: '',
      name: 'Mateo Garcia',
      company: 'CNTIVO',
      photoProfile: false,
    },
    {
      text: `Good overall happy with the outcome`,
      img: '',
      name: 'Joshua Hodgetts',
      company: ' Vidtiser',
      photoProfile: false,
    },
    {
      text: `Andri was a pleasure to work with!`,
      img: '',
      name: 'Derek Ruffner',
      company: 'ArtistHub',
      photoProfile: false,
    },
  ])

  const workHistory = computed(() => {
    return [
      {
        date: '2 February 2021 - 16 June 2021',
        title: 'Laravel Developer',
        text: '',
        clientStatus: 'Max Smith (USA)',
        class: 'timeline-start md:text-end',
        stack: [
          Laravel,
          LaravelNova,
          Vue,
          Vuetifyjs,
        ],
        stackClass: 'lg:justify-end',
      },
      {
        date: '12 July 2021 - 28 Apr 2022',
        title: 'VueJS developer Golang Backend',
        text: '',
        clientStatus: 'Jonah and Associates Pty Ltd  (New Zealand)',
        class: 'timeline-end',
        stack: [
          Vue,
          Golang,
          Bulma,
          Chartjs,
        ],
        stackClass: '',
      },

      {
        date: '28 August 2021 - 7 Sep 2021',
        title: 'Compose message (similar to email) in VueJS',
        text: '',
        clientStatus: 'Helmi Hasan (Malaysia)',
        class: 'timeline-start md:text-end',
        stack: [
          Vue,
          Vuetifyjs,
          CkEditor,
        ],
        stackClass: 'lg:justify-end',
      },
      {
        date: '06 Sep 2021 - 9 Sep 2021',
        title: 'Looking for Vue and nuxt.js developer for a small task',
        text: '',
        clientStatus: 'Santosh Kumar (India)',
        class: 'timeline-end',
        stack: [
          Vue,
          Nuxt,
          Vuetifyjs,
        ],
        stackClass: '',
      },
      {
        date: '21 Sep 2021 - 20 Dec 2021',
        title: 'Vuejs / TailwindCSS Front End and Laravel Backend Skills Required',
        text: '',
        clientStatus: 'DreamFast (Australia)',
        class: 'timeline-start md:text-end',
        stack: [
          Vue,
          Laravel,
          Tailwindcss,
        ],
        stackClass: 'lg:justify-end',
      },
      {
        date: '29 Sep 2021 - 30 Mar 2024',
        title: 'Vuejs Developer | Quasar Framework',
        text: 'Narimo Systems ia an saas provide geo-related web infrastructure, geodata management & publication and geographic information systems.',
        clientStatus: 'narimo systems (German)',
        class: 'timeline-end',
        stack: [
          Vue,
          Quasar,
          Gitlab,
          Axios,
        ],
        stackClass: '',
      },
      {
        date: 'Dec 2021 - June 2022',
        title: 'Vuejs Developer',
        text: 'Sass maps to provide data insights to create climate resilient urban infrastructure, using geospatial AI, and nature based adaptation solutions',
        clientStatus: 'Cittamap (Netherlands)',
        class: 'timeline-start md:text-end',
        stack: [
          Vue,
          Chartjs,
          GoogleMaps,
          Axios,
          Bootstrap,
          Jira,
        ],
        stackClass: 'lg:justify-end',
      },
      {
        date: 'Marc 2023 - Marc 2024',
        title: 'Vuejs Developer | Quasar Framework',
        text: 'Digital Agency & Solution',
        clientStatus: 'Synque Limited (Hong Kong)',
        class: 'timeline-end',
        stack: [
          Vue,
          Quasar,
          Tailwindcss,
          Typescript,
          Figma,
          Pinia,
          Firebase,
          Sentry,
          Cloudflare,
          Directus,
          Axios,
          Clickup,
        ],
        stackClass: '',
      },
      {
        date: '2 March 2023 - May 2024',
        title: 'Vuejs Developer',
        text: 'Connecting promotional Suppliers, Distributors; End Customers with a functional, simple, straightforward SAAS platform',
        clientStatus: 'Cazner Pty Ltd (Australia)',
        class: 'timeline-start md:text-end',
        stack: [
          Vue,
          Bootstrap,
          XD,
          Axios,
        ],
        stackClass: 'lg:justify-end',
      },
      {
        date: 'Jan 2024 - Marc 2024',
        title: 'Nuxt Js Developer',
        text: 'All-in-One SaaS Solution for Holistic Student Success',
        clientStatus: 'Kinobi Technologies indonesia (Indonesia)',
        class: 'timeline-end',
        stack: [
          Vue,
          Nuxt,
          Tailwindcss,
          Typescript,
          Clickup,
        ],
        stackClass: '',
      },
      {
        date: '14 May 2024 -  29 Oct 2024',
        title: 'Nuxt Developer | Directus CMS | Shopify',
        text: 'Connecting promotional Suppliers, Distributors; End Customers with a functional, simple, straightforward SAAS platform',
        clientStatus: 'Foodwise Life | 7APP (Italy)',
        class: 'timeline-start md:text-end',
        stack: [
          Vue,
          Nuxt,
          Tailwindcss,
          Typescript,
          Shopify,
          Directus,
          Docker,
          GoogleCloudApi,
          Postgresql,
          Mailgun,
        ],
        stackClass: 'lg:justify-end',
      },
    ]
  })

  return {
    iconsComponent,
    myTools,
    jonahAC,
    testimonials,
    plugins,
    options,
    surveyLogo,
    cazner,
    orsoLogo,
    narimo,
    paynetMy,
    Laravel,
    workHistory,
    allTestimonials,
  }
}

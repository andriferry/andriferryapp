import { QuillEditor } from '@vueup/vue-quill'

import '@vueup/vue-quill/dist/vue-quill.snow.css'

export default defineNuxtPlugin((nuxtApp) => {
  const globalOptions = {
    placeholder: 'Type Article Here',
    theme: 'snow',
  }

  QuillEditor.props.globalOptions.default = () => globalOptions

  nuxtApp.vueApp.component('QuillEditor', QuillEditor)
})

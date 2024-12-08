import { Field, Form, defineRule, configure } from "vee-validate";
import { all } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(all).forEach(([name, rule]) => {
    defineRule(name, rule);
  });

  configure({
    validateOnChange: true,
    generateMessage: localize({
      en,
    }),
  });

  nuxtApp.vueApp.component("Form", Form);

  nuxtApp.vueApp.component("Field", Field);
});


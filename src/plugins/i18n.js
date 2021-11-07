import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import en from '../languages/en.json'
import ja from '../languages/ja.json'
const messages = {
    'en': en,
    'ja': ja
};

const i18n = new VueI18n({
    locale: 'ja',
    fallbackLocale: 'ja', // set fallback locale
    messages, // set locale messages
});

export default i18n;
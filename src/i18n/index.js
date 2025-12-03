import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './lang/en-US.js';
import zh from './lang/zh-CN.js';

Vue.use(VueI18n);

const messages = {
  "zh-CN": {
    ...zh,
  },
  "en-US": {
    ...en,
  },
};

const i18n = new VueI18n({
  locale: 'zh-CN', // 设置默认语言
  messages,
//   silentTranslationWarn: true,  // 不输出翻译警告
});

export default i18n;
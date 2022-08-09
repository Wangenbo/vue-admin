import ElementPlus from 'element-plus'
import { createI18n } from 'vue-i18n'
// import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/index.css'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'
import messages from '../utils/i18n'

const i18n = createI18n({
    locale: localeZH.name,
    fallbackLocale: localeEN.name,
    messages,
})

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default (app) => {
    app.use(ElementPlus, { locale:localeZH })
    app.use(i18n)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
    }
}

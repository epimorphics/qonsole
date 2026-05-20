import { defineCustomElement } from 'vue'
import Qonsole from './Qonsole.ce.vue'

const QonsoleElement = defineCustomElement(Qonsole)

customElements.define('epi-qonsole', QonsoleElement)

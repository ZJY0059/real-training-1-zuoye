import { defineStore } from 'pinia'

export const piniaIndex = defineStore('index', {
  state: (): State => {
    return {
      color: ''
    }
  },
  getters: {},
  actions: {}
})

/**state的校验 */
interface State {
  color: string
}

import { consoleLog } from './module.js'

// @ts-expect-error: global is not defined
global.main = () => {
  consoleLog('Hello from main.ts')
}

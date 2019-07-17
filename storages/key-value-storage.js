export default function getLIFOMemoryStorage () {
  return MEMORY_STORAGE.getInstance()
}

const MEMORY_STORAGE = (function () {
  let instance

  function createInstance () {
    return new Map()
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()

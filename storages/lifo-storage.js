export default function getLIFOMemoryStorage () {
  return MEMORY_STORAGE.getInstance()
}

const MEMORY_STORAGE = (function () {
  var instance

  function createInstance () {
    return []
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

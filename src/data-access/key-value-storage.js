export default function makeKeyValueStorage (getStorageData) {
  return Object.freeze({
    setItem,
    getItem,
    delItem,
    logging
  })

  function setItem (key, item) {
    return getStorageData().set(key, item)
  }

  function getItem (key) {
    return getStorageData().get(key)
  }

  function logging () {
    console.log(getStorageData())
  }

  function delItem (key) {
    getStorageData().delete(key)
  }
}

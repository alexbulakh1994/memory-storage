export default function makeLifoStorage (getStorageData) {
  return Object.freeze({
    addItem,
    getItem,
    logging
  })

  function addItem (item) {
    return getStorageData().unshift(item)
  }

  function getItem () {
    return getStorageData().shift()
  }

  function logging () {
    console.log(getStorageData())
  }
}

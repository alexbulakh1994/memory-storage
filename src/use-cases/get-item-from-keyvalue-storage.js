export default function makeGetItemFromKeyValueStorage ({ keyValueStorage }) {
  return function getItemFromKeyValueStorage (key) {
    const value = keyValueStorage.getItem(key)

    if (!value) return null

    if (value.expires < Date.now()) {
      keyValueStorage.delItem(key)
      return null
    }

    return value
  }
}

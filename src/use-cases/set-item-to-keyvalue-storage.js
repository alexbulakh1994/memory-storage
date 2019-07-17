import makeKeyValueItem from '../key-value-item'
export default function makeSetItemToKeyValueStorage ({ keyValueStorage }) {
  return function setItemToKeyValueStorage (key, value, ttl) {
    const keyValueItem = makeKeyValueItem({ value, ttl })
    return keyValueStorage.setItem(key, keyValueItem)
  }
}

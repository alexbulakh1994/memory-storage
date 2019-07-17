import makeLifoStorage from './lifo-storage'
import makeKeyValueStorage from './key-value-storage'
import getLIFOMemoryStorage from '../../storages/lifo-storage'
import getKeyValueMemoryStorage from '../../storages/key-value-storage'

const lifoStorage = makeLifoStorage(getLIFOMemoryStorage)
const keyValueStorage = makeKeyValueStorage(getKeyValueMemoryStorage)
const storages = { lifoStorage, keyValueStorage }

export default storages
export { lifoStorage, keyValueStorage }

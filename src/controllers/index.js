import makeAddItemLifo from './add-item-to-lifo'
import makeGetItemLifo from './get-item-from-lifo'
import makeSetItemKeyValue from './set-item-to-keyvalue'
import makeGetItemKeyValue from './get-item-from-keyvalue'
import { addItemToLIFOStorage, getItemFromLIFOStorage, setItemToKeyValueStorage, getItemFromKeyValueStorage } from '../use-cases'

const addItemLifo = makeAddItemLifo({ addItemToLIFOStorage })
const getItemLifo = makeGetItemLifo({ getItemFromLIFOStorage })
const setItemKeyValue = makeSetItemKeyValue({ setItemToKeyValueStorage })
const getItemKeyValue = makeGetItemKeyValue({ getItemFromKeyValueStorage })
const StorageController = Object.freeze({ addItemLifo, getItemLifo, setItemKeyValue, getItemKeyValue })

export default StorageController
export { addItemLifo, getItemLifo, setItemKeyValue, getItemKeyValue }

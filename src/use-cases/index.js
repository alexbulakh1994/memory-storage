import makeAddItemToLIFOStorage from './add-item-to-lifo-storage'
import makeGetItemFromLIFOStorage from './get-item-from-lifo-storage'
import makeSetItemToKeyValueStorage from './set-item-to-keyvalue-storage'
import makeGetItemFromKeyValueStorage from './get-item-from-keyvalue-storage'
import { lifoStorage, keyValueStorage } from '../data-access'

const addItemToLIFOStorage = makeAddItemToLIFOStorage({ lifoStorage })
const getItemFromLIFOStorage = makeGetItemFromLIFOStorage({ lifoStorage })
const setItemToKeyValueStorage = makeSetItemToKeyValueStorage({ keyValueStorage })
const getItemFromKeyValueStorage = makeGetItemFromKeyValueStorage({ keyValueStorage })
const storageService = { addItemToLIFOStorage, getItemFromLIFOStorage, setItemToKeyValueStorage, getItemFromKeyValueStorage }

export default storageService
export { addItemToLIFOStorage, getItemFromLIFOStorage, setItemToKeyValueStorage, getItemFromKeyValueStorage }

import makeLifoItem from '../lifo-item'
export default function makeAddItemToLIFOStorage ({ lifoStorage }) {
  return function addItemToLIFOStorage (value) {
    console.log(lifoStorage.logging())
    const lifoItem = makeLifoItem({ value })
    return lifoStorage.addItem(lifoItem)
  }
}

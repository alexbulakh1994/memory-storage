export default function makeGetItemFromLIFOStorage ({ lifoStorage }) {
  return function getItemFromLIFOStorage () {
    return lifoStorage.getItem()
  }
}

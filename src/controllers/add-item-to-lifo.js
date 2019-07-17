export default function makeAddItemLifo ({ addItemToLIFOStorage }) {
  return function addItemLifo (httpRequest) {
    const { value } = httpRequest.body
    const responseHeaders = { 'Content-Type': 'application/json' }

    if (!value) {
      return {
        headers: responseHeaders,
        statusCode: 400,
        body: { 'Error': 'Required params was not send.' }
      }
    }

    addItemToLIFOStorage(value)
    return {
      headers: responseHeaders,
      statusCode: 200
    }
  }
}

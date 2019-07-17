export default function makeGetItemKeyValue ({ getItemFromKeyValueStorage }) {
  return function getItemKeyValue (httpRequest) {
    const { key } = httpRequest.query
    const responseHeaders = { 'Content-Type': 'application/json' }

    if (!key) {
      return {
        headers: responseHeaders,
        statusCode: 400,
        body: { 'Error': 'Query key was not found' }
      }
    }

    const result = getItemFromKeyValueStorage(key)

    if (!result) {
      return {
        headers: responseHeaders,
        statusCode: 404
      }
    }

    return {
      headers: responseHeaders,
      statusCode: 200,
      body: result
    }
  }
}

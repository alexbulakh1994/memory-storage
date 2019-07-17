export default function makeSetItemKeyValue ({ setItemToKeyValueStorage }) {
  return function setItemKeyValue (httpRequest) {
    const { key, value, ttl } = httpRequest.body
    const responseHeaders = { 'Content-Type': 'application/json' }

    if (!key || !value) {
      return {
        headers: responseHeaders,
        statusCode: 400,
        body: { 'Error': 'Required params was not send.' }
      }
    }

    setItemToKeyValueStorage(key, value, ttl)

    return {
      headers: responseHeaders,
      statusCode: 200
    }
  }
}

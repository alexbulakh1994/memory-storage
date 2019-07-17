export default function makeGetItemLifo ({ getItemFromLIFOStorage }) {
  return function getItemLifo (httpRequest) {
    const result = getItemFromLIFOStorage()
    const responseHeaders = { 'Content-Type': 'application/json' }

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

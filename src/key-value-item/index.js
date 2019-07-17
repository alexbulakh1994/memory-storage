export default function makeKeyValueItem ({ value, ttl = Infinity }) {
  const expires = Date.now() + ttl
  return { value, ttl, expires }
}

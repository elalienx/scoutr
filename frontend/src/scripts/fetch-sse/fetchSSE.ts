/**
 * About:
 * This is a wrapper so the tests which run on Node.js that do not understand what EvenSource is,can pass
 */
export default function fetchSSE() {
  return EventSource;
}

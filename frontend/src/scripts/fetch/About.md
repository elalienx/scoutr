# About fetch

1. `fetchService()` is a JavaScript/TypeScript function that provides a thin abstraction layer over the fetch API for form submission using _POST_, _PATCH_, and _DELETE_ methods.
1. `useFetch()` is a React custom hook used by the assignments and candidate pages to fetch data with the _GET_ method, managing state updates so React automatically refreshes the UI.

ℹ️ Note: For Server-Sent Events (SSE), we use the native [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) implementation without additional abstraction. That's why there isn't a third file called _eventSource_ in this folder.

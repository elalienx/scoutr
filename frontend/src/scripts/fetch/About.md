# About fetch

1. `fetchService()` is a JavaScript/TypeScript function that provides a thin abstraction layer over the fetch API for form submission using "POST," "PATCH," and "DELETE" methods.
1. `useFetch()` is a React custom hook for fetching data with the "GET" method, handling state updates so React automatically updates the UI.

ℹ️ Note: For Server-Sent Events (SSE), we use the native [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) implementation without additional abstraction. Thats why there is not a third file caleld `eventSource()` in this folder.

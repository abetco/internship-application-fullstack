addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const urls = await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
    .then((response) => {
      return response.json();
    });
  const content = await fetch(urls['variants'][Math.floor(Math.random() * 2)])
    .then((response) => {
      return response.text();
    });
  return new Response(content, {
    headers: { 'content-type': 'text/html' },
  });
}

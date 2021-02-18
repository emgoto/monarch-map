const URL = `https://insights-collector.newrelic.com/v1/accounts/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/events`

export default async function createEvent({ date, coords }) {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set("Content-Type", "application/json")
  requestHeaders.set("X-Insert-Key", process.env.NEXT_PUBLIC_INSERT_KEY || "")

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify([{ eventType: "Sighting", x: coords[0], y: coords[1], date }]),
  })

  return response.json()
}

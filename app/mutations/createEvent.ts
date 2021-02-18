const URL = `https://insights-collector.newrelic.com/v1/accounts/${process.env.NEXT_PUBLIC_ACCOUNT_ID}/events`

export default async function createEvent({ date, coords }) {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Insert-Key": process.env.NEXT_PUBLIC_INSERT_KEY,
    },
    body: JSON.stringify([{ eventType: "Sighting", x: coords[0], y: coords[1], date }]),
  })

  return response.json()
}

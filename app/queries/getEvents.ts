const URL = "https://api.newrelic.com/graphql"

// Query set to "1 HOUR AGO" for demo purposes only. In reality, this would be over a longer period of time.
const query = `{ actor { account(id: ${process.env.NEXT_PUBLIC_ACCOUNT_ID}) { nrql(query: \"SELECT x, y, date FROM Sighting SINCE 1 HOUR AGO\") {results}}}}`

export default async function getEvents() {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set("Content-Type", "application/json")
  requestHeaders.set("API-Key", process.env.NEXT_PUBLIC_API_KEY || "")
  const response = await fetch(URL, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify({ query, variables: null }),
  })

  return response.json()
}

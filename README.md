# MonarchMap

This is my entry for the [DEV x New Relic hackathon](https://www.therelicans.com/therelicans/combat-climate-change-and-earn-prizes-with-hack-the-planet-4g5).

## Tech stack

- [Blitz.js](https://blitzjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Mapbox](https://www.mapbox.com/)
- [New Relic](newrelic.com)

## Getting Started

To locally run this app, you'll need your own set of API keys for Mapbox and New Relic in `.env.local`:

```
NEXT_PUBLIC_ACCOUNT_ID=
NEXT_PUBLIC_INSERT_KEY=
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_MAPBOX_TOKEN=
```

To make use of New Relic's browser monitoring, you'll also need to enter the JavaScript file in `public/NewRelicScript.js`.

Run the Blitz.js app in the development mode.

```
blitz dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

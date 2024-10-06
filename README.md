# Horizon HDFC site

This is a site for the Horizon HDFC Residential Cooperative.

## Tech
- **Astro**: Content-Driven Javscript Web Framework 
- **Bootstrap**: CSS Framework
- **SCSS**: Additional Styling

## Commands
All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deployment
Vercel is used to deploy this site: https://vercel.com/stefonsimmons-projects/horizonhdfc600
- deployment configuration [here](/astro.config.mjs)
- output dir: `.vercel/output`

## Rendering
This is a static-first generated (SSG) site. The **Home** and **Event Space Signup** pages are server-side rendered (SSR) due to interactivity needed to load Google CMS data.
- Enabled SSR via [the Vercel Adapter](https://docs.astro.build/en/guides/deploy/vercel/#adapter-for-ssr)

## Project Structure
- `src/pages/`: Each page is exposed as a `route` based on its file name.
- `src/components/`: has Astro components used within `pages`
- `src/layouts`: rendered on every `page`
- `src/content`: `markdown` content used within `.astro` files

Any static assets, like images, can be placed in the public/ or assets/ directory.

## Resources

### Google APIs (Apps Scripts)
> From [Horizon CMS](https://docs.google.com/spreadsheets/d/1Yzgelw9d3JjGJzMrwV_xbOUDCCZ1XpACX4oXlvujTUw/edit?usp=sharing) (google sheet)


`getEventSpaceBookings` (**API Sample**)

```json
{
  "data": [
    {
      "timestamp": "2024-10-05T01:46:24.000Z",
      "fullName": "Stefon Simmons",
      "apartment": "9F",
      "email": "hdfc.president@googlegroups.com",
      "phone": 5404982323,
      "space": "Rooftop Terrace",
      "eventDate": "2024-10-05T04:00:00.000Z",
      "startTime": "1899-12-30T22:32:11.000Z",
      "endTime": "1899-12-31T01:32:11.000Z",
      "description": "Hangout with People",
      "numOfAttendees": 8,
      "agreement": "I acknowledge that I have read and agree to comply with Horizon HDFC’s building policies for event and space usage.",
      "isApproved": true
    },
    {
      "timestamp": "2024-10-05T01:46:24.000Z",
      "fullName": "Ashlea Morgan",
      "apartment": "9F",
      "email": "hdfc.secretary@googlegroups.com",
      "phone": 646466232,
      "space": "Rooftop Terrace",
      "eventDate": "2024-10-08T04:00:00.000Z",
      "startTime": "1899-12-30T22:32:11.000Z",
      "endTime": "1899-12-31T01:32:11.000Z",
      "description": "Hangout",
      "numOfAttendees": 8,
      "agreement": "I acknowledge that I have read and agree to comply with Horizon HDFC’s building policies for event and space usage.",
      "isApproved": false
    }
  ]
}
```

`getAnnouncements` (**API Sample**)

```json
{
  "data": [
    {
      "id": 1,
      "heading": "Some New update",
      "detail": "We’re excited to introduce our new building team members: Sabrina, our super, and Travis, our porter! They’ll be helping to keep the building running smoothly and are eager to meet everyone in the community. Beautiful work so far. you do wonderful work you two, OK?",
      "date": "2021-11-02T04:00:00.000Z"
    },
    {
      "id": 2,
      "heading": "Elections Results are in!",
      "detail": "Congrats something something something",
      "date": "2023-10-20T04:00:00.000Z"
    }
  ]
}
```

## Styled Calendar
https://app.styledcalendar.com/calendars

> need horizon hdfc google access
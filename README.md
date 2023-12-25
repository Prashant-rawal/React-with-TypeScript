<h1 align="center">React with TypeScript</h1> <br>

<p align="center">
  Lets have fun learning React with typeScript
</p>

## Get Started

1. Set up Node.js v14+
1. Clone this repo
1. Run `npm install`
1. Run `npm run dev` to start the dev server
1. Open http://localhost:3000 in a browser

## meta.json

Each **section** (e.g. inside of `03-section-three` folder) folder can have a meta.json file, and is totally optional.

- _title_ – an override for the title of the section. Frequently useful for capitalization e.g. `JS Tools` instead of `Js Tools`.
- _icon_ – so you can set the icon used in the home page and the header. These icons are pulled from [the free Font Awesome v5 icons](https://fontawesome.com/v5.15/icons). If you want [fa-hammer](https://fontawesome.com/v5.15/icons/hammer), use "hammer" as the value for icon.

## highlight.js Theme

The code blocks use [Highlight.js](https://highlightjs.org/static/demo/). By default it will use `a11y-light` as the theme for the code blocks. Change the CSS import in `pages/_app.js` to the theme you want to use.

## GitHub Pages / GitHub Actions

By default this repo works with GitHub Pages. Just make sure you set the `productionBaseUrl` in the course.json to the name of the repo.

It also includes a GitHub Action to automatically deploy to your gh-pages branch. Just make sure that your repo has GitHub Pages enabled and the branch is set to gh-pages. If you're not deploying to GitHub Pages go ahead and delete the `.github` directory.

By default the GitHub Action looks for a `main` branch, so be sure you're using that instead of `master`.

## npm commands

- `npm run dev` - Next's dev command. Start a local dev server. Note if you have a productionBasePath set in your course.json, your dev server will respect that (so you don't mess up your paths in production.)
- `npm run build` - Build your site for production. This will still include the Next.js server run time. Use this if you're using something like Vercel to host your site
- `npm run export` - Builds your site statically, use this if you're going to deploy to GitHub Pages, S3, or somewhere else with no server. This will run next build and then next export (no need to run build yourself first.)
- `npm run start` - Start an already-built server.
- `npm run csv` – Will generate the CSV of the metadata from your course. Note you may have to run build first, depending on your csvPath.
- `npm run seo` – Using ChatGPT, every file that does not have a description, ChatGPT will generate a description and keywords and write them to the file. Requires you to set a valid `OPENAI_API_KEY` (which means having a paid OpenAI account) using a [.env](https://github.com/motdotla/dotenv) or just by setting it in the environment. If a description already exists, this will skip it.

## Analytics

By default this doesn't generate any analytics.

## License

The **code** is this repo is licensed under the Apache 2.0 license.

I include the CC-BY-NC-4.0 license for the content; this is what I recommend you license your **content** under: anyone can use and share the content but they cannot sell it; only you can.

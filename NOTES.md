### Commands
- `npm create vite@latest` for creating the project
- `npm install -D tailwindcss postcss autoprefixer` to add tailwind css and plugins


### Console in android chrome
- bookmark an empty page
- edit the URL and paste the below code segment there and save it with a bookmark name
- visit the page where you wanna have the console
- go to the top bar and search the bookmark name
- you should have a small button at the very bottom by now
- for explaination w/ screenshots -> `https://dev.to/asaoluelijah/how-to-access-dev-tool-on-mobile-browsers-14nd`

#### Code Segment
```
javascript:(function () { var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();
```

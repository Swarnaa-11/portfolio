# Swarna Agarwal | Portfolio

A static portfolio website (HTML, CSS and JavaScript). No build step and no dependencies, so it runs on GitHub Pages as it is.

## Files
- `index.html` the page structure
- `style.css` all styling, including the dark and light themes (colours are at the top of the file)
- `script.js` all content (projects, experience, skills), interactions and the game
- `assets/` project images

## Put it online with GitHub Pages
1. Create a free account at github.com and click **New repository**. Name it `portfolio` (or `yourusername.github.io` to get the shortest address). Set it to **Public**.
2. On the repository page click **Add file > Upload files**. Drag in `index.html`, `style.css`, `script.js` and the whole `assets` folder, then click **Commit changes**.
3. Go to **Settings > Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, choose branch **main** and folder **/ (root)**, then click **Save**.
4. Wait about a minute and refresh. Your link appears at the top of that page: `https://yourusername.github.io/portfolio/`.

## Use your own domain (optional)
Buy a domain, then in **Settings > Pages > Custom domain** enter it and follow the DNS instructions GitHub shows.

## Add or edit a project
Open `script.js` and find the list called `P` near the top. Copy one whole project block (from `{slug:` to its closing `}`), paste it after the last one and change:
- `slug` (a short lowercase name with dashes), `title`, `year`, `type`, `intro`
- `cover` and the images in `gal`: each image key refers to a file listed in the `IMG` object at the very top. Add your new picture to `assets/` and add a line such as `"my_image": "assets/my_image.jpg"` to `IMG`.
- `tag`: `'ux'` for product work or `'art'` for art and photography
- `meta`, `steps` and `out`: the details, approach and outcome text
- `lay`: `'gr'` for a grid gallery, `'ms'` for a photo masonry layout

Keep images under about 400 KB each (JPEG, around 1400 px wide) so the site loads quickly.

## Edit text, colours and links
- Name, hero line, About text and footer: `index.html`
- Experience, skills and "How I work": the `EXP`, `SK` and `CAP` lists in `script.js`
- Colours: the `:root` block at the top of `style.css`
- Email and LinkedIn links: search for `swarnahsj@gmail.com` in `index.html`

## Test on your computer
Double-click `index.html` to open it in your browser. Changes show when you refresh.

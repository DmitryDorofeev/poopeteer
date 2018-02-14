# Poopeteer

## Zero-configuration library for ui testing based on puppeteer and jest

### Usage

1. Install poopeteer

```
npm install -g poopeteer
```

2. Create simple test

```js
// index.test.js

describe('awesome test', () => {
  it('something will be ok', async () => {
    page = await poopeteer.newPage()

    await page.goto('https://google.com')
    await page.setViewport({ width: 1024, height: 768 })
    await page.screenshot({path: 'google.png', fullPage: true})

    await page.close()
  })
})

```

3. Run tests with `poopeteer` command

### Usage with docker

1. Create simple test

```js
// index.test.js

describe('awesome test', () => {
  it('something will be ok', async () => {
    page = await poopeteer.newPage()

    await page.goto('https://google.com')
    await page.setViewport({ width: 1024, height: 768 })
    await page.screenshot({path: 'google.png', fullPage: true})

    await page.close()
  })
})

```

3. Run tests with `docker run --shm-size 1G --rm -v $(pwd):/src/tests dmitrydorofeev/poopeteer poopeteer` command

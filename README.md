# Poopeteer

## Zero-configuration library for ui testing based on puppeteer and jest

### Usage

1. Install poopeteer

```
npm install -g poopeteer
```

2. Create simple test

```js
describe('awesome test', () => {
  it('something will be ok', async () => {
    page = await poopeteer.newPage()

    await page.goto('https://google.ru')
    await page.setViewport({ width: 1026, height: 768 })
    await page.screenshot({path: 'create.png', fullPage: true})

    await page.close()
  })
})

```

3. Run tests with `poopeteer` command

describe('test tests', () => {
  it('something will be ok', async () => {
    page = await poopeteer.newPage()

    await page.goto('https://beepcar.ru')
    await page.setViewport({ width: 1026, height: 768 })
    await page.screenshot({path: 'create.png', fullPage: true})

    await page.close()
  })
})

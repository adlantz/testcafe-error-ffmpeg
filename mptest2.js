const RED_PAGE   = 'http://time.com';
const GREEN_PAGE = 'http://https://usa.gov/';

fixture `BasicMultiPage2`
    .page(RED_PAGE);

test('Multiple page test', async t => {
    await t.wait(2000)

    const child = await t.openWindow(GREEN_PAGE);

    await t.wait(2000)
    await t.openWindow(RED_PAGE);
    await t.wait(2000)
    await t.switchToWindow(child);
    await t.wait(2000)
});

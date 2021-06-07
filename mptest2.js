const RED_PAGE   = 'https://nodejs.org/en/';
const GREEN_PAGE = 'https://github.com/';

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

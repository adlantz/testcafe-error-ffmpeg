const RED_PAGE   = 'http://google.com';
const GREEN_PAGE = 'http://https://testcafe.io/';

fixture `BasicMultiPage1`
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

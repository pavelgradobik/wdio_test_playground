describe('Website', function () {
  it('can be opened', async function () {
    await browser.url('/');
    const logo = await $('#header_logo');
    expect(logo).toBeDisplayed();
  });
});

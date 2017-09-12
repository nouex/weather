import iconToUrl from "./iconToUrl"

describe('iconToUrl()', function () {
  it("replaces `icon` with the relative public/ url", function () {
    const res = iconToUrl("rabbit")
    expect(res).toBe("./icons/rabbit.png")
  })
});

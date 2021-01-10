const Sample = require("../../src/sample.js");

describe("SampleJS", () => {
  test("コンストラクタで指定したIDが取得できること", () => {
    expect(new Sample("hori").id).toEqual("hori");
  });
});

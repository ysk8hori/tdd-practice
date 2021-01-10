const SampleJS = require("../src/sampleJs.js");

describe("SampleJS", () => {
  test("コンストラクタで指定した名前が取得できること", () => {
    expect(new SampleJS("hori").name).toEqual("hori");
  });
});

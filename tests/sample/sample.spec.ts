import { Sample } from "../../src/sample/sample";

describe("Sample", () => {
  test("コンストラクタで指定した名前が取得できること", () => {
    expect(new Sample("hori").name).toEqual("hori");
  });
});

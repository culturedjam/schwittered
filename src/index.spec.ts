import * as indexExports from "./index";

test("ensure that we're able to test all the things", () => {
  expect(indexExports).toMatchObject({ components: {} });
});

import micro from "micro";
import test from "ava";
import listen from "test-listen";
import request from "request-promise";
import app from ".";

test("init tests", async t => {
  const service = micro(app);

  const body = await request(await listen(service));

  t.deepEqual(JSON.parse(body), { title: "Welcome to Micro" });
  service.close();
});

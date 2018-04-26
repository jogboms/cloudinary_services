import micro from "micro";
import test from "ava";
import listen from "test-listen";
import request from "request-promise";
import app from ".";

test("init tests", async t => {
  const service = micro(app);

  const body = await request(await listen(service));
  const keys = [
    "public_id",
    "version",
    "signature",
    "width",
    "height",
    "format",
    "resource_type",
    "created_at",
    "tags",
    "bytes",
    "type",
    "etag",
    "placeholder",
    "url",
    "secure_url",
    "overwritten",
    "original_filename",
    "original_extension"
  ];
  t.deepEqual(Object.keys(JSON.parse(body)), keys, "Hurray! Legooo!");
  service.close();
});

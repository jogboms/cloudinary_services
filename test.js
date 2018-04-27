import micro from "micro";
import test from "ava";
import listen from "test-listen";
import request from "request-promise";
import app from ".";

const { parse, stringify } = JSON;

test("test w/o url", async t => {
  const service = micro(app);
  const uri = await listen(service);
  const body = await request({
    method: "POST",
    uri: uri
  });
  t.deepEqual(parse(body), { statusCode: 400 });
  service.close();
});

test("test w/ url", async t => {
  const service = micro(app);
  const uri = await listen(service);
  const body = await request({
    method: "POST",
    uri: uri,
    body: stringify({
      url:
        "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350"
    })
  });
  t.deepEqual(Object.keys(parse(body)), ["url", "public_id"]);
  service.close();
});

test("test w/ url & public_id", async t => {
  const service = micro(app);
  const uri = await listen(service);
  const body = await request({
    method: "POST",
    uri: uri,
    body: stringify({
      url:
        "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
      public_id: "PUBLIC_ID"
    })
  });
  t.deepEqual(Object.keys(parse(body)), ["url", "public_id"]);
  service.close();
});

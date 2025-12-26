import { db } from "./index";

async function test() {
  const result = await db.execute("select 1");
  console.log(result);
}

test();
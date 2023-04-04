import { test, expect } from "@jest/globals";
import Metal from "@getmetal/metal-sdk";

import { MetalRetriever } from "../metal.js";

test("MetalRetriever", async () => {
  const MetalSDK = Metal.default;
  const client = new MetalSDK(
    process.env.METAL_API_KEY!,
    process.env.METAL_CLIENT_ID!,
    process.env.METAL_APP_ID
  );
  const retriever = new MetalRetriever({ client });

  const docs = await retriever.getRelevantDocuments("hello");

  expect(docs.length).toBeGreaterThan(0);

  console.log(docs);
});
import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { randomBytes } from "https://deno.land/std@0.166.0/node/crypto.ts";

serve((req) => {
  const url = new URL(req.url);
  const size = isNaN(parseInt(url.pathname.slice(1))) ? 16 : parseInt(url.pathname.slice(1));
  return new Response(randomBytes(size).toString("hex"), {
    headers: { "content-type": "text/plain" },
  });
});

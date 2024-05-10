// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $auth_index from "./routes/auth/index.tsx";
import * as $client_id_ from "./routes/client/[id].tsx";
import * as $client_layout from "./routes/client/_layout.tsx";
import * as $client_home_index from "./routes/client/home/index.tsx";
import * as $client_new_index from "./routes/client/new/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $auth from "./islands/auth.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/auth/index.tsx": $auth_index,
    "./routes/client/[id].tsx": $client_id_,
    "./routes/client/_layout.tsx": $client_layout,
    "./routes/client/home/index.tsx": $client_home_index,
    "./routes/client/new/index.tsx": $client_new_index,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/auth.tsx": $auth,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;

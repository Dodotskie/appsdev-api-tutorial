import app from "@/app";
import { env } from "@/config/env";

app.listen(env.PORT, () => {
  console.log(`API running at ${env.BACKEND_URL}`);
  console.log(`Environment: ${env.NODE_ENV}`);
});
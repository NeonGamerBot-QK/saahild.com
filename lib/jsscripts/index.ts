import { startingLog } from "./log";
import { runTitle } from "./changing_title";
import { injectOneko } from "./oneko";

if (process.client) {
  // DOM-related logic here
  // onMounted(() => {
  startingLog();
  runTitle();

  injectOneko();

  // });
}

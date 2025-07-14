import { startingLog } from "./log";
import { runTitle } from "./changing_title";
import { injectOneko } from "./oneko";
startingLog();
runTitle();

injectOneko();
umIdentify({
  semi_perm_id: localStorage.getItem("semi_perm_id")
    ? localStorage.getItem("semi_perm_id")
    : (localStorage.semi_perm_id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)),
  temp_id: Date.now() + Math.random().toString(36).substring(2, 15),
  user_agent: navigator.userAgent,
});

let title0: null | string = null;
let interId: any = null;
const isDev = process.env.NODE_ENV !== "production";

export function runTitle() {
  if (interId) clearInterval(interId);
  interId = setInterval(() => {
    if (document.title !== "Come Back :(") {
      title0 = document.title;
    }
    window.document.documentElement.className = "duration-500 ease-in-out ";
    if (document.hasFocus()) {
      document.title =
        title0?.toLowerCase() === "react app"
          ? "Saahild.com"
          : (title0 ?? "Saahild.com");
      window.document.documentElement.style.filter = "";
    } else {
      document.title = "Come Back :(";
      if (!isDev) window.document.documentElement.style.filter = "blur(30px)";
    }
  }, 200);
}
export function stopTitle() {
  if (!interId) return false;
  return clearInterval(interId);
}
// runTitle()

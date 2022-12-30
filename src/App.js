import { Suspense } from "react";
import { WebAppRouting } from "./routes/index.routes";
import { getAppName } from "./utils";

function App() {
  console.log(getAppName());

  return (
    <Suspense fallback={<p className="text-center" dir="rtl">در حال بارگذاری ...</p>}>
      <WebAppRouting />
    </Suspense>
  );
}

export default App;

import { Suspense } from "react";
import { WebAppRouting } from "./routes/index.routes";
import { getAppName } from "./utils";

function App() {
  console.log(getAppName());

  return (
    <Suspense fallback={<p>در حال بارگذاری ...</p>}>
      <WebAppRouting />
    </Suspense>
  );
}

export default App;

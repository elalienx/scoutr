// Node modules
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

// Project files
import NavigationBar from "components/navigation-bar/NavigationBar";

// Decorators
function DecoratorRouter({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <div className="page" style={{ maxWidth: "1200px", width: "100%" }}>
        {children}
      </div>
    </BrowserRouter>
  );
}

/**
 * This component is wrapped in BrowserRouter to support routing
 * as it includes a Link component, which requires a Router context
 * to function correctly.
 */
export default {
  Default: (
    <DecoratorRouter>
      <NavigationBar response_rate={42} />
    </DecoratorRouter>
  ),
  "No responses": (
    <DecoratorRouter>
      <NavigationBar response_rate={0} />
    </DecoratorRouter>
  ),
  Empty: (
    <DecoratorRouter>
      <NavigationBar response_rate={-1} />
    </DecoratorRouter>
  ),
};

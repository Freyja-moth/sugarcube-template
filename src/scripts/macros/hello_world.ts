import { createRoot } from "react-dom/client";
import { MacroContext, MacroDefinition } from "twine-sugarcube";
import HelloWorld from "../widgets/hello_world"

export default class HelloWorldMacro implements MacroDefinition {
  handler = function(this: MacroContext) {
    const root = document.createElement("div");

    createRoot(root).render(HelloWorld());

    this.output.append(root);
  }
}

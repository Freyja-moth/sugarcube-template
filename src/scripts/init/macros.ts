import { MacroAPI, MacroDefinition } from "twine-sugarcube";
import HelloWorldMacro from "../macros/hello_world";

const MACROS: [string, MacroDefinition][] = [
  ["HelloWorld", new HelloWorldMacro()],
];

export default function register_macros(macros: MacroAPI) {
  for (const [name, definition] of MACROS) {
    macros.add(name, definition);
  }
} 

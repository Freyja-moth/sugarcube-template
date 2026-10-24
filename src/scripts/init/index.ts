import register_macros from "./macros";
import init_story_settings from "./settings";
import init_setup_object from "./setup";
import init_story_variables from "./variables";

export default function init() {
  init_setup_object(setup);
  init_story_variables(State.variables);
  init_story_settings(settings);
  register_macros(Macro);
}

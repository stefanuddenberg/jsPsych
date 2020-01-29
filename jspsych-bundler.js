// Bundles the jsPsych package together so it isn't a global variable
import jsPsych from "./jspsych";
import instructions from "./plugins/jspsych-instructions";

jsPsych.plugins["instructions"] = instructions;

export default jsPsych;

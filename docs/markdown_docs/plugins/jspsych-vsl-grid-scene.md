# jspsych-vsl-grid-scene plugin

The VSL (visual statistical learning) grid scene plugin displays images arranged in a grid. This plugin can be used to replicate the experiments described in:

Fiser, J., & Aslin, R. N. (2001). Unsupervised statistical learning of higher-order spatial structures from visual scenes. *Psychological Science, 12*(6), 499-504.


## Parameters

This table lists the parameters associated with this plugin. Parameters with a default value of *undefined* must be specified. Other parameters can be left unspecified if the default value is acceptable.

Parameter | Type | Default Value | Description
----------|------|---------------|------------
stimuli | array | *undefined* | Array of stimuli. Each stimulus is an array that defines a grid. Grids should be declared as two dimensional arrays in `[row][col]` order, with paths to image files in the locations where images are displayed, and 0 in blank spaces. See example below.
image_size | array | `[100, 100]` | Array specifying the width and height of the images to show. Grid cells will also be this size, with 10% padding.
timing_duration | numeric | 2000 | How long to show the stimulus for in milliseconds. 

## Data Generated

In addition to the [default data collected by all plugins](), this plugin collects the following data for each trial.

Name | Type | Value
-----|------|------
stimulus | JSON string | JSON encoded array of the stimulus shown on the trial.

### Stimulus Creation Method

The plugin also includes a public method for generating the grid scene stimuli that the plugin uses. You can use this method to create HTML strings that produce the stimuli, and then incorporate the stimuli in other plugins. To use this method, include the plugin script on the page and then call the method like this:

```javascript

var pattern = [
                ["img/1.gif", "img/2.gif", 0],
                [ 0, "img/3.gif", 0],
                ["img/5.gif", "img/4.gif", 0]
            ];

var image_size = 100; // pixels

var grid_stimulus = jsPsych['vsl-grid-scene'].generate_stimulus(pattern, image_size);

// grid_stimulus will now contain a string (NOT an HTML DOM object) that you can
// pass into other plugins that accept HTML stimuli as input, such as jspsych-categorize.

```

## Example

#### Basic example

```javascript
var scenes = [
    [
        ["img/1.gif", "img/2.gif", 0],
        [ 0, "img/3.gif", 0],
        ["img/5.gif", "img/4.gif", 0]
    ],
    [
        [ 0, 0, "img/6.gif"],
        [ "img/10.gif", "img/7.gif", 0],
        [ 0,"img/8.gif", "img/9.gif" ]
    ]
];

// create vsl block for jspsych
var vsl_block = {
    type: 'vsl-grid-scene',
    stimuli: scenes
};

```
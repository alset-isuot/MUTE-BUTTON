# Goto directory react-mute-button/MUTE-BUTTON
# Terminal Command: create new react application
npx create-react-app mute
# Terminal Command: check that 'mute' was created
ls
# (for fun lol) Terminal Command: opens vs code window -- changes editior to just show the directory in editor that we currently are in when using command:
code -r .

# Terminal Command: change current directory to mute
cd mute
# Terminal Command: ls to make sure package.json is listed, then run terminal command:
npm start

# we're going to build this out using functional base components -- if there's time we'll go back and refactor it using class based components
## Move icons folder into src folder -- REMEMBER we only have access to assets within our src (source) directory!
## Goto scr/App.js -- delete everything inside the initial <div> -- create <button> inside <div>
### Can go into App.css to make button look better lol --- added margin-top: 15%; to .App
## Add event listener for button within App.js -- onClick = {() => console.log('clicked')} -- note: () => is an anonymous function
## Now we want to store a toggle of, Is this muted? or no
Inside the console.log of the button onClick (in App.js), we want to create a Function called toggleMute, that toggles true or false, (on or off), yes no, ect --- change <button onClick = {() => console.log('clicked')}>Is this muted?</button>   --to-- <button onClick={toggleMute}>Is this muted?</button>

# Move button onClick into its own component
## In src directory create a components folder, inside of there, create a buttons folder, inside of there, create a MuteButton.js component file
### Download Extension, "React js code snippets" to be able to quickly do next part
### On MuteButton.js file, type 'rsc' to create a ReactStatelessComponent code snippet; it "Creates a stateless React component without PropTypes and ES6 module system (Reactjs code snippets)"
## Code out MuteButton.js file, put the Icon images to use.

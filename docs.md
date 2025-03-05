# LAB: Bouncing Lab
HTML - Week 2

In this lab, you'll build a web page that displays bouncing objects based on user input. The form will ask for text, a color, and a number. Once submitted, the page will create the specified number of bouncing objects with the provided text and color. The JavaScript and CSS for the animations are already provided—you'll focus on building and integrating the form.

Below is a preview of what your final project will look like:

<video width="600" controls> <source src="./Bouncing Screensaver - Google Chrome 2025-02-26 11-25-51.mp4" type="video/mp4"> Your browser does not support the video tag. </video>

Let's get started!



## Fork, Clone, and Open in VS Code

Fork the Repository
Go to the repository page.
Click on the Fork button at the top-right corner.
<img src="assets/fork.gif" width="65%" style="margin: auto; display: block;" alt="Fork Repository">
B. Clone Your Forked Repository
You have two options for cloning:

Using VS Code (Graphical Method):

Open VS Code.
Use the built-in Git interface to clone your repository.
<img src="assets/clone-vscode.gif" width="85%" style="margin: auto; display: block;" alt="Clone in VS Code">
Using the Command Line:

Open your terminal. Run the following command (replace with your repository URL):

git clone https://github.com/your-username/your-repository.git
<img src="assets/clone-cmd.gif" width="85%" style="margin: auto; display: block;" alt="Clone with Command Line">
2. Setting Up Live Server in VS Code
For this lab, you'll use the Live Server extension to preview your changes in real time.

What is Live Server?
Live Server launches a local development server that automatically refreshes your browser when you save your HTML files.

## How to Install & Use Live Server
1. Open VS Code.
2. Go to Extensions (Ctrl+Shift+X on Windows/Linux or Cmd+Shift+X on Mac).
3. Search for Live Server and click Install.
4. Open your HTML file.
5. Right-click anywhere in the file and select "Open with Live Server" (or click the "Go Live" button in the status bar).
6. Your default browser will open with a live preview of your file.
<img src="assets/liveserver.gif" width="85%" style="margin: auto; display: block;" alt="Live Server">

3. Understanding the Code

A. HTML Form Elements

Before diving into the lab, review these essential HTML elements:

`<form>`:
Serves as a container for interactive controls that submit user data.

`<label>`:
Provides a caption or description for an input element, enhancing accessibility.

`<input>`:
Creates interactive controls for forms, offering various types (text, number, color, etc.) to collect user data.

`<button type="submit">`:
A button that submits the form data.

Here’s an example of a simple form:


```html
<form>
  <div>
    <label for="bouncerCount">Number of Bouncers:</label>
    <input type="number" id="bouncerCount" min="1" placeholder="Number" required>
  </div>
  <button type="submit">Submit</button>
</form>
```

Below is an image showing a sample form:

<img src="./Field called input in html.png" width="300" height="500" style="margin: auto; display: block;" alt="Sample Form">

B. CSS & JavaScript Overview CSS:

The CSS styles (provided in the project) set up the shapes, colors, and layout. For example:

```css
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: #000;
  position: relative;
}
```

This resets default styles and creates a full-screen canvas.

JavaScript:

The JavaScript handles the animations and form submissions. Once you build the form, the code will use your input to create and animate bouncing objects.

## Building the Bouncing Lab

Step 1: Create the Form

Location:
Insert your form inside the `<div id="bouncerForm">` element.

Example:
```html
<div id="bouncerForm">
  <form id="form" action="#">
    <div>
      <label for="bouncerCount">Number of Bouncers:</label>
      <input type="number" id="bouncerCount" min="1" placeholder="Number" required>
    </div>
    <div>
      <label for="bouncerText">Bouncer Text:</label>
      <input type="text" id="bouncerText" placeholder="Enter text" required>
    </div>
    <div>
      <label for="bouncerColor">Bouncer Color:</label>
      <input type="color" id="bouncerColor" value="#FF0000" required>
    </div>
    <div>
      <button type="submit">Start</button>
    </div>
  </form>
</div>
```

This form collects the number of bouncers, the text to display, and the color of the bouncing objects.

Step 2: Test Your Form

1) Save your changes.
2) Open your project using Live Server.
3) Fill out the form and submit it to see the bouncing objects come to life.

Step 3: Explore the Code

CSS Styling:

Review how the provided CSS styles the bouncing objects (class .bouncer) and the form.
JavaScript Animation:
Inspect the JavaScript to see how it calculates positions and updates the movement of the bouncing objects.

## Final Tips & Resources

Experiment:
Modify input values and styles to see different effects.

Review HTML Basics:
If you need a refresher on HTML forms, check out:

1) MDN Web Docs: HTML Forms
2) MDN Web Docs: HTML Input Element

Ask for Help:

If you encounter issues, reach out to your instructor or classmates.

Conclusion:

1) In this lab, you learned how to:

2) Fork and clone a repository.

3) Set up a live development environment with VS Code and Live Server.

4) Build an interactive HTML form that collects user input.

5) See how HTML, CSS, and JavaScript work together to create dynamic web pages.

By following these steps, you'll create a fun bouncing lab that brings your code to life. Now, it's time to code, experiment, and have fun!

Happy coding!


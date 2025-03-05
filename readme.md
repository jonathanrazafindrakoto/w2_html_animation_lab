# LAB: Bouncing Lab

**HTML - Week 2**


We will be working on the bouncing lab today. It is just as it is shown below. There is a form that asks for text, color and the number. It then displays bouncing objects as specified, as shown below:

<video width="600" controls>
    <source src="./Bouncing Screensaver - Google Chrome 2025-02-26 11-25-51.mp4" type="">
</video>


We will slowly create this form. We will first build the form, then work on the animations. The JavaScript and CSS have already been provided for you.

Let's get started!

![Lets get started](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHpmMnc2Z3ppaWFrZWRjOGcweHExbzNzNmxjbWZ2dzZuYTQxcnFzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HyxK9xIodu1mb2yVnN/giphy.gif)


## 1. Fork this repository, clone, and open in VS code

To get started with the lab, you need to fork the repository:

1. Click on the **Fork** button at the top-right corner of the repository page.
<img src="assets/fork.gif" width="85%" height="" style="margin-x: auto">

2. Clone your new forked repository on your laptop
   2 ways possible to clone:
   - Clone with VS code (without line command):
     <img src="assets/clone-vscode.gif" width="85%" height="" style="margin-x: auto">  
   - Clone using the git clone command:
     <img src="assets/clone-cmd.gif" width="85%" height="" style="margin-x: auto">  


## 2. New Tool: Live Server + VS Code

For this lab, we will use the **Live Server** extension in VS Code to preview our HTML changes in real time.

### What is Live Server?

Live Server is a **VS Code extension** that allows you to launch a local development server with **auto-refresh** whenever you save changes to your HTML file.

### How to Install & Use Live Server

1. Open **VS Code**.
2. Go to **Extensions** (Ctrl+Shift+X or Cmd+Shift+X on Mac).
3. Search for **Live Server** and install it.
4. Open your **HTML file** in VS Code.
5. Right-click and select **"Open with Live Server"**, OR click on the **"Go Live"** button in the status bar.
6. Your browser will open with the live preview of your file.
<img src="assets/liveserver.gif" width="85%" height="" style="margin-x: auto">  

---

## 3. Lab

1) First you are going to see two tags are different from the basic template, style and script. When you look at it, you will see bunch of stuff you are not going to recognize.

For the content inside the style part, it is basically giving the shapes and the color. We will learn more about CSS next week. Just to give an idea, here is a sample:

```
    html, body <= which element you want to style{
      margin: 0; <= style description
      padding: 0;
      height: 100%;
      overflow: hidden;
      background-color: #000;
      position: relative;
    }

```

There are some html elements that need to be introduced before we proceed further.

1) `<form>`:  is a document section containing interactive controls for submitting information. It basically a way to contain the form.
2) `<label>`: is a caption or a label for an item on the webpage
3) `<input>`: in HTML creates interactive controls for forms, offering various input types and attributes to collect user data.
4) `<button type="submit">`:  A button that submits the form data to the specified action URL.

Here is an example of what it looks like in action:

<img src="./Field called input in html.png" width="300" height="500" />




For the content inside style, it is javascript. It handles the movement and the form submitting. This is how a simple form looks like

    <form>
      <div>
        <label for="bouncerCount">Number of Bouncers:</label>
        <input type="number" id="bouncerCount" min="1" placeholder="Number" required>
      </div>
    </form>

We can finally start working on the form. We will put this into the `<div id="bouncerForm">` element.

```html
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
```

Each input is with a label to help people unnderstand what the input is for. Keep the classes same as in the text, because JavaScript uses the class names to make the animation works.

Now, go ahead and fill out the form. When you click submit, it should make a lot of bouncing objects with the name, color and text specified in the form.































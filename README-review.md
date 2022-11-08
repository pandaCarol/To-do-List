# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge


Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

1. About data tranfer from parents to child in react
=> if you want to transfer eventlisteners and data through a same funciton, these stuff will be packaged in an object. read the date by using "obj.func" or "obj.array"...
/***/
function NewList(obj) {
    console.log(obj)
    return(
        <section className="addlist">
          <button onClick={(e) => obj.handelClick(e)}>a</button>
          <input type="text" onChange={ (e) => obj.handelChange(e)} value={obj.tdnew}></input>
        </section>
    );
}

2. about useState and useEffect
=>
/***/
function DlSwitch () {
    const [togMode, setTogMode] = useState("light");
    useEffect(() => {
        BgColorUpdate(togMode);
    });

    const bgChange = () => {
        const changeTo = togMode === "dark" ? "light" : "dark";
        setTogMode(changeTo);
    }

    return <input type="button" value={`To${togMode}`} className={togMode} onClick={bgChange}></input>
}

3. about the syntax different between JS and react 
=> onclick(js), onClick(react)
=> class(js), className(react)

4. three way to set up the opacity:
=> background: transparent;
=> opacity: 0.5;
=> ackground rgba(255, 255, 255, 0.5);

5. how to build a button with linear-gradient border *** the different by using <button> and <input type="button">:
  https://segmentfault.com/a/1190000040794056

6. Using "placeholder" to define which type of info the user should input in the input-box
<input type="text" onChange={ (e) => obj.handelChange(e)} placeholder={"Create a new to do..."} value={obj.tdnew}></input>

7. input-box without border as well in aktive staten(in handel change process);
input {
        border: 1px solid rgba(255,255, 255, 0);
        outline: none; 
       }
7. shadow copy and deep copy
https://blog.bitsrc.io/shallow-copy-and-deep-copy-in-javascript-d0ca570cd4cf 

8. about scss



**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

1. about how to custom html and css checkbox: https://www.sliderrevolution.com/resources/css-checkbox/ 

2. 9 Ways to Remove Elements From A JavaScript Array: https://love2dev.com/blog/javascript-remove-from-array/ 

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

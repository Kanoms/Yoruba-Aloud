<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Yoruba_ALoud_Feb_Cohort" />

&#xa0;

  <!-- <a href="https://yoruba_aloud_feb_cohort.netlify.app">Demo</a> -->
</div>

<h1 align="center">Yoruba Learning App Admin Dashboard</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8" />

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8" /> -->

  <img alt="Github stars" src="https://img.shields.io/github/stars/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8" />
</p>

Status

<h4 align="center">
	🚧  Yoruba Learning App 🚀 Under construction...  🚧
</h4>

<hr>

<p align="center">
<a href="#dart-about">About</a> &#xa0; | &#xa0; 
<a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
<a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
<a href="#rocket-api-documentation">API Documentation</a> &#xa0; | &#xa0;
<a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
<a href="#white_check_mark-sections">Sections</a> &#xa0; | &#xa0;
<a href="#memo-license">License</a> &#xa0; | &#xa0;
<a href="https://github.com/Juadebfm" target="_blank">Author</a>

</p>

<br>

## :dart: About

The Yoruba Learning App Dashboard is a central hub within the larger Yoruba Learning App, designed specifically for administrators and instructors. It provides an intuitive and efficient interface for managing user accounts, tracking learner progress, creating and organizing lessons and exercises, and accessing valuable analytics. The dashboard empowers administrators and instructors to effectively monitor and enhance the learning experience, enabling them to make data-driven decisions and ensure the successful implementation of the Yoruba Learning App's comprehensive language learning program.

## :sparkles: Features

:heavy_check_mark: Fetch API\
:heavy_check_mark: REST API\
:heavy_check_mark: SweetAlert;

## :rocket: Technologies

The following tools were used in this project:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [SASS](https://sass-lang.com/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [SweetAlert](https://sweetalert2.github.io/#download)
- [Icons](https://boxicons.com/)
- [Font 1](https://fonts.google.com/specimen/Short+Stack)
- [Font 2](https://coolors.co/fonts)

## :white_check_mark: API Documentation

[YA DOCUMENTATION](https://documenter.getpostman.com/view/16238882/UVsTq2vm#6a750ec7-7063-4a41-8ae5-4c8603b14105)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

Knowledge of :checkered_flag:

- JS Functions
- Event Listeners
- Conditional Statements
- Event Handlers

## :white_check_mark: Sections

### Sign Up Section

Below are the steps needed to actualize the JavaScript Code for the Sign Up section of this project.

- STEP 1 - Get the signup btn using _getElementByID_
- STEP 2 - Set the innerText of the button to _"Sign Up"_
- STEP 3 - Add a _"click"_ eventListener to the button with a callback function that has _event_ as itʻs parameter.
- STEP 4 - prevent the default behaviors of form buttons using _.preventDefault()_ function.
- STEP 5 - Get the inputs using _getElementByID_ and we actually want to get the actual value of all 4 inputs in the signup page, donʻt forget that.
- STEP 6 - At this point, set the _innerText_ value of the _signUpBtn_ to _"Loading..."_
- STEP 7 - Then add the class _"pulse"_ to the _signUpBtn_ using the _classList_ method
- STEP 8 - Write an _if statement_ that checks if the value of the 4 inputs are not empty strings using logical _OR_ operator, e.g _if(getName === "" || getEmail === "" ...)_
- STEP 9 - In the _if Statement_ block throw a sweetalert that tells the users _"All fields are required"_
- STEP 10 - Still in the _if statement_ set the _innerText_ of the _signUpBtn_ to _"sign up"_ and remove the _"pulse"_ class from the button.
- STEP 11 - Write an _else if_ that checks if the confirm password is equal to password, if it is _NOT_ throw a sweetalert that says _password does not match_
- STEP 12 - Still in the _else if_ set the _innerText_ of the _signUpBtn_ to _"sign up"_ and remove the _"pulse"_ class from the button.
- STEP 13 - Now when done with all the checks above, in the last _else_ block create a variable called _signUpData_ and assign a form data object instance to it e.g _new FormData()_
- STEP 14 - Now using the _append()_ method, append the inputs to the _signUpData_ e.g _signUpData.append("name", getName);_
- STEP 15 - Create an object with name _signReq_ and add a property _method_ with value _"POST"_ and a property _body_ with value _signUpData_
- STEP 16 - Now create a variable _url_ and assign the [Signup Api](https://pluralcodesandbox.com/yorubalearning/api/register_admin) to it.
- STEP 17 - Now using the fetch API, do the following:
- STEP 17a - Add the _url_ and _signReq_ to the _fetch()_
- STEP 17b - The first _.then()_ function should receive a _response_ and should convert it to _json()_ e.g _(response) => response.json()_
- STEP 17c - The second _.then()_ should get the _result_ and in there we should have an _if Statement_ that checks if the result status is _"success"_, if it is, throw a sweetalert that says _"success"_ showing the _result message_, then set a timeout of _5000_ seconds that sends the users to _location.href="index.html"_ i.e to the login page, else if all this is falsey, throw a sweet alert that shows _"Registration Unsuccessful!"_, after this set the _innerText_ of the _signUpBtn_ to _"sign up"_ and remove the _"pulse"_ class from the button.
- STEP 18 - get and send the error and itʻs message in the _.catch()_ method e.g _(error) => console.log("error", error)_

### Sign In Section

Below are the steps needed to actualize the JavaScript Code for the Sign In section of this project.

- STEP 1 - Get the signIn button by ID and assign it to a variable _signIn_ in your _signin.js_ file.
- STEP 2 - Change the initially empty text of the button to `Sign In`.
- STEP 3 - Add an event listener to the button with a `click` event and a function that has the `event` parameter passed into it.
- STEP 4 - Prevent the default behavior of buttons using the `event` parameter just passed.
- STEP 5 - Get the inputs and their values from your _index.html_ or whatever you named your signin page.
- STEP 6 - Change the text of the signin button to `Loading...` and add the `pulse` class to the button.
- STEP 7 - Check if the email and password are not empty strings and throw appropriate sweet alert, also at this point change the signin button text back to `Sign In` and remove the `pulse` class from the button.
- STEP 8a - In the else block of the _if Statement_ above do the following:
- 8b - Assign a new _FormData()_ constructor to a variable called _signInData_
- 8c - Append the value of the email input and password input to the newly created constructor e.g _signInData.append("email", email)_
- 8d - Create a new request object and add properties _method:"POST"_ and _body:signInData_
- 8e - Create a variable called _URL_ and add the signin API endpoint to it, [Sign In API Endpoint](https://pluralcodesandbox.com/yorubalearning/api/admin_login)
- STEP 9 - Use the fetch API and pass in the 2 parameters needed namely _URL_ and _signReq_
- STEP 10 - Get the response and call the _json()_ method on it.
- STEP 11 - Get the result and create a function that console logs the result so you can know what is coming from the backend
- STEP 12 - Get the object coming from the backend and store it in your local storage using the _setItem()_ method, it should take 2 parameters namely (1)_"adminObj"_ and (2) _JSON.stringify(result)_ in the second parameter weʻre coverting the object from the backend to json so we can store it in our local storage.
- STEP 13 - Get the stored _"adminObj"_ from the local storage and assign it to a variable called _getAdminObj_
- STEP 14 - Remember that we converted the _result_ to json in `STEP 12` and named it _"adminObj"_ in our localstorage?, now we have to convert it back to an object _const adminObj = JSON.parse(getAdminObj)_
- STEP 15 - Write a if block that checks if the _adminObj_ `hasOwnProperty` of email if so, send the user to `dashboard.html` e.g _if (adminObj.hasOwnProperty("email")) {location.href = "dashboard.html";}_
- STEP 16 - Write a else statement that throws the appropriate `warning` `Login Unsuccessful` if the _if Block_ above is falsey.
- STEP 17 - Change the text of the signin button to `Sign In` and remove the `pulse` class.
- STEP 18 - Finally, catch the error that might be anywhere in this promise statements e.g _.catch((error) => console.log("Error", error));_

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](./LICENSE) file.

Made with :heart: by <a href="https://github.com/Juadebfm" target="_blank">Juadeb Gabriel</a>

&#xa0;

<a href="#top">Back to top</a>

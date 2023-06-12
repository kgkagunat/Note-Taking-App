# Note Taker App:

## Overview

The Note Taker is a dynamic, user-friendly web application, designed to help you stay organized. 
Built with Node.js and Express.js and deployed on Heroku, this application offers a streamlined experience for creating, reading, and deleting notes. 
Your notes are stored in a JSON database so they will be there when you need them.

## Challenges and Acceptance Criteria

This project I was given an acceptance criteria that I had to fulfill. Below is my acceptance criteria.

Overall, building the code for this project was not too bad. I did encounter some challenges, but because I used my class activities as a reference, I found it to be slightly easier than expected.
Most of my code foundation were from my class activites. I did encounter a server timeout in Insomnia. I don't know if it was because I wrote my code in a weird way, but at the time I was using ternary operators.
I then changed the ternary to use "if...else" statements and that seemed to work for some reason. 
I also sometimes get confused on the pathing my files for the backslashes. I incorrectly had too many backslashes and my path wasn't working. But quickly fixed the issue.

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Key Features

- Create new notes with a title and content
- View list of all saved notes
- Click on a note in the list to view its details
- Delete unwanted notes to keep your list tidy

## Installation

This application is deployed online, and you can access it [here](https://pacific-wave-87486.herokuapp.com/). 

For local installation, follow these steps:

1. Clone this repository to your local machine
2. Navigate to the root folder in your terminal
3. Run `npm install` to install the necessary dependencies
4. Start the server with `node server.js` (or `npm start`)
5. Navigate to `localhost:3001` (or your specified PORT) in your browser

## Usage 

The Note Taker is intuitive to use:

1. On the landing page, click "Get Started" to navigate to the notes page
2. View previously saved notes listed on the left side of the page
3. Write new notes by clicking on the "pencil" icon in the top-right, then filling out the title and text fields
4. Click the save icon that appears in the top-right when you have text in both fields to save your note
5. Click the red trash bin icon next to a note to delete it

### Testing API Routes with Insomnia

You can also test the API routes using Insomnia. Here's how to do it:

1. GET request: To fetch all notes, make a GET request to `https://pacific-wave-87486.herokuapp.com/api/notes`.
2. POST request: To create a new note, make a POST request to `https://pacific-wave-87486.herokuapp.com/api/notes`. In the body of your request, include a JSON object with "title" and "text" properties. Here's an example:

    ```json
    {
      "title": "Test Title",
      "text": "Test Text"
    }
    ```

3. DELETE request: To delete a note, make a DELETE request to `https://pacific-wave-87486.herokuapp.com/api/notes/:id`, replacing ":id" with the ID of the note you want to delete. You can find this ID in the response of a GET request.


## License

The Note Taker application is covered under the MIT license.

## Screenshots

![Screen Shot 2023-06-11 at 8 27 02 PM](https://github.com/kgkagunat/Note-Taking-App/assets/127634764/8c0e8e7f-a97e-42ab-9caf-206be0971d05)

![Screen Shot 2023-06-11 at 8 26 39 PM](https://github.com/kgkagunat/Note-Taking-App/assets/127634764/89498169-9064-4d30-9444-c5bbe19ee19c)

![Screen Shot 2023-06-11 at 8 26 49 PM](https://github.com/kgkagunat/Note-Taking-App/assets/127634764/aaf10a5d-6d44-42b5-aaf7-7c5d5236c1f7)




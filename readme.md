# Quizzz

### Install
`npm i`

### Launch the Demo
- `DEMO=true npm start`
- open `http://localhost:3000/screen.html` to open the quiz screen
- open `http://localhost:3000/` to open the player client

### Launch the Quiz
- insert your quiz questions in `questions.js`
- `npm start`
- open `http://IP:3000/screen.html` and present it
- let participant open `http://IP:3000/` to participate

### Question Object
```js
{
  question: "Come si chiama l'azienda in cui lavori?", // HTMLString Question text
  image: "https://www.skillbill.it/images/logo_skillbill_00.svg", // String - Optional image (you can put images in public/images and set this field to "images/image-name.png")
  responses: [ // HTMLString[] - Responses, >= 2, max 6 (can be more but 6 is already a large number of responses)
    "Skillbill",
    "Skillball",
    "Skillbilly",
    "Skillboll",
  ],
  score: 10, // int - Points assigned for the correct answer
  time: 30, // int - Time in seconds available
  correct: 0 // int - Index of the correct response
}
```

### Restart the quiz
Restart the server (the clients reconnect and update themselves)

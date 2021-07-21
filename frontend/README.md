## About Encounter Time
Encounter Time is my own foray into creating an encounter builder for the table-top role-playing game, Dungeons and Dragons. There are a few other out there like Kobald Fight Club, but I like this one, because it is mine.

Built with React, Redux, and for the backend Express and Postgres.

## The future of Encounter Time
I feel like there is a lack of software that is designed to be used at the table, at the physical table. When you hook up a webcam to this website, you will have an array of tools to off load some of the work. It will identify whose turn it is. Put up monster stats. And suggest actions for the monsters to take.

## How to navigate Encounter Time
Routes are in App.js. Main pages are Home.js, UserPage.js, MonsterDetail.js EncounterRunner.js, Signin.js and Signup.js. All in src folder.

## What I learned
In the backend of the project I learned about how to analize SQl quires for speed. There was a jon query that was taking a very long time to perform. After some searching I found out the problem was the join I was using, one large joing across three tables, was the problem. After I switched to two separate joins, speed increased greatly.

In React, this project helped me to become more comfortable writing my own hooks and logic for api queries. I used the useEffect hook to pass information from my display components to the backend api where axios is called. 
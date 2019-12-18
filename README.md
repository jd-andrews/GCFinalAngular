# WouldURather

Peeple Vs. Sheeple is a "would you rather" style game made using the angular 8. It utilizes a database for questions and players as well as two web-API's for faces and advice. It was created as a final project for a front-end bootcamp as part of Grand Circus.

### Built By

- [Dewan Burson]("https://github.com/Dewanlb")
- [Emily Biegas]("https://github.com/emilyBiegas")
- [JD Andrews]("https://github.com/jd-andrews")

### Component Breakdown

#### GAME

The main component is the "game" where you play PvS. Each question pairing is pulled from a table in our database at random and ensures they aren't repeated while in the game. Each question also has a rating based on how many times it was chosen. This rating is used when
calculating 'sheeple' or 'peeple' in the scores page. The game also includes angular animations, keyboard accessibility, and mobile-first design.

#### SCORES

The scores component displays your score (total of all the question rankings you chose), your category (sheeple or peeple depending on which way you selected), and the top 5 peeple and sheeple, based on rating and category. These players are populated from our database so an all time high score will persist.

#### SPLASH

The Splash component is the hub of the game and includes the player selection. Players are randomly generated from a random face api and a random quote api to add some levity to the game. The logo was created in photoshop and the footer has navigation links to all components in the app.

#### ADD

The Add component

#### LOADING

#### TUTORIAL

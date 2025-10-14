# Node package manager (npm)

## NEW node versions NB!
Just a quick note about the next lesson. When you follow along in the next lesson, you'll be installing the latest version of the NPM package. However, this package has updated, so your example code will need to change too:

Use:
```js
import { randomSuperhero } from "superheroes";
const name = randomSuperhero();
```
Instead of:
```js
import superheroes from "superheroes";
const name = superheroes.random();
```

## How to
1. Type `npm init` to create configuration file `package.json`.
2. Answer questions. hit enter to accept. 
3. json (javascript object notation). config file.
4. Type `npm install <something>` to install a package.
5. Example try `npm install sillyname`. (or `npm i sillyname`).
6. Open package.json and see that sillyname is added as dependency.
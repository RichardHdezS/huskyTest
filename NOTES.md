- Primero instalamos eslint
npm i eslint@8.0.1 --save-dev

- Iniciamos la configuracion de lint
npm init @eslint/config

- Instalamos lint-staged para hacer la revision del codigo en hook de husky
npm i lint-staged --save-dev

- Añadimos esta configuracion al package.json
En la seccion de scrips:
 "lint": "eslint --ignore-path .gitignore . --ext .js",
 "lint:fix": "npm run lint -- --fix"

Al final del package.json añadimos
  "lint-staged": {
    "*.js": "npm run lint:fix"
  }
Sera el comando que ejecutara husky. Ahi podemos especificar sobre cuales archivos se ejecutara el linter.
De momento solo seara para los archivos .js

- Instalamos husky
npx husky-init && npm install

Ese comando nos crera el package.json el comando:
  "prepare": "husky install"
Debemos ejecutarlo

- Despues de ejcutar el comando "prepare", no crerara un archivo llamdo "pre-commit". Ahi, ingresaremos el siguioente comando:
  npx lint-staged
  Lo que hara es que ejecutara la configuracion que hicimos en el package.json de lint-staged antes de hacerse un commit.
  Es decir, revisara que nuestro codigo cumpla con todas las reglas establecidas en linter antes de hacer un commit


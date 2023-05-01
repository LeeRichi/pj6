## Key Concepts
1. To use TypeScript to fetch data from a 3rd party service.
2. Create corresponding types for the returned data of 2 endpoint GET /BIS/V1/{BUSINESSID} and GET /BIS/V1
3. Create 1 function which return a list of all the companies satisfied the parameters. Each company in the list should have detailed information of that company.

## Tech Stack
1. typescript

## Result
<img width="794" alt="resultImage" src="https://user-images.githubusercontent.com/86901868/235539247-2928f823-b49d-4815-af34-80e0a3226b7d.png">



## Instructure
1. clone the app: https://github.com/LeeRichi/fs15_6-TypeScript-prh-endpoint.git
2. go to src folder, then run script 'npm run build'.
3. go to build folder, run 'nodemon'.
4. result will be showing in terminal.

## Sturcture
````
.
├── README.md
├── index.js
├── interfaces.js
├── package.json
├── src
│   ├── index.html
│   ├── index.js
│   └── index.ts
└── tsconfig.json
````

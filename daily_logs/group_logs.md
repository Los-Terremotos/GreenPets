# Daily Notes for Green Pets

## Wed Nov. 22nd

## File structure initialization
- Created new repo on git hub organization
- Client's simple setup: In GreenPets folder, ran command ```npx install vite@latest``` and initialized **client** folder 
 
### Setting up **server** folder
- Create **server** folder
- Navigate to server folder ```cd server```
- ```npm init -y```
- ```npm install --save express graphql @swc/cli @swc/node @apollo/server```
- ```npm install --save-dev nodemon typescript @types/node```
-  By pass using "express-graphql" since we're going to be using Apollo Server instead
- Create "tsconfig.json" file, and add boiler plate:
  ```
  {
  "compilerOptions": {
    "target": "esnext",  // Adjust the target based on your Node.js version
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
    }
  }
  ```


## Monday November 27th :
- Referencing API docs to assist in schema generation.
  - [Plant API Docs](https://perenual.com/docs/api)

### Questions to Research / or Group Discussion:
- What is required to implement a searching assistant for plant names in the input bar?
- Discuss user experience for Front end development
  - Option 1: - User inputs location
              - We fetch user location in weather app of plants using long, lat
              - Take searchable terms of weather conditions that fit with Plant API fields (ie: "sunlight": ["full sun", "part shade", "] )   
              - Search Plant API's for plants that share similar data from Above's weather conditions


## Tuesday November 28th:
- Created group email:
  - Email: losterremotos101@gmail.com
  - Password: GreenPets55555
- Visual Crossing API Key: 28RVV42X2J2SXNHJ6G5Q4E6XL
  - (Login same as above)
- Perenual API Key: sk-uNmR656650b903d513175
  - (Login same as above)
- Plant API free tier:
```
Access To Regular API
Access To Species Data(1-3000) API
Access To Species(1-3000) Hardiness Map
Access To Species(1-3000) Plant Care Guides & FAQ
Access To Plant Disease(1-100) API
100 API Request / Day
```

### Questions to Research for Nov. 28th:
- Only 100 API calls per day. Research caching solution to implement for backend (Apollo caching, redis, ) to help maximize use of free API calls.
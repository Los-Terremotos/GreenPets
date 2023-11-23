# Daily Notes for Green Pets

## Wed Nov. 22nd

## File structure initialization
- Created new repo on git hub organization
- **Decision** to structure project as a **Monorepo with multiple packages** or a **multifile monorepo**.
  - This decision allows for some monorepos benefits of shared versioning and centralized management, while allowing for a more distinct separation of concerns between frontend and backend. 
- Client's simple setup: In GreenPets folder, ran command ```npx install vite@latest``` and initialized **client** folder 
 
### Setting up **server** folder
- Create **server** folder `cd server`
- `npm init -y`
- `npm install --save express graphql @swc/cli @swc/node @apollo/server`
- `npm install --save-dev nodemon typescript @types/node`
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
# Start ............

- https://firebase.google.com/

- Go to console

- create project

pj name : test-app
pj ID : test-app-christian

you can change projectID on this same page ...

- choose account ... and enable google analytices ... christian-host

- On nav bar on the left ..... click the hosting(world map icon)
  https://console.firebase.google.com/project/test-app-christian/hosting/sites

- click .... get started ....

Install cli for firebase

- > npm install -g firebase-tools@11.16.0
- > npm install -g firebase-tools@11.18.0

Initiate your project

- > firebase login  
         >  y 
         - click allow

- > firebase init
        > y 
        choose what you are using it for ... 
        (click space bar to select)
        (click enter)
       
-  Use an existing project

       > firebase use --add 

- Now it you will choose from all the projects in this account displayed below ....

       > ? What do you want to use as your public directory? (public)
       You will type "build" 

       > single page   
       no 

# firebase.json 

{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ], 
     "rewrites": [
      {
          "source": "**",
          "destination": "/index.html"
      }
  ]
  }
}




- > npm run build 

this will create the build folder for us ...... to be used to host the react app ....

 

Deploy to firebase hosting ... 

- > firebase deploy



- Click    " continue to console " 

This takes us to the console of the hosting of the project ...... 
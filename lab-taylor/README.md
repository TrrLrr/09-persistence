# Persistence 

This is a simple api that can perform RESTful methods against a single resource: beer. It utilizes Node.js's ```fs``` module to save resources to the file system of your local machine. 

### Dependencies

Use the ```npm i``` command to download the dependencies that you'll need to run the app. 

  - ```bluebird```
  - ```eslint```
  - ```uuid```
  - ```jest```
  - ```superagent```

### **POST**

POST to ```localhost:3000/api/beer``` with a ```name``` and ```style``` property attached to the body of the request to save a beer to the data directory. The beer will also be saved with an auto-generated ID.

### **GET**

GET at ```localhost:3000/api/beer``` with a valid ```id``` on the request body to return that beer.

### **DELETE** 

DELETE at ```localhost:3000/api/beer``` with a valid ```id``` on the request body to delete that beer.
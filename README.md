# serverChallenge
This application implements 3 different servers that are all linked to a central mongoDB database. There are 3 html pages, and when you send a number to the other 2 servers, that number gets updated in the feed and printed to the console.
To start this application, run npm install to install all dependencies.
Next, to run the application clone this repo to three seperate machines
Next, start all three servers by running the start scripts: 
    "startServer1": "nodemon ./server/server1" --- npm run startServer1
    "startServer2": "nodemon ./server/server2" --- npm run startServer2
    "startServer3": "nodemon ./server/server3" --- npm run startServer3
On every machine, all three servers must be started up. Each runs on a different local TCP port
To test pass numbers back and fourth from one node to the other two nodes, serve up one of the web pages on each machine
To start the client side html page run one of the following scripts:
    "page1": "live-server ./client/app1.html" --- npm run page1
    "page2": "live-server ./client/app2.html" --- npm run page2
    "page3": "live-server ./client/app3.html" --- npm run page3
When you enter a number in the provided text box on one of the pages, that number will get sent to the other two pages.
This works because upon a post request, the MongoDB is updated with values for the node that recieved the message, and the value of the message(must be a number or program will crash, it is not set up to handle strings in the DB)
Each of the three pages make get requests to the database every 5 seconds, so if you send a number from page1(node 1), then it will be added to the feed for nodes 2 and 3, and will show up on the web pages for nodes 2 and 3 after the setInterval refreshes the feed every 5 seconds.
As for the prompt, the integers sent between nodes are also output to the console.

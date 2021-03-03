# Rapptr Labs Sample App

Note: This app is not deployed. To run you may clone my repo and run "npm start." If you need a deployed version, let me know.

To be clear, this repo started out for me to practice some of the required skills and eventually evolved into the actual project. The first day of commits (Feb 26th) was mostly setting up the configuration of my React app and experimenting with some validation.

Feb 27 - I spent about 45 minutes setting up the login page and positioning it with CSS.

Feb 28 - I spend 10 minutes setting up my Redux state / reducers for logging in. I was able to connect to your server via Postman, but not through my localhost, so I spent about an hour doing research and trying different request libraries. When I gave up on that for the day I spent about a half an hour building the todo list and the form to add a new todo item.

March 1 and 2 - I intermittently implemented the CRUD functionality for the ToDo List. I spent about 30 minutes on this in total, plus an additional hour trying to figure out the API call and the potential of using a proxy. On March 2, I had set up a small express server to try to proxy because of what I thought was cors error, but to no avail. This has been removed.

March 3 - I decided to hard program logging in because I couldn't figure out how to connect to the API. I added a failed login error and created middleware so that the state would always be persisted in local storage for subsequent visits to the site (note: this includes staying logged in). I also made protected routes so that you can only access the ToDo page if you're logged in, will be sent to the login page if you are not logged in, and will be given a 404 error if you are logged in an try to visit a page that doesn't exist. Finally I put a few touches to make sure some of the code was cleaner and DRYER. I spent about 2 hours today. 

Overall it was about 6 hours, but I did spend about 2 hours of that trying to troubleshoot the API. If possible, I would love some feedback about the "required params" that I might have been missing.  Thanks for taking the time to review my work.  Thank you for your consideration!


Jared Greenberg

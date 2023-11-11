---
title: "Zeddit (Reddit Inspired)"
excerpt: "This project is my attempt at recreating a reddit-like experience. Users can create / edit / delete posts, add comments, vote on comments and posts, and create their own 'subreddits'."
coverImage: "/images/projects/reddit-clone/reddit-clone-1.png"
id: 1
link: "https://zedditapp.com"
links:
  [
    { type: "link", url: "https://zedditapp.com" },
    { type: "github-FE", url: "https://github.com/jacobbroughton/reddit-clone-client" },
    { type: "github-BE", url: "https://github.com/jacobbroughton/reddit-clone-backend" },
  ]
---

<p>This project is my attempt at recreating a reddit-like experience. Users can create / edit / delete posts, add comments, vote on comments and posts, and create their own 'subreddits'. This has been the most challenging project i've faced thus far, my motivation to continue this project over the months of it's development really stems from the pursuit of learning as much as possible.</p>

![r/learnprogramming subreddit](/images/projects/reddit-clone/reddit-clone-1.png)

### Technical Details

As for technologies / libraries used. I used [React.js](https://reactjs.org/) for the front-end, as well as [Redux](https://redux.js.org/) for state management. For user authentication, i've gone for a session-based authentication pattern using [Passport.js](http://www.passportjs.org/), I am considering moving over to a JSON Web Token auth pattern but we'll see about that. For the backend, I've used [MySQL](https://www.mysql.com/) for the database, [Express.js](https://expressjs.com/) for routing, and [Node.js](https://nodejs.org/en/) for the server. Local storage is used to maintain the user's dark / light mode preferance through uses of the application.

## ![r/learnprogramming subreddit (Dark mode)](/images/projects/reddit-clone/reddit-clone-2.png)

## ![Single post view](/images/projects/reddit-clone/reddit-clone-3.png)

## ![Search view](/images/projects/reddit-clone/reddit-clone-4.png)

![New post page](/images/projects/reddit-clone/reddit-clone-5.png)

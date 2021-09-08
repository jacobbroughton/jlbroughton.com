export const projects = [
  {
    name: "Reddit Clone",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla.",
    description: "This project is my attempt at recreating a reddit-like experience. Users can create / edit / delete posts, add comments, vote on comments and posts, and create their own 'subreddits'. This has been the most challenging project i've faced thus far, my motivation to continue this project over the months of it's development really stems from the pursuit of learning as much as possible. Its also rather ongoing, but 99% complete (I think, i tend to add more as i feel like i'm just finishing up)",
    technicalDetails: {
      text: "As for technologies / libraries used. I used React.js for the front-ennd, as well as Redux for state management. For user authentication, i've gone for a session-based authentication pattern using Passport.js, I am considering moving over to a JSON Web Token auth pattern but we'll see about that. For the backend, I've used MySql for the database, Express.js for routing, and Node.js for the server. Local storage is used to maintain the user's dark / light mode preferance through uses of the application.",
      image: "https://via.placeholder.com/150x300"
    },
    task: null,
    slug: "reddit-clone",
    link: "https://reddit-clone-jb.netlify.app/"
  },
  {
    name: "XVentor",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla.",
    description: "XVentor is a program that allows potential customers to find the product that would work best for their application in an easy-to-use interface that results in just a few products that would work for them instead of having to sift through 150+ products or contact customer service to find out what they need.",
    technicalDetails: {
      text: "For this project, I used React.js for the front-end, as well as Redux for state management. For the 3D aspect, I used a library called Three.js to display product models and let the user interact with them. Local storage is used to maintain the user's dark / light mode preferance through uses of the application. For the backend, I used Node.js for the server.",
      image: "https://via.placeholder.com/150x300"
    },
    task: {
      text: "My task for this project was to take some of the load off of customer service and allow potential customers of XVentBox to find the product they need in an intuitive user interface and act as a useful guide in navigating the 150+ products that XVentBox offers.",
      image: "https://via.placeholder.com/150x300"
    },
    slug: "xventor",
    link: "https://xventor.herokuapp.com/"
  },
  {
    name: "Classifieds",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla.",
    description: "This project was my attempt to replicate the functionality / look of the facebook marketplace UI. This includes the ability to add new listings with images, tags, location, condition, etc.. Users can share the listing, as well as change the status of the item (Available, pending, and sold).",
    technicalDetails: {
      text: "As for technologies / libraries used, this project uses React.js for the front-end, Express.js for routing, and node.js for the backend server. For state, I used the React Context API. If i could do it all over again, i'd integrate my own authentication instead of using Auth0, as well as Redux instead of the context API.",
      image: "https://via.placeholder.com/150x300"
    },
    task: null,
    slug: "classifieds",
    link: "https://ecommerce-webapp-jb.herokuapp.com/"
  }
]
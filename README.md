# Posts and Comments

## Introduction
This React project serves as a playground for testing out designs and implementations of my actual [blog site](https://yuanlong-anthony-cui.netlify.app/). For example, I first experimented here with the card layout for blog posts before applying it onto my own blog site.

<div style="display:flex; gap:50px; align-items:start;">
    <img src="./public/BlogList.png" alt="Blog List" width="300">
    <img src="./public/BlogPost.png" alt="Blog Post" width="300">
</div>


## Technical Highlights
- **Async data fetching**: Instead of using GraphQL queries as what I do on my actual blog site to load post data, this blog site uses `fetch()` in `useEffect()` in order to load in the data on the initial mounting of the `BlogPost` component.
- **Mock API**: I came across _[JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/)_ when trying to get mock data from a dummy API and found it easy to use. The API provides some common resources like `/users` and `/posts` as well as methods like `GET /posts/1` that developers could use off the shelf.
- **Testing**: For simple testing with Jest, individual tests were made with `test()` and test suites with `describe()`. Jest alone can handle logic tests (e.g. testing JS functions or Redux reducers), but when it comes to testing actual rendered React components (verifying DOM output, user interaction, etc.), we will need React Testing Library to handle the React part of the testing.
# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API helps solve the problem of complex state management when you have multiple components that use a lot of the same shared data.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is known as the single source of truth in a redux application because it is the source of all state within the app. Action types and payloads are dispatched to the reducer which updates the new state tree and gives it to the store.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to make asynchronous API class inside our action-creators. A thunk is a function that is returned by another funtion.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system so far is redux for smaller apps because it makes state very predictable and context api for larger apps with more components because of how clean the syntax is and how you can give state to intermediate components.
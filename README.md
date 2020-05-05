# redux_by_tania_rascia

## STATUS
~~Updated to use RTK but PostsPage does not return any posts.~~\
Should complete the other components in the walkthrough separately. Based on lack of knowledge on Redux Toolkit, recommend using standard format of reducers and actions first.

## NOTES
`index.js`
The terminology of "external", "local", and "assets" is perfect. I struggled with what terms to use while organizing imports on my own. "Local" may also work as "internal" in my mind.

**RTK** or Redux ToolKit will handle `redux-thunk`, `redux-devtools-extension`. See [redux-toolkit.js.org](https://redux-toolkit.js.org/). Too much to list here.



## QUESTIONS & ANSWERS (for my learning process)

1. Why can't a reducer function be in ES6 syntax?
   * It can be but, for some reason the parser is having issues with the syntax.
   * https://www.robinwieruch.de/javascript-reducer has good examples. 
2. What is the difference between a components file and a pages file?
   * In this example:
     * Components folder files do not connect to Redux store. 
     * Pages folder files do connect to Redux store.
3. In `Post.js`, what is `{post.body.substring(0, 100)}` ?
   * `.substring(0, 100)` limits the character count to 100. 
4. What is the syntax for the connect() statement?
   * connect( mapState, mapDispatch )( Component )
5. `PostPage.js`, What is `useEffect()` from React?
   * Think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
   * Once the PostPage component mounts, it will perform the codeblock.
6. `PostPage.js`, How is dispatch passed as a prop?
   * `dispatch()` is by default passed to the component once connect() is used.
7. After utilizing Redux Toolkit in the walkthrough, why are no `posts` rendering?
   * It is not noted in the walkthrough:
   1. Go to reducers/index.js.
   2. change `import postsReducer from './postsReducer'` to,
   3. `import postsReducer from '../slices/posts'`. 
   * RTK creates a reducer within the slice files and no longer needs an individual reducer file.
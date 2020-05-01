# redux_by_tania_rascia

`index.js`
The terminology of "external", "local", and "assets" is perfect. I struggled with what terms to use while organizing imports on my own. "Local" may also work as "internal" in my mind.

## QUESTIONS

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




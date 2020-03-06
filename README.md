<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


**#####################################################################################################################################**


**my notes**
- we import React but not used in code because it is used by babel in runtime

- we use brackets to tell react end of return statement, JS puts ; in the end of any line so omitting the bracket will return the code at that point.
```
return (
    <h1>Head</h1>
)
```
- React.fragment can be used to avoid unwanted divs
- state is a special object in react component that contains all data in the component
- multi-cursor editing: select word -> with `command + d`
- object destructuring:
```
const state = this.state.count;
const { state } = this.state; # object destructuring
```
- jsx expressions are just like normal JS objects, you can return from functions, pass, use as value of constant
- attribute names and css attributes are in camel case notation
- react list has to have unique keys for react dom to know what has changed and where in the dom

- logical operator:
in JS unlike other languages, you can apply the logical operator accross non-boolean values e.g.:
`true && false -> false`
`true && "Hi" -> "Hi"` # in this case JS will look at the 1st operand and will see that it is true, it then looks at the 2nd operand and tries to coerce the string and finds out that it is truthy. Because it is true, JS returns the 2nd truthy operand (last truthy operand)
`true && "Hi" && 1 -> 1` # because the last truthy operand if 1
- these logical operators can be used to conditionally render content istead of using if, else statements

- handling events: 
```
<button onClick = { this.handleIncrement }> Increment </button> # notice that we don't call the method, we simply pass a reference
```
- `how about passing arguments from an event?: Use arrow functions`
```
<button onClick = { () => this.handleIncrement({ id: 1}) }> Increment </button> # notice that we don't call the method, we simply pass a reference
```

- `this`
- `this` in JS behaves differently from how you call it:
1. this.obj.method() -> will return a reference to obj.
2. this.method() -> will return a ref to window obj but if strict mode is enabled, this will return undefined. React uses strict mode.
- `bind method` can be used within the constructor where we have access to all objects in the class to solve this problem. When you add a constructor to a class that inherits the other then you have to start with the `super()` method.
- you can also use arrow functions, `arrow functions don't re-bind the this keyword, they inherit it`. This is cleaner and simpler.
```
handleIncrement = () => {

}
```

- modifying state in react won't be recognized by the dom, you have to use `this.setState()` to make react dom detect changes. Properties passed to this method will either be merged or updated to the state and rendered.:
```
state = {
    count: 0
}
`this.setState({ count: this.state.count++ })`
```

- `props`
- you can pass values to another component as:
```
<Counter key={counter.id} value={counter.value}/>
```

- `children props`
- you can also pass content to be rendered e.g. :
```
<Counter key={counter.id} value={counter.value}>
   <h4>Title</h4>
</Counter>
```
**??????????? what happens if multiple components are passing props to thesame component?????????**
- children props are useful for passing complex elements e.g. dialog box

-`debugging`
- react developer tools

-`state vs props`
- props is read only, state can be changed with the setstate.
- prop is input to a component but state is local to the component.

- `modifying state`
- `RULE OF THUMB` -> The component that owns a piece of the state shoulkd be the one modifying it.
- `events in react` -> using props.
- in react you cannot change the state directly, for example if you want to remove an element from a list in the state, you have to create a new list without the element and then set the state to the new list.
- `this.setState({ counters: counters})` can be simplified as `this.setState({ counters })`.
- the key attribute when passed from a prop is only used internally by react and is not accessible.
- the whole point of using objects is to encapsulate related values.
- a controlled component does not have it's own local state. It receives all it's data from another component.

- `stateless funtional components`
- using function instead of a class
- can be used where you only have a single method e.g. a render method only
- where you don't have any helper methods, event handlers
- no state, you only get data via props
```
const NavBar = (props) => {
    return (props.children)
}
export default NavBar
```
- when you use stateless f c. You need to pass props to the method.

- `object destructuring`
- destructuring props
```
const NavBar = ({ children }) => {
    return (children)
}
export default NavBar
```
- same as `const { children, otherObject } = this.props;` . In this case you avoid `this.props` everywhere in your code.

- `life cycle`
- `mount` with life cycle hooks : `constructor`, `render`, `componentDidMount`.
- `update` with `render`, `componentDidUpdate`. -> with this.setState().
- `unmount` with `componentWillUnmount` -> just b4 a component is removed from the DOM.

- when a component is rendered, all its children are rendered recursively.

- how to use evens to avoid unnecessary backend calls.
```
componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
        // make ajax call
    }
}
```

`React router`
- `router link`
- router, route, switch, exact
- link
- useState, useEffect
- `const data = await fetch('url');`
  `const items = await data.json()`
- match.params.{data_passed}
- Router - https://www.youtube.com/watch?v=Law7wfdg_ls

`state management`
- state management - context api vs redux
- react hooks enables having state in functional components. It was only possible to have state in class components before
- Redux - https://www.youtube.com/watch?v=OSSpVLpuVWA
- redux thunk for asynchronous backend calls
- react react-redux

Redux
- store is where the state of your entire application lives
- actions are sent/dispatched from the view which have payloads that can be read by reducers
- reducers read the payload from the action and updates the store accordingly
- action is an object with a type and a payload
- send actions to the store with dispatch : `store.dispatch(action)`
- how reducer raises an action to update the store state
- reducers take 2 params, the initial state and the action
- combine reducers
- redux devtools
- use `provider` to give app access to the store:
- use `connect` to connect components in our app to the store
- connect takes:
  `mapStateToProps` -> receives the state of the store which can be used to decide what props we want to provide for that component
                    -> it can take two args, the state and props passed to this component
  `mapActionsToProps` / `matchDispatchToProps` -> allows us to dispatch actions from our components easily
                                               -> it can take args: 'dispatch' and 'props'
  `mergeProps` -> it takes these args: propsFromState, propsFromDispatch, ownProps


- accessing props in matchActionsToProps
- bind dispatch to actions in the component
- import `bindActionCreators`


- API requests with redux thunk middle-ware. Store enhancers
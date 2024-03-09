# Counter with Pure HTML, CSS, & JS and Counter with React

This is just a simple example of how powerful React is compared to a simple web application built just using HTML, CSS, & JS.

I've made this example to make it clear to everyone who are very skeptical & have a very cynistic opinions about devs who build web app with Non-Purist way such as using React.

React is not a bad thing. It has it uses & solves unique problems that one might encounter when building a large web application. One of the problem is the problem related to state management.

When you are building a complex & large web applications, state management or how you manipulate dynamic data in the app is really hard to do correctly with Javascript alone.

Consider the example of a simple counter App. Suppose you need to build two counters where each maintain their own count state, how do you build that with only pure JS? Well, the answer is you need to write a lot of codes & maybe create a generic function that can be reused for handling multiple state updates with component-level isolation.

Another problem is with how you render data. With only HTML, CSS, and JS, you need to do direct DOM manipulation which is very costly if you have large app with complex state logics. Whenever state changes, the rerender process is not memory efficient.

With library like React, data & UI manipulation are handled by React with Virtual DOM / VDOM approach. Where, instead of manipulating real DOM like the `<p>` tag or others, you just represent the DOM tree in a nested object structure. With this, you can optimize a lot of things & also introduce methods like diffing to rerender only parts that has changes not all.

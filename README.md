
# `<details>` HTML5 Element Vue 3 Package

  

This is an npm package that provides a custom implementation of the `<details>` HTML5 element using Vue 3, TypeScript, Vite, and Vue Test Utils. This package is intended to be used in Vue 3 projects where a custom implementation of the` <details>` element is needed.

### Installation

  

To install this package, you can use npm or yarn:

`npm install vue3details`


### Usage

To use the `<vue3details>` element provided by this package, you can import it in your Vue 3 component and use it as follows:

Import into your main file:

```
import Vue3Details from 'vue3details';

...
app.use(Vue3Details);  
...

```

and use as:

```
   <Vue3Details v-model="true">
    <summary>Title</summary>
    <p>Details content goes here.</p>
   </Vue3Details>
```

### Testing

 
This package comes with unit tests implemented using Vue Test Utils. To run the tests, you can use the following command:

`npm run test`


Contributing

  

If you find a bug or have a feature request, please open an issue on the GitHub repository for this package. Pull requests are also welcome!

License

  

This package is licensed under the MIT License. See the LICENSE file for details.

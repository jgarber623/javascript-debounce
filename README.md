# javascript-debounce

A lightweight, dependency-free JavaScript module for debouncing functions based on [David Walsh's debounce function](http://davidwalsh.name/javascript-debounce-function).

### Key Features

- Dependency-free
- AMD/CommonJS module support

javascript-debounce is also really tiny:

<table>
	<tbody>
		<tr>
			<th>Uncompressed</th>
			<td>909 bytes</td>
		</tr>
		<tr>
			<th>Minified</th>
			<td>667 bytes</td>
		</tr>
		<tr>
			<th>Minifed and gzipped</th>
			<td>405 bytes</td>
		</tr>
	</tbody>
</table>


## Getting javascript-debounce

Adding javascript-debounce to your project is easy! You've got a couple options:

- [Download a tagged version](https://github.com/jgarber623/javascript-debounce/tags) from GitHub and do it yourself _(old school)_.
- Install via [Bower](http://bower.io/): `bower install javascript-debounce`
- Install via [npm](https://www.npmjs.com/): `npm install javascript-debounce`


## Usage

### `debounce(callback, delay)`

#### `callback`

Type: `Function`

A function to be executed after `delay` milliseconds.

#### `delay`

Type: `Number`

The delay, in milliseconds, after the final event invokation at which time `callback` will be fired.

### Example

```js
if ('addEventListener' in window) {
    var handleResize = debounce(function() {
        console.log('This method fired 250ms after the resize event was last invoked.');
    }, 250);

    window.addEventListener('resize', handleResize);
}
```

## Acknowledgements

javascript-debounce is based on David Walsh's code and article [JavaScript Debounce Function](http://davidwalsh.name/javascript-debounce-function). His site is an invaluable resource for Web developers.

javascript-debounce is written and maintained by [@jgarber623](https://github.com/jgarber623).


## License

javascript-debounce is freely available under [The MIT License](http://opensource.org/licenses/MIT). Go forth and make the Web a more accessible place.

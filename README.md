To install dependencies, run


```
npm install
```

To build the JS assets, run

```
./node_modules/.bin/webpack -p --output-public-path=/build/ main.js build/bundle.js
```
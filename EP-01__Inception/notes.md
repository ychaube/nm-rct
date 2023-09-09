# Ep 01: Inception

## Flow

1. Create a basic html page, Dynamically insert elements in dom.
2. Integrating react
   - Using CDN
3. Using React & React DOM APIs
   - React.createElement(tag, {...attributes}, children)
   - ReactDOM.createRoot(rootElem)
   - createElement -> returns an object (React element)
4. .render() will replace content inside the root element. NOT Appended!

## To research

- CDN
- <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  - why crossorigin?
  - how minification works - dev vs prod js bundles
- DOM manipulation is the most costly operation

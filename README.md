# udemy-node-with-react-server


### Heroku

#### use PORT environment veriable

```javascript index.js
const PORT = process.env.PORT || 5000;

app.listen(PORT);
```

#### Add `engines` to `package.json`

```json package.json
"engines": {
  "node": "8.1.4",
  "npm": "5.0.3"
}
```

#### Add `start`

```unix
sc add start as node index.js
```

##### Add `node_modules` to `.gitignore`

```unix
echo node_modules >> .gitignore
```

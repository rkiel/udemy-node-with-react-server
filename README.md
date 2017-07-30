# udemy-node-with-react-server


### Heroku Deployment Checklist

#### Dynamic Port Binding

Use PORT environment variable.

```javascript index.js
const PORT = process.env.PORT || 5000;

app.listen(PORT);
```

#### Specify Node Environment

Add `engines` to `package.json`.

```json package.json
"engines": {
  "node": "8.1.4",
  "npm": "5.0.3"
}
```

#### Specify `start` script

Add `start` to `scripts` in `package.json`.

```bash
sc init
sc add start as node index.js
```

#### Don't Include Dependencies

Add `node_modules` to `.gitignore`.

```bash
echo node_modules >> .gitignore
```

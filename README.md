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

### Heroku First Time Deployment

#### Create Heroku Account

Sign up for [Heroku](https://www.heroku.com/) account.

#### Commit Codebase To Git

```bash
git init
git add .
git commit -m "Initial commit"
```

#### Install Heroku CLI

Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

#### Create Heroku App

```bash
heroku login
heroku create
```

#### Deploy App With Git

```bash
git remote add heroku PATH_TO_HEROKU_GIT_REPO
git push heroku master
```

### Heroku Subsequent Deployment

```bash
git add .
git commit -m "blah blah"
git push heroku master
```

### Google OAuth

#### Install passport

```bash
yarn add passport
yarn add passport-google-oauth20
```

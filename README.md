# Auth0 Express API Sample (JavaScript)

This repository contains a Node.js project that defines an Express API. You'll secure this API with Auth0 to practice making secure API calls from a client application.

## Get Started

Install the client project dependencies:

```bash
npm install
```

Create `.env` file under the project directory:

```bash
touch .env
```

Populate `.env` as follows:

```bash
PORT=6060
CLIENT_ORIGIN_URL=http://localhost:4040
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
SERVER_APP_AUTH0_CLIENT_ID=
SERVER_APP_AUTH0_CLIENT_SECRET=
```

Get the values for `AUTH0_AUDIENCE` and `AUTH0_DOMAIN` from your Auth0 API in the Dashboard.

Head back to your Auth0 API page, and **follow these steps to get the Auth0 Audience**:

![Get the Auth0 Audience to configure an API](https://cdn.auth0.com/blog/complete-guide-to-user-authentication/get-the-auth0-audience.png)

1. Click on the **"Settings"** tab.

2. Locate the **"Identifier"** field and copy its value.

3. Paste the "Identifier" value as the value of `AUTH0_AUDIENCE` in `.env`.

Now, **follow these steps to get the Auth0 Domain value**:

![Get the Auth0 Domain to configure an API](https://cdn.auth0.com/blog/complete-guide-to-user-authentication/get-the-auth0-domain.png)

1. Click on the **"Test"** tab.
2. Locate the section called **"Asking Auth0 for tokens from my application"**.
3. Click on the **cURL** tab to show a mock `POST` request.
4. Copy your Auth0 domain, which is _part_ of the `--url` parameter value: `tenant-name.region.auth0.com`.
5. Paste the Auth0 domain value as the value of `AUTH0_DOMAIN` in `.env`.

**Tips to get the Auth0 Domain**

- The Auth0 Domain is the substring between the protocol, `https://` and the path `/oauth/token`.

- The Auth0 Domain follows this pattern: `tenant-name.region.auth0.com`.

- The `region` subdomain (`au`, `us`, or `eu`) is optional. Some Auth0 Domains don't have it.

- **Click on the image above, please, if you have any doubt on how to get the Auth0 Domain value**.

Next, to get the last attributes (`SERVER_APP_AUTH0_CLIENT_ID` and `SERVER_APP_AUTH0_CLIENT_SECRET`) you'll have to create a new `Application` and associate it with permissions to call your Auth0 tenent `Management API`.

Follow the [Register Machine-to-Machine Applications](https://auth0.com/docs/get-started/auth0-overview/create-applications/machine-to-machine-apps) instructions to create a `Machine to Machine` Application.

You'll need to register **and authorize** the API from the above section and as well the `Management API`

- When you authorize the Management API, please enable the `read:users` and the `update:users` permissions.

<p align="center">
  <img src="https://github.com/Lerer/pizza42-express-server/blob/master/media/m2m-app.png?raw=true" width="700px" alt="Machine to Machine Application"/>
</p>

Switch to the `Application` Settings tab and copy the values of `Client ID` and `Client Secret` to `SERVER_APP_AUTH0_CLIENT_ID` and `SERVER_APP_AUTH0_CLIENT_SECRET`

<p align="center">
  <img src="https://github.com/Lerer/pizza42-express-server/blob/master/media/m2m-settings.png?raw=true" width="700px" alt="Machine to Machine Application settings"/>
</p>

---

With the `.env` configuration values set, run the API server by issuing the following command:

```bash
npm start
```

## Heroku deployment

Since the project runs with the simple command of `npm start`, there is no need for further configuration.

There are few deployment options:

1. Deploy via commands (`git` and `heroku`) - see: [Deploying with Git](https://devcenter.heroku.com/articles/git)
2. Deploy via direct integration to GitHub - see: [GitHub Integration (Heroku GitHub Deploys)](https://devcenter.heroku.com/articles/github-integration)

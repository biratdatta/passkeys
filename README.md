 

## File structure

- `app/auth/page.tsx`: the file where the React Auth component is used
- `app/profile/page.tsx`: displays user information if the user has successfully authenticated (rendered on the server)
- `app/user-data/route.ts`: api route that checks the users authentication state using the Corbado Node SDK
- `app/page.tsx`: client rendered page that accesses data from the above mentioned route
- `.env.local`: add relevant environment variables that you can obtain
  from [Corbado developer panel](https://app.corbado.com/signin#register)

## Setup

### Prerequisites

 

You need to have [Node](https://nodejs.org/en/download) and `npm` installed to run it.

### Configure environment variables

Use the values you obtained in [Prerequisites](#prerequisites) to configure the following variables inside an `.env.local`
file you create in the root folder of this project:

```sh
NEXT_PUBLIC_PROJECT_ID=<YOUR PROJECT ID>
API_SECRET=<YOUR API SECRET>
```

## Usage

### Run the project locally

Run

```bash
npm i
```

to install all dependencies.

Finally, you can run the project locally with

```bash
npm run dev
```

### Run the project in a docker container

You can also run the project in a docker container using the provided `docker-compose.yml` file.

```bash
docker-compose up --build
```

# ChatGPT Clone

A simple ChatGPT-style web application built using **React, Node.js, Express, and OpenAI API**.
Users can type questions and get AI-generated answers.

---

## Features

* Chat interface similar to ChatGPT
* AI-generated responses
* React frontend + Node backend
* Easy to run locally

---

## Technologies Used

* React.js
* Node.js
* Express.js
* Axios
* OpenAI API

---

## Project Structure

```
chatgpt-clone
│
├── src
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── public
│   └── index.html
│
├── server.js
├── package.json
└── .env (not uploaded to GitHub)
```

---

## How to Run This Project

### 1. Clone the repository

```
git clone https://github.com/sunidhi009/chatgpt-clone.git
```

Go to the project folder:

```
cd chatgpt-clone
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Install backend packages

```
npm install express cors axios dotenv
```

---

### 4. Add your OpenAI API key

Create a file named:

```
.env
```

Inside it add:

```
OPENAI_API_KEY=your_openai_api_key_here
```

You can generate your API key here:

https://platform.openai.com/api-keys

---

### 5. Start the backend server

```
node server.js
```

You should see:

```
Server running on port 5000
```

---

### 6. Start the React application

Open another terminal and run:

```
npm start
```

Then open:

```
http://localhost:3000
```

---

## Example

Ask a question like:

```
What is programming?
```

The chatbot will return an AI-generated response.

---

## Important

Do **not upload your API key to GitHub**.
Always keep it inside the `.env` file.

---

## Author

Sunidhi Choudhary
GitHub: https://github.com/sunidhi009

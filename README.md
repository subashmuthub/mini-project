# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Sample API
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <h1>Users List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
Got it, Subash 👍 — You want **4 simple React mini-projects**, each with **short, easy-to-understand code**, plus **CRUD operation** (where applicable), and then **steps to push to GitHub, connect Jenkins, and run with Docker**.

Let’s go step-by-step 👇

---

## 🧩 **Project 1: Currency Converter**

**Features:**

* Convert between INR, USD, and EUR.
* Uses simple exchange rates.

### 🧠 Code (CurrencyConverter.jsx)

```jsx
import React, { useState } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState("");

  const rates = { INR: 1, USD: 0.012, EUR: 0.011 };

  const convert = () => {
    const value = (amount * rates[to]) / rates[from];
    setResult(value.toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>💱 Currency Converter</h2>
      <input type="number" placeholder="Amount" value={amount}
             onChange={(e) => setAmount(e.target.value)} />
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option>INR</option><option>USD</option><option>EUR</option>
      </select>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option>INR</option><option>USD</option><option>EUR</option>
      </select>
      <button onClick={convert}>Convert</button>
      <h3>{result && `${amount} ${from} = ${result} ${to}`}</h3>
    </div>
  );
}
```

---

## ⚖️ **Project 2: BMI Calculator**

**Features:**

* Input height and weight
* Calculates BMI

### 🧠 Code (BMICalculator.jsx)

```jsx
import React, { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  const calculate = () => {
    const h = height / 100;
    const value = (weight / (h * h)).toFixed(2);
    setBmi(value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>⚖️ BMI Calculator</h2>
      <input type="number" placeholder="Weight (kg)" value={weight}
             onChange={(e) => setWeight(e.target.value)} />
      <input type="number" placeholder="Height (cm)" value={height}
             onChange={(e) => setHeight(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      <h3>{bmi && `Your BMI is ${bmi}`}</h3>
    </div>
  );
}
```

---

## 📋 **Project 3: Form Validation**

**Features:**

* Checks name, email, and password.

### 🧠 Code (FormValidation.jsx)

```jsx
import React, { useState } from "react";

export default function FormValidation() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const validate = () => {
    if (!data.name || !data.email.includes("@") || data.password.length < 6)
      setError("Please enter valid details!");
    else setError("Form Submitted Successfully ✅");
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>📝 Form Validation</h2>
      <input placeholder="Name" onChange={(e) => setData({ ...data, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setData({ ...data, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setData({ ...data, password: e.target.value })} />
      <button onClick={validate}>Submit</button>
      <p>{error}</p>
    </div>
  );
}
```

---

## 👤 **Project 4: Registration Form with CRUD**

**Features:**

* Add, View, Edit, Delete users (simple local CRUD).

### 🧠 Code (RegistrationCRUD.jsx)

```jsx
import React, { useState } from "react";

export default function RegistrationCRUD() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = form;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }
    setForm({ name: "", email: "" });
  };

  const handleEdit = (i) => {
    setForm(users[i]);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    setUsers(users.filter((_, index) => index !== i));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>👤 Registration Form (CRUD)</h2>
      <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <button onClick={handleSubmit}>{editIndex !== null ? "Update" : "Add"}</button>

      <ul>
        {users.map((u, i) => (
          <li key={i}>
            {u.name} - {u.email}{" "}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🚀 Setup Instructions (for all projects)

### 🧰 Step 1: Create React App

```bash
npx create-react-app mini-projects
cd mini-projects
```

### 🧩 Step 2: Add one of the above files inside `src/`

Example: `src/CurrencyConverter.jsx`

Then open `src/App.js` and import:

```jsx
import CurrencyConverter from "./CurrencyConverter";
function App() { return <CurrencyConverter />; }
export default App;
```

Run:

```bash
npm start
```

---

## 🌐 Step 3: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## ⚙️ Step 4: Jenkins Setup

1. Install Jenkins locally or on a server.
2. Open Jenkins → “New Item” → choose “Freestyle Project”.
3. Under **Source Code Management**, choose **Git** → paste your GitHub repo link.
4. Under **Build Steps**, add:

   ```bash
   npm install
   npm run build
   ```
5. Save and click **Build Now** → Jenkins will build your React app automatically.

---

## 🐳 Step 5: Docker Setup

1. Create a file named **Dockerfile** in project root:

```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["npx", "serve", "-s", "build"]
EXPOSE 3000
```

2. Build and run container:

```bash
docker build -t react-mini-app .
docker run -p 3000:3000 react-mini-app
```

---

Would you like me to bundle all 4 mini-projects in **one React app with tabs or routes** (so you can show them together in one UI)?
It’ll look more professional for GitHub/Jenkins/Docker deployment.
You said:
change the cal to bmi cal

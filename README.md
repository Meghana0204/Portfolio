# Professional React Portfolio

A responsive, high-performance personal portfolio website built with React, Vite, and styled-components. It showcases career milestones, projects, publications, and integrates direct email forwarding.

## Features

* **Responsive Design**: Mobile-first fluid grid layout using modern CSS architectures.
* **Themes**: Clean Dark and Light theme toggle with persisted local state memory.
* **Routing**: Fully configured with `react-router-dom` (BrowserRouter) with automatic subpath fallbacks.
* **Interactive Elements**: Real-time project filters, detail modals, and timeline milestones.
* **Email Forwarding**: Secure direct contact form integration powered by Web3Forms.
* **Automated Deployments**: Integrated GitHub Actions workflow for zero-config compilation and hosting on GitHub Pages.

---

## 🛠️ Tech Stack

* **Frontend**: React (v19)
* **Build Tool**: Vite (v8)
* **Styling**: styled-components (CSS-in-JS)

---

## 💻 Local Development

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Clone the repository and install the project dependencies:
```bash
git clone https://github.com/Meghana0204/Portfolio.git
cd Portfolio
npm install
```

### 3. Run Development Server
Start the local server with hot reloading enabled:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the site.

---

## 📬 Contact Form Configuration

To connect the contact form to your own email address:
1. Register for a free access key at [Web3Forms](https://web3forms.com).
2. Open `src/pages/Contact.jsx` and set the `access_key` value to your unique key:
   ```javascript
   access_key: "YOUR_ACCESS_KEY_HERE"
   ```

---

## 🌍 GitHub Pages Deployment

The project includes a GitHub Actions configuration at `.github/workflows/deploy.yml`. 

To host the site live on GitHub Pages:
1. Create a repository named `Portfolio` on GitHub.
2. In your repository settings under **Settings > Pages**, set the **Source** under Build and deployment to **GitHub Actions**.
3. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy Portfolio"
   git push -u origin main
   ```
4. The site will compile and deploy automatically within 1 minute.

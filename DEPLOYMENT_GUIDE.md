# 🚀 EduPulse AI - Deployment Guide (edudemodeployment)

Welcome! This guide will help you get **EduPulse AI** (edudemodeployment) up and running. Follow these simple steps.

---

## 💻 Option 1: Running Locally (For Testing)

1. **Install Node.js:** Download and install the "LTS" version from [nodejs.org](https://nodejs.org/).
2. **Open Terminal:** Open your computer's terminal (Command Prompt, PowerShell, or Terminal).
3. **Navigate to Project:** Go to the folder where you saved this project.
4. **Install Dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
5. **Run the App:**
   ```bash
   npm run dev
   ```
6. **View the Site:** Open your browser and go to `http://localhost:3000`.

---

## ☁️ Option 2: Deploying to the Web (Vercel)
*This is the easiest way to put your site online for free.*

1. **Upload to GitHub:**
   - Create a free [GitHub](https://github.com/) account.
   - Upload this project folder to a new "Repository".
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com/) and sign up with GitHub.
   - Click **"Add New"** -> **"Project"**.
   - Import your project repository.
3. **Environment Variables:**
   - During the import, you will see a section for **Environment Variables**.
   - Copy the values from your `.env` file into this section.
   - **Important:** Set `AUTH_SECRET` to a random long string (e.g., `s0meth1ng_v3ry_l0ng_4nd_s3cr3t`).
4. **Deploy:** Click **"Deploy"**. Vercel will give you a link (e.g., `edudemodeployment.vercel.app`) to share!

---

## 🔑 Login Credentials (Demo)

Once the site is live, use these details to test the dashboard:

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@school.edu.ng` | `password123` |
| **Parent** | `parent@example.com` | `password123` |

---

## 🛠️ Troubleshooting
- **Build Error?** Make sure you use `npm install --legacy-peer-deps`.
- **White Page?** Check the "Console" in your browser (F12) for errors.
- **Login failing?** Ensure your `AUTH_URL` and `AUTH_SECRET` are correctly set in the environment variables.

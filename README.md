
# Union Station South

This is a code bundle for Union Station South. The original project is available at https://www.figma.com/design/l6JK09SElhfGh7kp0vzJw3/Union-Station-South.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

---

## Contact Form — Email Setup

The contact page includes a form that sends submissions to **elandon@outlook.com** via an Express/Nodemailer backend.

### 1. Configure environment variables

Copy `.env.example` to `.env` in the project root and fill in your credentials:

```bash
cp .env.example .env
```

Edit `.env`:

| Variable | Description |
|---|---|
| `EMAIL_USER` | The **Outlook address that sends** the email (your login). |
| `APPPASSWORD` | An **app password** from your Microsoft account (not your regular password). See [how to generate one](https://support.microsoft.com/en-us/account-billing/manage-app-passwords-for-two-step-verification-d6dc8c6d-4bf7-4851-ad95-6d07799387e9). |
| `RECIPIENT_EMAIL` | Where submissions are delivered — defaults to `elandon@outlook.com`. |
| `PORT` | Port the email server listens on (default `3001`). |
| `FRONTEND_URL` | CORS origin of your frontend (default `http://localhost:3000`). |
| `VITE_API_URL` | URL of the email server used by the frontend (default `http://localhost:3001`). |

### 2. Install server dependencies

```bash
cd server && npm install && cd ..
```

### 3. Start both servers

**Terminal 1 — Email server:**

```bash
npm run server:start
```

**Terminal 2 — Frontend dev server:**

```bash
npm run dev
```

The contact form will POST submissions to `http://localhost:3001/contact`, and Nodemailer will forward them to `elandon@outlook.com` via Outlook SMTP.

> **Tip:** For production, set `VITE_API_URL` and `FRONTEND_URL` to your real domain URLs.
  
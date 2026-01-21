# Portfolio Website

This is a personal portfolio website designed to showcase my projects, skills, and experience. It is built using React and styled with Tailwind CSS, featuring a fully functional contact form powered by EmailJS.

## 🚀 Features

- **Hero Section**: Introduction and brief bio.
- **Projects Section**: Showcase of recent work with links to code and live demos.
- **Contact Form**: Integrated with EmailJS for direct messaging.
- **Responsive Design**: Optimized for all device sizes.
- **Modern UI/UX**: Built with Tailwind CSS for a clean look.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: EmailJS

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/primexk5/Dev_lapshak.git
   cd my-port
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   npm start
   ```

## ⚙️ Configuration

### EmailJS Setup

The contact form uses EmailJS. To make it functional for your own email:

1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Create a new **Service** and **Template**.
3. Update `src/components/Contact.jsx` with your credentials:

   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
   ```

## 🚀 Deployment

To build the application for production:

```bash
npm run build
```

You can deploy the `dist` or `build` folder to platforms like Vercel, Netlify, or GitHub Pages.

## 📄 License

This project is open source and available under the MIT License.# Dev_lapshak

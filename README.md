# Portfolio Website - Jijo John Joseph

This repository contains the code for my personal portfolio website, showcasing my professional skills, work experience, projects, and certifications. Designed to highlight my expertise in **Mobile Device Management (MDM)**, **Cybersecurity**, and **Data Analytics**, this portfolio serves as a comprehensive view of my background in IT and related fields.

## 📄 Overview

This portfolio is built with a responsive and modern design, using **HTML**, **CSS**, and **JavaScript** to create an engaging user experience. Key sections include an **About Me** page, **Education** history, **Work Experience**, **Skills** breakdown, **Projects**, and **Certifications**. Visitors can navigate smoothly between sections and access my social media profiles or send me a message directly via the contact form.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile viewing.
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing.
- **Projects Showcase**: Detailed descriptions of selected projects with technologies used and key features.
- **Skills Section**: Categorized skill sets to highlight my expertise in specific areas.
- **Certifications**: Display of my certifications with relevant icons and dates.
- **Contact Form**: A simple contact form to send messages directly to my email.
- **Integrated with [EmailJS](https://www.emailjs.com/):** Allows users to send messages directly from the contact form without requiring a backend server.
  
## 🛠️ Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Animations**: AOS (Animate on Scroll) for smooth scroll effects
- **Particles.js**: For background particle animations, adding a unique visual element

## 🌐 Deployment

 You can view the live site here:

[Live Site Link] (https://johnjijojosef.github.io/johnjijojosefresume/)

## 📂 Structure

- `index.html`: The main HTML file containing the structure of the website.
- `styles.css`: The CSS file with all styles, including responsive layout and dark mode styling.
- `scripts.js`: JavaScript file for theme toggling, form handling, animations, and interactivity.
- `packages/`: Folder containing images, icons, and other assets used throughout the site.

## Email Functionality

- **Integrated with [EmailJS](https://www.emailjs.com/):** Allows users to send messages directly from the contact form without requiring a backend server.
- **Dynamic Template Parameters:**
  - `from_name`: Captures the sender's name.
  - `from_email`: Captures the sender's email address.
  - `message`: Captures the content of the message.

### How It Works
1. The form collects user input for `name`, `email`, and `message`.
2. These inputs are passed as parameters to EmailJS through its `send` method.
3. EmailJS processes the data and sends an email based on the configured template.

### Email Configuration Steps
1. **Sign up for EmailJS**:
   - Create an account at [EmailJS](https://www.emailjs.com/).
2. **Create a Service**:
   - In the EmailJS dashboard, set up a service to handle your emails.
3. **Create a Template**:
   - Define a template that uses the `from_name`, `from_email`, and `message` parameters.
4. **Get Your API Keys**:
   - Obtain the `serviceID`, `templateID`, and `publicKey` from the EmailJS dashboard.
5. **Update the Code**:
   - Replace placeholders in the JavaScript code with your actual EmailJS credentials.

## 🚀 Getting Started

To view or modify the code locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/johnjijojosef/johnjijojosefresume.git
   

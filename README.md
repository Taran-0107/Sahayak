# Sahayak — AI-Powered Assistant for Bureaucrats

**🏆 Built at IIT Kharagpur Hackathon**  

Sahayak is an **AI-powered productivity platform** designed to empower bureaucrats with **real-time information, AI assistance, and document intelligence**.  
From keeping up with the latest news to summarizing important documents in any language, Sahayak streamlines decision-making and saves valuable time.

---

## ✨ Features

### 📰 News Dashboard
- Scrapes **top news websites and articles** in real-time.
- Curated updates from credible sources.
- Clean, distraction-free interface for quick reading.

### 💬 AI Chatbot
- Smart conversational assistant powered by **Cohere API**.
- **Voice input support** for hands-free interaction.
- Capable of answering queries, providing insights, and assisting with daily tasks.

### 📄 Document Summary
- Upload any document (PDF, image, scanned files).
- **OCR-powered text extraction** using Python libraries.
- Generates **summaries in your preferred language** for easy comprehension.

### 📅 Calendar & Meeting Scheduler
- Schedule and manage your meetings with ease.
- Get **notifications and reminders** for upcoming meetings.
- View all meetings scheduled for the day in one place.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Python (Flask)  
- **AI & NLP:** [Cohere API](https://cohere.com/)  
- **OCR:** Tesseract OCR / EasyOCR  
- **Web Scraping:** BeautifulSoup, Requests  
- **Voice Input:** Web Speech API  
- **Calendar & Notifications:** JavaScript-based scheduling and browser notifications

---

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Cohere API key
- Tesseract OCR installed on your system
- ffmpeg installed on your system

### Installation

```bash
# Clone the repository
git clone https://github.com/Taran-0107/Sahayak.git
cd Sahayak

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py

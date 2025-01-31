from googlesearch import search
import requests
from bs4 import BeautifulSoup

# Search for latest AI news
query = "Isro space docking"
urls = [url for url in search(query)]

# Loop through each URL and fetch content
for url in urls:
    try:
        response = requests.get(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"})
        response.raise_for_status()  # Raise an error for bad responses (e.g., 404, 500)

        # Parse the HTML content
        soup = BeautifulSoup(response.text, "html.parser")

        # Extract and print the webpage title
        print("\nTitle:", soup.title.text)
        
        # Extract main content (modify based on the website structure)
        paragraphs = soup.find_all("p")
        content = "\n".join([p.get_text() for p in paragraphs[:5]])  # Get first 5 paragraphs
        print("Content:\n", content)
        print("-" * 80)

    except requests.exceptions.RequestException as e:
        print(f"Error fetching {url}: {e}")
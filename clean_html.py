from bs4 import BeautifulSoup

file_path = "public/analysis/telco-churn-report.html"
with open(file_path, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

# Remove the header completely if we are viewing in an iframe
header = soup.find("header", id="quarto-header")
if header:
    header.decompose()

# Also remove any footer if exists
footer = soup.find("footer")
if footer:
    footer.decompose()

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))

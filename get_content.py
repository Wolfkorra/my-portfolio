from bs4 import BeautifulSoup
import sys

file_path = "public/analysis/telco-churn-report.html"
with open(file_path, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

main_content = soup.find("main", id="quarto-document-content")
if main_content:
    # We want to keep the inner HTML but maybe clean it up a bit if needed
    print(main_content.prettify())
else:
    print("Main content not found")

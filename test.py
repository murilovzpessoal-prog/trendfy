import re
with open("App.tsx", "r", encoding="utf-8") as file: content = file.read()
new_content = re.sub(r'\{\(filteredProducts.reduce[^}]*\}\.toFixed\(1\)\}M', '3.9M', content, count=1)
with open("App.tsx", "w", encoding="utf-8") as file: file.write(new_content)

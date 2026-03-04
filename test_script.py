import re
with open("App.tsx", "r", encoding="utf-8") as file:
    content = file.read()

new_content = "Create a script, in Brazilian Portuguese, containing ONLY the spoken lines that my influencer will say, of up to 24s for a video on Tiktok Shop. It must be separated into 8-second takes, meaning (20 to 25 words) maximum per take. The script must make sense to sell this product: \\"Relógio Masc Aço Inox ORUSS\\". Follow absolutely all TikTok guidelines and restrictions so I do not get a violation. At the very end of the copy, include a strong Call-To-Action (CTA) directing the user to click the orange shopping cart."

content = re.sub(r'Create a script, in Brazilian Portuguese[^<]*', new_content + "\n                      </p>", content)

with open("App.tsx", "w", encoding="utf-8") as file:
    file.write(content)

import os

path = r"C:\Users\adila\.gemini\antigravity\scratch\care-charitable-trust\src\components\Footer.tsx"

print(f"Opening Footer.tsx at: {path}")
with open(path, "rb") as f:
    data = f.read()

print("Decoding data using utf-8 with ignore error handler...")
cleaned_text = data.decode("utf-8", errors="ignore")

print("Writing clean content back to Footer.tsx in utf-8 encoding...")
with open(path, "w", encoding="utf-8") as f:
    f.write(cleaned_text)

print("Done! Footer.tsx cleaned successfully.")

import os
import glob

replacements = {
    "--color-cream": "--color-platinum",
    "--color-dark-green": "--color-carbon-black",
    "--color-neon-green": "--color-sapphire",
    "--color-neon-yellow": "--color-amber-flame",
    "--color-soft-pink": "--color-cool-horizon",
    "--color-vibrant-orange": "--color-amber-flame",
    "--color-bento-blue": "--color-sapphire",
    "rgba(0, 77, 44, 1)": "rgba(26, 26, 26, 1)",
    "rgba(0,77,44,1)": "rgba(26,26,26,1)",
}

files = glob.glob("src/**/*.tsx", recursive=True) + glob.glob("src/**/*.css", recursive=True)

for file_path in files:
    with open(file_path, "r") as f:
        content = f.read()
        
    original_content = content
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    if content != original_content:
        with open(file_path, "w") as f:
            f.write(content)
        print(f"Updated {file_path}")

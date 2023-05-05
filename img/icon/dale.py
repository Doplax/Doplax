from PIL import Image
import os

# ruta de la carpeta actual
current_folder = os.getcwd()

# ruta de la carpeta de salida para los archivos WebP
output_folder = os.path.join(current_folder, "webp")

# crear la carpeta de salida si no existe
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# recorrer los archivos en la carpeta actual
for filename in os.listdir(current_folder):
    if filename.endswith(".png"):
        # abrir la imagen PNG y convertirla a WebP con una reducción de calidad del 30%
        with Image.open(filename) as im:
            im = im.convert("RGB")
            im.save(os.path.join(output_folder, f"{os.path.splitext(filename)[0]}.webp"), "webp", quality=70)


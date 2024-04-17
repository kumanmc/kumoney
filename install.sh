#!/bin/bash

# Mensaje de instalación
echo -n 'Instalando Kumoney '

# Bucle para imprimir los puntos suspensivos
for i in {1..3}; do
    echo -n '.'
    sleep 1
done

echo

# Verificar si Homebrew está instalado
if ! command -v brew &> /dev/null; then
    # Mostrar mensaje para instalar Homebrew
    echo "Este script requiere brew para funcionar correctamente."
    echo "Por favor, instala brew desde https://brew.sh/ antes de continuar."
    exit 1
fi

# Verificar si Python 3 ya está instalado
if ! brew list --versions python@3 &>/dev/null; then
    # Instalar Python y pip con brew
    brew install python
    # Enlazar Python 3
    brew link python@3
else
    # Enlazar Python 3 si no está vinculado
    if ! brew list --versions python@3 --pinned &>/dev/null; then
        brew link python@3
    fi
fi

# Actualizar pip
pip install --upgrade pip

# Crear un entorno virtual
python3 -m venv venv

# Activar el entorno virtual
source venv/bin/activate

# Instalar Django
pip install django

# Instalar otras dependencias del proyecto desde requirements.txt
pip install -r ./backend/requirements.txt

# Desactivar el entorno virtual
deactivate

# Instalar dependencias frontend
cd frontend
npm install
npm audit fix

# Kumoney

Lo más difícil en esta vida es empezar y definir un camino. Pero una vez se toma el camino no hay que mirar atrás.
No pares.
Nunca mires atrás.

## Install project

    ./install.sh

## Ejecutar localmente

### Crear archivo para tus keys
Este fichero no se sube a github por seguridad. 

1- Crea un fichero '.env'

2- Añade por ejemplo:

    SECRET_KEY=sx&@at!q8%(0)&2rodet6r6sw$*9(i#^3h)lj-m@-79miw!0-z
    DEBUG=true
    
### activar el enterno virtual para python en el path kumoney/

    source venv/bin/activate

### Arrancar el servidor

    python manage.py runserver

### Path de la api
http://127.0.0.1:8000/api/


### Testear 
 - Ejecutar todos los tests de python

        python manage.py test

 - Sólo un test en concreto

        python manage.py test api.tests.test_logic_service

### Desactivar el env del terminal

    deactivate

------------

## Desarrollo

### Cuando quieres crear una nueva app en backend se hace así:
   
    python manage.py startapp <nombre_app>
------------

### Base de datos
------------


### Changes in model

    python manage.py makemigrations
    python manage.py migrate

### Create super user for admin

    python manage.py createsuperuser

### Open db shell

    python manage.py dbshell

### Apply specific migrations

    python manage.py sqlmigrate meetings 001

<!-- ### Arrancar website

    python manage.py startapp website -->

### SUPER USER DEV
devuser
Test123!

### Cambios en Models:

Hacer el cambio y ejecutar:

    python manage.py makemigrations
    python manage.py migrate

### PARA BD DE PRODUCCION:

    export DJANGO_ENV=prod && python manage.py runserver

### PARA DEV

    export DJANGO_ENV=dev && python manage.py runserver

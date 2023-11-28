# kumoney

Lo más dificl en esta vida es empezar y definir un camino. Pero una vez se toma el camino no hay que mirar atrás.
No pares.
Nunca mires atrás.

1-Crear venv y activarlo
2-Instalar Django
3-Crear una API dentro de BACKEND
    -Install binance connector -> pip install django binance-connector-python
    (
        Thanks:
            https://github.com/binance/binance-connector-python
            https://binance-docs.github.io/apidocs/spot/en/#enabling-accounts
    )
    -python manage.py startapp api
    Mi primer api para coger la informaciom de mi cuenta es : http://localhost:8000/api/account/

    TODO: Intentar trabajar con algun wrapper de binance

4- Testear 
 - todos los tests
 python manage.py test
 - api en concreto
python manage.py test api.tests.test_logic_service

5 - Arrancar el servdor
python manage.py runserver

6 - Path de la api
http://127.0.0.1:8000//api/account/

COMMANDS
------------
Run server
python manage.py runserver

Changes in model
python manage.py makemigrations
python manage.py migrate

CReate super user for admin
python manage.py createsuperuser

Open db shell
python manage.py dbshell

Apply specific migrations
python manage.py sqlmigrate meetings 001

Create app
python manage.py startapp website

SUPER USER DEV
devuser
Test123!

CAMBIOS EN MODELS:
Hacer elcmabo y ejecutar:
python manage.py makemigrations
python manage.py migrate

PARA PRODUCCION:
export DJANGO_ENV=prod && python manage.py runserver

PARA DEV
export DJANGO_ENV=dev && python manage.py runserver
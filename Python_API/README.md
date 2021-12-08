<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/640px-Django_logo.svg.png" alt="Logo" width="320" height="111">
</p>

<h3 align="center">Python REST API</h3>

<p align="center">

<br />
<br />
</p>
<p align="center">
    <br />
    <br />
    <a href="#description">Description</a>
    ·
    <a href="#notes">Notes</a>
    ·
    <a href="#timeline">Timeline</a>
    ·
</p>

---

# Description

Basic REST API in Python, with the help of Django. This project is realised usind TDD approach (Test Driven Development).
The goal is to understand the mindset of testing before writing coding and than have a better understanding on how to implement on day-to-day code.


---
# Notes

SETUP

*   Create Dockerfile to set step 1 dev environment
*   Create requirements.txt
*   Create docker-compose file to set working environment
*   Create django project inside container ```sh docker-compose run app sh -c "django-admin.py startproject app .```
*   Create .travis.yml file to use Travis CI repository monitoring
    +   Add Docker credentials editing .travis.yml file and adding two environment variable on Travis website (repository > MORE OPTIONS)
*   Install flake8 and create .flake8 config file

UNIT TESTS
*   Create a tests.py file (Python looks for files beginning with **test**)
*   Create functions inside this file also named test_... (same reason than above)
*   Run ```sh python manage.py test``` to run unit tests
*   You can't have a test in **tests** directory AND a file called **tests.py**, so better practise is the directory (more scalable) 

CORE APP
*   Create another django app **core** in the **app** directory of container ```sh docker-compose run app sh -c "python manage.py startapp core"```
*   Add core app to app (first app) **settings.py** > INSTALLED_APPS
*   User model
    +   Create unit test for user model
    +   Create user model / import django user helpers in core app (see models.py)

---


### Timeline

> My developer timeline

![Timeline](https://github.com/nicode-io/nicode-io/blob/master/images/Timeline.png)



    

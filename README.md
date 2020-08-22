# DJANGO UNFRAMED
> Learning project using Django web framework

##  Index
-   [Description](#description)  
-   [Cheat Sheet](#cheat-sheet) 
-   [Achievements](#achievements)
-   [Collaboration](#collaboration)
-   [Timeline](#timeline)


##  Description 
> Start 21-08-2020

My second Django's project. This one aims to go deeper in the knowledge of this framework and make links with a relative SQL database.

##  Cheat Sheet
> Find the step-by-step summary, not documented or explained except for some points, refers to django/python documentation to know more about what you're doing with the followings.
####    Create the project in virtual environement
*   Create venv: ```$ python -m venv env_name```
*   Activate venv: ```$ source env_name/bin/activate```
*   Deactivate venv: ```$ deactivate```
####    Setup project
*   ```$ pip insall django```
*   ```$ django-admin startproject project_name .``` **Don't forget ending dot**
*   Enter project folder
*   Create database: ```$ python manage.py migrate```
*   Viewing project / check setup: ```$ python manage.py runserver``` then go: *http://127.0.0.1:8000/
####    Starting an app
*   Activate your vritual environment
*   Create app: ```$ python manage.py startapp app_name```
####    Define and activate a model
*   In your app folder, open **models.py**
*   Create a class wich named your model (ex: *Topic*)
*   A model class look like this:   
   ```class Topic(models.Model):``` 
    ```"""A topic the user is learning about"""```  
    ```text = models.CharField(max_length=200)```   
    ```date_added = models.DateTimeField(auto_now_add=True)```  
    ```      ```    
    ```def __str__(self):```    
    ```    """Return a string representation of the model"""```     
    ```    return self.text```  
*   Open **settings.py** in your project's root folder
*   Inside **INSTALLED_APPS = [ ... ], and upside default models like *'django.contrib.admin',**:   
    Add a line with your app_name like this **'app_name',
*   The more models you have, the more you have to find a logical structure and comments for differents apps groups to make your code readable
*   Modify database: ```$ python manage.py makemigrations app_name```
*   Update database: ```$ python manage.py migrate```
####    Administration panel
*   Create superuser: ```$ python manage.py createsuperuser``` 
*   Fill in the fields, notice the confirmation at the end (and obviously don't forget this password you've just entered)
*   Register an app model in admin panel to manage them: 
    *   In your app folder, open **admin.py**
    *   Add: **from .models import Model_name** to import model we want to register, the dot in front of *models* tells Django to look for *models.py* in the same directory as *admin.py*
    *   Add: **admin.site.register(Model_name)** tells Django to manage our model through the admin site
    *   Verify your work by accessing admin panel @ ```http://localhost:8000/admin/```
    *   You can now add objects of your models through the admin panel
####    Django shell
*   The Django shell allows you to make test on your data in your database, even with loops and conditions, it can be very useful to test the output of models or view specific database's entries.
*   ```$ python manage.py shell```
*   Example: ```>>> from app_name import Model_name```
    ```>>> Model_name.objects.all()````
    Return all objects in your *Model_name*
*   There's a lot of functionality here, go for documentation to learn about that
####    Mapping URL
*   In your project's root, open ***urls.py***
*   In the second line of import add **include** like this:
    *from django.urls import path, **include***
*   In **urlpatterns = [...]** add a line: **path('', include('app_name.urls')),**
*   In your app folder create a file called *urls.py* and add the following lines:  
    ```""Defines URL patterns for app_name"""```  
    ```from django.urls import path```    
    ```from . import views``` 
    ```                     ``` 
    ```app_name = 'app_name' (! don't be confused here, first *app_name* is fixed and defined by Django, second is our custom app_name)```      
    ```urlpatterns = [```   
        ``` # Homepage```  
        ``` path('', views.index, name='index'),```  
    ```]``` 
####    Writing a view
*   In your app folder, open **views.py**
*   Add the following code for home page:
    ```def index(request):```   
    ```"""The homepage for project"""```    
    ```return render(request, 'project_name/index.html')``` (be aware of indent, this is Pyhton)
 ###    Writing a template
*   In your app folder, create a subfolder called **templates**
*   Make another folder inside the **templates** folder called **app_name** (this seems redundant but allows a good interpretation for Django, especially in large projects)
*   In this last folder create an **index.html** file, the path will so be *project_name/app_name/templates/app_name/index.html*
*   Add a small test HTML content like :
    ```<p>Project Name Homepage</p>```
    ```<p>Welcome to this new Django's adventure</p>```
*   Save the **index.html** and now if you browse to ```http://localhost:8000/admin/``` you should see your small text inside !



##  Achievements 
*   Go deeper in Django
*   Write a step-by-step cheatsheet for setting up a Django project
*   Manage database and CRUD (Create Read Update Delete)
*   Set up routines in web/app development with Python/Django
*   Explore next project's main goal => combo Django Mongo DB


---

**BeCode** Intensive Bootcamp     
This project took place in my leearning path in BeCode (see below) to full stack web developer.
In seven months you have a wonderful luck to become a great web developer. Inclusion and share spirit is your daily feeling !  
Give maximum to get maximum :rocket:

##  Collaboration
Hello, I'm [Nicolas](https://www.linkedin.com/in/nicolas-denoel/), welcome to my all new life as developer.
After 15 years as manager and sales director it's time for me to make my dreams come true and to become a developer.
Autonomous learner, problem solver and commited team member, I'm ready for challenges !
So feel strongly to give me any recommandation about my work, advice for future projects, and all comments you want.  
If you are looking to hire a strong hybrid and atypical profile in your team do not hesitate to contact me to check if we can share a project together !  
Thanks by advance for that :heart:  

##  Timeline 
[:calendar: Discover the great timeline of my adventure to become a developer. Want to write your company's name on it ? Let's meet !](https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2020-06-27)  


[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

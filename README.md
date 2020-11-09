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
*   Go to your project's folder: ```$ cd path/to/my/project``` 
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
*   Activate your virtual environment
*   Create app: ```$ python manage.py startapp app_name```
*   Add app to **settings.py**: 
    *   Open **settings.py**
    *   In ```INSTALLED_APPS = [...]``` add ```'app_name',```   
*   Include URLs from app in **urls.py**:   
    *   Open global **urls.py** located in project's root folder (not the one in you app folder)    
    *   In ```urlpatterns = [...]``` add ```path('app_name/', include('app_name.urls')),``` 

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

####    Writing a template
*   In your app folder, create a subfolder called **templates**
*   Make another folder inside the **templates** folder called **app_name** (this seems redundant but allows a good interpretation for Django, especially in large projects)
*   In this last folder create an **index.html** file, the path will so be *project_name/app_name/templates/app_name/index.html*
*   Add a small test HTML content like :    
    ```<p>Project Name Homepage</p>```
    ```<p>Welcome to this new Django's adventure</p>```
*   Save the **index.html** and now if you browse to ```http://localhost:8000/admin/``` you should see your small text inside !

####    Writing a base template
*   Base template can be considered as a parent of others children pages. A children page will inherit all content from the base template, this way you just have to change new elements in the child page. It makes it easy to change an all website header of footer for example
*   In the same folder as *index.html* create a file called **base.html**
*   Add followings:     
    ```<p><a href="{% url 'app_name:index' %}">App Name</a></p>``` A link to the homepage we will insert in all future children pages (we need to set up that in a few step).   
    ```{% block content %}{% endblock content %}``` for now they are placeholders without content but if there was content in them, this content would be replicated to all children page, from now only the empty block will be applied.   
*   Now open **index.html** to make it a child page of *base.html*.
*   Replace actual content by :   
    ```{% extends "app_name/base.html" %}``` import the *base.html* template    
    ```{% block content %}``` Start of the content block    
    ```<p>Learning Log helps you keep track of your leaning, for any topic you're learning about.</p>``` Content of content block  
    ```{% endblock content %}``` End of content block   
*   A good practise in bigger project is to create a main base template for all your apps, then in the apps create a base that inherit from the main base and then children pages in the app inheriting from app base. This way you can manage hundreds of pages and make a global change to the whole site easily, or a big change on an app base too. The more you think your starting structure with Django, the more easiest maintenance/upgrades you got :wink:

####    Create a form 
*   Django can automated many things in form creation, forms are based on a previously build model you make, we'll cal it **your_model** in this part.
*   The steps are very similar as creation of a new page: create a form block(new), create a path to your page form in **urls.py**, create a view in **views.py**, create your **new_form** page wich will contain the form in you **templates/app_name/** folder
*   In your app folder, create a **forms** folder
*   In this folder create a file called **forms.py** 
*   Here's the basic syntax :   
    ```from django import forms``` will import forms module 
    ```from .models import your_model``` will import your own model that you want to base your form on  
    ```class Your_modelForm(forms.ModelForm)```
    ``` class Meta:```
    ```     model = your_model``` tells wich model will be used to create **Your_modelForm**    
    ```     fields = ['text']``` select the fields of **your_model** you need in the form   
    ```     labels = {'text: ''}``` choose the label for each fields, here we indicate that we don't want to label our field text
*   Save your file
*   Add the following in your app **urls.py** file: 
    ```path('new_form/', views.new_form, name='new_form'),``` 
*   In the **views.py** file add the followings to create and display a blank form or get the data from a previously completed form
    At the start of the file:   
    ```from django shortcuts import render, redirect``` adding **redirect** will allow to use it for user's redirection when form is submitted  
    ```from .forms import Your_modelForm``` import your form configuration from *forms.py* file 
    After all existing code:    
    ```def new_form(request):```
    ``` if request.method != 'POST':``` check if the form is called with data from POST method, so if it has been filled or not
    ```     form = Your-modelForm()``` create a new instance of your class *Your_modelForm* 
    ``` else:```    
    ```     form = Your_modelForm(data=request.POST)``` create an instance of your class *Your_modelForm* with user previously entered data, we get data with POST method       
    ```     if form.is_valid():``` check if all required fields are completed, if type of data matches the requirement (text-size, numbers, etc) as we specified in our previously created model.
    ```         form.save()``` save form
    ```         return redirect('app_name:homepage)``` redirect user to the *homepage.html* file located in your app folder 
    ``` context = {'form': form}``` create a new blank form 
    ``` return render(request, 'app_name/new_form.html', context)``` return the new blank form in *new_form.html*
*   In the **project_name/templates/project_name** folder, we create the html page, wich we called *new_inscription.html* for example
*   Add the followings: 
    ```{% extends "project_name/base.html %}``` use it if you have created a base template to avoir repetition (highly recommended) 
    ```{% block content %}``` open block named *content*    
    ``` <p>Add new inscription:</p>```  
    ``` <form action"{% url 'project_name:new_form' %}" method="post">``` tells Django to send forms data to the view *new_form*    
    ```     {% csrf_token %}``` Django avoid cross-site request forgery with this command   
    ```     {{ form.as_p }}``` Django will create each field as a paragraph 
    ```     <button name="submit">Add inscription</button>``` Django don't create the submit button, so we do this manually     
    ``` </form>```  
    ```{% endblock content %}``` end of content block   

####    Add login system (using build-in Django user auth)
#####   Initialize authentification app
*   In your venv: ```$ python manage.py startapp users```
*   In **settings.py** add ```'users',``` in *INSTALLED_APPS*
*   In your project's root folder, open **urls.py** and add:    
    In **urlpatterns = [...]** add: ```path('users/', include('users.urls')),``` just after the line *path('admin/', admin.site.urls),*
*   In your *users* folder, create and open a new file called **urls.py** an add followings:  
    ```"""Defines URL patternsfor users"""```   
    ```from django.urls import path, include``` 
    ```app_name = 'users'```    
    ```urlpatterns = [```   
    ``` path('', include('django.contrib.auth.urls'))```    
    ```]``` 
#####   Add login component
*   In *users* folder create a folder and a subfolder looking like (users folder)/templates/registration    
*   In registration folder, create a **login.html** page and add followings:    
    ```{% extends "project_name/base.html %}``` use the base template if you create one before  
    ```{% block content %}```   
    ``` {% if form.errors %}``` 
    ```     <p>Your username and password didn't match. Please try again</p>``` 
    ``` {% endif %}```  
    ``` <form method="post" action="{% url 'users:login' %}">```    
    ```     {% csfr_token %}``` 
    ```     {{ form.as_p }}```  
    ```     <button name="submit>Log in</button>``` 
    ```     <input type="hidden" name="next" value="{% url "project_name:index' %}"/>```
    ``` </form>```  
    ```{% endblock content %}```
*   In your app_name folder (created before in this guide), open **base.html** file. The followings will allow us to display login link in every page if the user isn't logged in when he reach the page: 
    Put the following in first paragraph, before *{% block content %}*
    ```{% if user.is_authenticated %}``` we check if user is logged in 
    ``` Hello, {{ user.username }}.``` display welcome message to user   
    ```{% else %}```    
    ```      <a href="{% url 'users:login' %}">Log in</a>``` redirect user to login page    
    ```{% endif %}```      
*   Test your login page: 
    *   Log off, if you are, on http://localhost:8000/admin/
    *   Go to http://localhost:8000/users/login and enter your credentials
    *   On the header to the page where you are redirected, you should see Hello *your_username*
#####   Add logout component
*   Adding logout link: in project folder, open **base.html** and add the following after the line *Hello, {{ username }}.*:    
    ```<a href="{% url 'users:logout' %}">Log out</a>```    
*   In *users/templates/registration* create **logged_out.html** file and add followings:   
    ```{% extends "learning_logs/base.html" %}```
    ```{% block content %}```   
    ``` <p>You have been logged out. Thank you for visiting!</p>``` 
    ```{% endblock content %}``` 
#####   Add registration component
*   Open **user/urls.py** and add followings:   
    *   At the start after *from django...*```from . import views```    
    *   In **urlpatterns = [...]** add followings:
        ```path('register/', views.register, name='register'),```
*   Open **users/views.py** and add followings: 
    ```def register(request):```    
    ```"""Register a new user"""``` 
    ```if request.method != 'POST':```  
    ```    #Display blank registration form```  
    ```    form = UserCreationForm()``` 
    ```else:``` 
    ```    #Process completed form```   
    ```    form = UserCreationForm(data=request.POST)```    
    ```    if form.is_valid():```   
    ```        new_user = form.save()```    
    ```        #Log user in and then redirect to homepage```    
    ```        login(request, new_user)```  
    ```        return redirect('learning_logs:index')```    
    ```#Display a blank or invalid form```  
    ```context = {'form': form}```  
    ```return render(request, 'registration/register.html', context)``` 
*   In **users/templates/registration** create a file called **register.html** and add the followings:  
    ```{% extends 'learning_logs/base.html' %}```   
    ```{% block content %}```   
    ```  <form method="post" action="{% url 'users:register' %}">```  
    ```    {% csrf_token %}```
    ```    {{ form.as_p }}```
    ```    <button name="submit">Register</button>```   
    ```    <input type="hidden" name="next" value="{% url 'learning_logs:index' %}" />```   
    ```  </form>``` 
    ```{% endblock content %}```    
*   Open **base.html** and in the *{% else %}* condition add following as first line:   
    ```<a href="{% url 'users:register' %}">Register</a> -```   

####    Allow user to own their data
*   In your app_name folder, open **views.py** and add followings:  
    At the start of the file after *from django.shortcuts...* add:  
    ```from django.contrib.auth.decorators import login_required``` 
    From now, you can add **@login_required** just before the view you want to show to registred users only, example:   
    ```@login_required```   
    ```def view_example(request):```
    ```...```
*   In project folder, open **settings.py** and add the followings at the bottom: 
    ```#My settings```  
    ```LOGIN_URL = 'users:login'``` 
    That way you define th default url redirection for unregistred user who attempt to reach a registred-user-only page
*   A good and simple practise is to put **@login_required** to each view by default, and then authorize access after thinking about your way to manage security and user-experience

####    Use django-bootstrap4 app
*   In your virtual environment, install django-bootstrap4: 
    ```$ pip install django-bootstrap4```  
*   In project folder, open **settings.py**, and in *INSTALLED_APPS = [...]* after  your apps, add: 
    ```# Third party apps```    
    ```'bootstrap4',``` 
*   Make sure this new section is located between you apps and default django apps
*   In *app_name/templates/learning_logs* folder Open **base.html**, replace existing content by:   
    MAKE AN EXTERNAL LINK TO HTML CODE
*   Update you differents pages with what you learn in [django-bootstrap4 documentation](https://django-bootstrap4.readthedocs.io/en/latest/)

####    Connect remotely to your Django's localhost
*   On the local computer: ```$ ssh -v -L 9000:localhost: username@your_server_ip```
*   On the remote server, in your project folder: ```$ python manage.py runserver```
*   On the local computer, browse ***http://localhost:9000**


##  Achievements 
*   Go deeper in Django
*   Write a step-by-step cheatsheet for:
    *   Set up a Django project
    *   Manage apps, views, urls, models, forms and admin panel 
    *   Set up an authentication system
    *   Allowing users to own their data
*   Manage database and CRUD (Create Read Update Delete)
*   Set up routines in web/app development with Python/Django
*   Explore next project's main goal => combo Django Mongo DB


---

**BeCode** Intensive Bootcamp     
This project took place in my leearning path in BeCode (see below) to full stack web developer.
In seven months you have a wonderful luck to become a great web developer. Inclusion and share spirit is your daily feeling !  
Give maximum to get maximum :rocket:

##  Collaboration

Hello, I'm [Nicolas](https://www.linkedin.com/in/nicolas-denoel/), a computer science enthusiast who is in the middle of his reconversion as a developer. After 15 years in the commercial sector as a manager and director, I decided to put this career on hold to devote myself fully to development.  
After an intensive 7 month bootcamp at Becode where I was able to acquire the superpowers of a junior developer, I am now constantly exploring the challenges that the various companies and associations active in the field can offer me.  
Positive spirit, with an unquenchable thirst for learning, committed and structured, I like to take up challenges and always progress by giving the best of myself. 
If you have a project, no matter how big or small, don't hesitate to share it, we always have to win by doing things alongside others.  

See you soon!  

##  Timeline 
[:calendar: Discover the great timeline of my adventure to become a developer. Want to write your company's name on it ? Let's meet !](https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2020-06-27)  


[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

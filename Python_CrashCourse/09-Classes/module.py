class Restaurant:
    '''Restaurant object'''


    def __init__(self, name, cook_type):
        self.name = name
        self.type = cook_type
        self.number_served = 0


    def describe_restaurant(self):
        '''Print name and food type of the restaurant'''
        print(f'{self.name.title()} make {self.type}')


    def open_restaurant(self):
        '''Print a notice that the restaurant is open'''
        print(f'{self.name} is open !')


    def set_number_served(self, new_number):
        '''Set the number of customers served'''
        if new_number > self.number_served:
            self.number_served = new_number
        else:
            print('Old value is greater than new value')


    def increment_number_served(self, new_customer):
        '''Add new customers to customers served'''
        if new_customer >= 0:
            self.number_served += new_customer
        else:
            print('Sorry, you can\'t add negative numbers')


class User:
    '''User object'''


    def __init__(self, first_name, last_name, age, country):
        self.first = first_name
        self.last = last_name
        self.age = age
        self.country = country
        self.login_attempts = 0


    def describe_user(self):
        '''Print description of user'''
        print(f'Name: {self.first.title()} {self.last.title()}\nAge: {self.age}\nCountry: {self.country.title()}\n')


    def greet_user(self):
        '''Print a greeting to user'''
        print(f'Hello {self.first.title()}, what’s the weather in {self.country.title()} ?')


    def increment_login_attempts(self):
        '''Increment login attempts number'''
        self.login_attempts += 1


    def reset_login_attempts(self):
        '''Reset login attempts number'''
        self.login_attempts = 0


class Admin(User):
    '''Create an Admin object'''


    def __init__(self, first_name, last_name, age, country):
        '''Init with inheritance from User object'''
        super().__init__(first_name, last_name, age, country)
        self.privileges = Privileges()


class Privileges:
    '''Privileges object to make the Admin object lighter'''


    def __init__(self):
        self.privileges = ['can update', 'can edit', 'can post', 'can delete', 'can ban']


    def show_privileges(self):
        '''Print privileges of Privileges object'''
        for privilege in self.privileges:
            print(privilege.title())        


# 9.4
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

new_rest = Restaurant('Bobi', 'pizzas')
print(new_rest.number_served)
new_rest.number_served = 10
print(new_rest.number_served)
new_rest.set_number_served(4)
print(new_rest.number_served)
new_rest.set_number_served(24)
print(new_rest.number_served)
new_rest.increment_number_served(-10)
new_rest.increment_number_served(6)
print(new_rest.number_served)
print('\n')

#9.5
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
        self.login_attempts += 1

    def reset_login_attempts(self):
        self.login_attempts = 0

new_user = User('nicolas', 'denoel', 36, 'belgium')
print(new_user.login_attempts)
new_user.increment_login_attempts()
print(new_user.login_attempts)
new_user.reset_login_attempts()
print(new_user.login_attempts)
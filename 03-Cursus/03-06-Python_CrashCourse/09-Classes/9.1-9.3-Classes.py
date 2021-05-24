# 9.1
class Restaurant:
    '''Restaurant object'''

    def __init__(self, name, cook_type):
        self.name = name
        self.type = cook_type

    def describe_restaurant(self):
        '''Print name and food type of the restaurant'''
        print(f'{self.name.title()} make {self.type}')

    def open_restaurant(self):
        '''Print a notice that the restaurant is open'''
        print(f'{self.name} is open !')

new_restaurant = Restaurant('Royal Palace', 'french cooking')
print(new_restaurant.name)
print(new_restaurant.type)
new_restaurant.describe_restaurant()
new_restaurant.open_restaurant()
print('\n')

# 9.2
class Restaurant:
    '''Restaurant object'''

    def __init__(self, name, cook_type):
        self.name = name
        self.type = cook_type

    def describe_restaurant(self):
        '''Print name and food type of the restaurant'''
        print(f'{self.name.title()} make {self.type}')

    def open_restaurant(self):
        '''Print a notice that the restaurant is open'''
        print(f'{self.name} is open !')

first_rest = Restaurant('Royal Palace', 'french cooking')
second_rest = Restaurant('Bingo', 'burgers')
third_rest = Restaurant('La casa', 'spanish food')
first_rest.describe_restaurant()
second_rest.describe_restaurant()
third_rest.describe_restaurant()
print('\n')

# 9.3
class User:
    '''User object'''

    def __init__(self, first_name, last_name, age, country):
        self.first = first_name
        self.last = last_name
        self.age = age
        self.country = country

    def describe_user(self):
        '''Print description of user'''
        print(f'Name: {self.first.title()} {self.last.title()}\nAge: {self.age}\nCountry: {self.country.title()}\n')

    def greet_user(self):
        '''Print a greeting to user'''
        print(f'Hello {self.first.title()}, what’s the weather in {self.country.title()} ?')

first_user = User('nicolas', 'denoel', '36', 'belgium')
second_user = User('michèle', 'holzkenner', '42', 'paradise')
first_user.describe_user()
second_user.describe_user()
first_user.greet_user()
second_user.greet_user()
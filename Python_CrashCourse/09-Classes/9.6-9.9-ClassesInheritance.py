# 9.6
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


class IceCreamStand(Restaurant):
    '''IceCream stand object that inherit from Restaurant object'''

    def __init__(self, name, cook_type):
        '''Init with inheritance from Restaurant object'''
        super().__init__(name, cook_type)
        self.flavors = ['vanilla', 'chocolate', 'strawberry', 'melon']

    def display_flavors(self):
        '''Print all flavors of IceCreamStand object'''
        for flavor in self.flavors:
            print(flavor.title())

new_ice = IceCreamStand('icygood', 'icecream')
print(f'At {new_ice.name.title()} we serve delicious {new_ice.type} with the following flavors:')
new_ice.display_flavors()
print('\n')

# 9.7
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
        self.privileges = ['can update', 'can edit', 'can post', 'can delete', 'can ban']

    def show_privileges(self):
        '''Print privileges of Admin object'''
        for privilege in self.privileges:
            print(privilege.title())

webadmin = Admin('nicolas', 'denoel', 36, 'belgium')
webadmin.show_privileges()
print('\n')

# 9.8
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

webadmin = Admin('nicolas', 'denoel', 36, 'belgium')
webadmin.privileges.show_privileges()
print('\n')

# 9.9
class Car:
    '''A Car object'''

    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_ddescriptive_name(self):
        long_name = f'{self.year} {self.make} {self.model}'
        return long_name.title()

    def read_odometer(self):
        print(f'This car has {self.odometer_reading} miles on it.')

    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print('You can\'t roll back an odometer !')

    def increment_odometer(self, miles):
        if miles >= 0:
            self.odometer_reading += miles
        else: 
            print('You can\'t input negative values')


class ElectricCar(Car):
    '''An electric car object'''

    def __init__(self, make, model, year):
        super().__init__(make, model, year)
        self.battery = Battery()


class Battery:
    '''A car's battery object'''

    def __init__(self, battery_size=75):
        '''Initialize battery's attributes'''
        self.battery_size = battery_size

    def describe_battery(self):
        '''Description of a car's battery'''
        print(f'This car has a {self.battery_size}-KWh battery')

    def get_range(self):
        '''Print range of battery'''
        if self.battery_size == 75:
            range = 260
        else:
            range = 315
        
        print(f'This car have {range} miles range with full charge.')

    def upgrade_battery(self):
        if self.battery_size < 100:
            self.battery_size = 100
        else : 
            print('You have the maximum power battery')

new_elec_car = ElectricCar('tesla', 'model s', '2018')
new_elec_car.battery.get_range()
new_elec_car.battery.upgrade_battery()
new_elec_car.battery.get_range()
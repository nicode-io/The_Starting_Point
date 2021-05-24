# 8.12
def sandwiches(*args):
    for topping in args:
        print(f'{topping.title()} added !')
    print('\n')
sandwiches('chesse', 'salad', 'tomatoes')
sandwiches('gherkin', 'salad', 'rosbeef')
sandwiches('peperoni', 'salad', 'tuna')

#8.13
def build_profile(first, last, **user_info):
    ''' 
    Buld a dictionary containing
    everything about a user 
    '''
    user_info['first_name'] = first
    user_info['last_name'] = last
    return user_info
user_profile = build_profile('nicolas', 'denoel', location='nivelles', filed='code', country='belgium')
print(user_profile)
print('\n')

#8.14
def cars(manufacturer, model_name, **car_info):
    '''
    Create a dictionary of a car with every time a manufacturer and a model_name,
    it than accepts multiples keywords/arguments
    '''
    car_info['manufacturer'] = manufacturer
    car_info['model_name'] = model_name
    return car_info
dictionary = cars('tesla', 'model s', color='white', year='2018')
print(dictionary)
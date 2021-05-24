# 8.3
def make_shirt(size, print_text):
    '''Display size and text to print on tshirt'''
    print(f'Size: {size} - Text to print : {print_text}')
make_shirt('xl', 'In code I trust')
make_shirt(print_text='In code I trust', size='xl')
print('\n')

# 8.4
def make_shirt(size='large', print_text='I love Python'):
    '''Display size and text to print on tshirt'''
    print(f'Size: {size} - Text to print : {print_text}')
make_shirt()
make_shirt('xl')
make_shirt('xl', 'In code I trust')
print('\n')

# 8.5
def describe_city(city_name, city_country='Belgium'):
    '''Display in wich country the city is located'''
    print(f'{city_name.title()} is in {city_country.title()}')
describe_city('Brusssels')
describe_city('Toulouse', 'France')
describe_city('Marrakech', 'Morocco')
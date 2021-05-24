# 6.7
person_one = {
    'first_name': 'Michèle',
    'last_name': 'Holzkenner',
    'age' : '42',
    'city': 'Nivelles',
    }
person_two = {
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'age' : '20',
    'city': 'Princeton',
}
person_three = {
    'first_name': 'Marie',
    'last_name': 'Curie',
    'age' : '20',
    'city': 'Paris',
}
people = [person_one, person_two, person_three]
for person in people:
    print(person)
print('\n')

# 6.8
pet_one = {
    'kind': 'cat',
    'owner': 'miguel',
}
pet_two = {
    'kind': 'dog',
    'owner': 'terance',
}
pet_three = {
    'kind': 'snake',
    'owner': 'django',
}
pet_four = {
    'kind': 'mouse',
    'owner': 'philip',
}
pets = [pet_one, pet_two, pet_three, pet_four]
for pet in pets:
    print(pet)
print('\n')

# 6.9
favorite_places = {
    'django': ['brussel', 'copenhage', 'australia'],
    'phil': ['lyon', 'paris', 'toulouse'],
    'adrien': ['pekin', 'turin', 'berlin'],
}
for name, towns in favorite_places.items(): 
    print(f'{name.title()}\'s favorites towns are :')
    for town in towns:
        print(f' {town.title()}')
    print('\n')

# 6.10
favorite_number = {
    'Python': [42, 24],
    'Django': [15, 51],
    'Pip': [15, 24],
    'Michèle': [7, 11],
    }
for key, value in favorite_number.items():
    print(key, value)
print('\n')

# 6.11
cities = {
    'lisbonne': {
        'country': 'portugal',
        'weather': 'sunny weather',
        'fact': 'You need to eat Pasteis de Belem !',
    },
    'marrakech': {
        'country': 'morocco',
        'weather': 'hot and sunny weather',
        'fact': 'Let\'s have a tea at djam al efna !',
    },
    'leh': {
        'country': 'india',
        'weather': 'moutain weather',
        'fact': 'What a sensation being on top of the world !',
    },
}
for city, city_infos in cities.items():
    print(f'Visit {city.title()}, located in {city_infos["country"].title()} you will have a {city_infos["weather"]}. {city_infos["fact"]}')


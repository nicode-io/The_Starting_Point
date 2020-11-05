# 6.1
person = {
    'first_name': 'Michèle',
    'last_name': 'Holzkenner',
    'age' : '42',
    'city': 'Nivelles',
    }
for key, value in person.items():
    print(value)
print('\n')

# 6.2
favorite_number = {
    'Python': 42,
    'Django': 15,
    'Pip': 15,
    'Michèle': 711,
    }
for key, value in favorite_number.items():
    print(key, value)
print('\n')

# 6.3
glossary = {
    'oop': 'object of power',
    'loop': 'don\'t like infinite',
    'condition': 'every choice is a renunciation',
    'tuple': 'change all or nothing',
    'immutable': 'like elders, don\'t change anymore',
    }
for key, value in glossary.items():
    print(f'{key.title()}\'s definiton: {value}')
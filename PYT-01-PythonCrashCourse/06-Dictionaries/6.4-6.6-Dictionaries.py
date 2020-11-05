# 6.4
glossary = {
    'oop': 'object of power',
    'loop': 'don\'t like infinite',
    'condition': 'every choice is a renunciation',
    'tuple': 'change all or nothing',
    'immutable': 'like elders, don\'t change anymore',
    'dictionaries': 'contain the knowledge',
    'indent': 'the way to be clean',
    }
for key, value in glossary.items():
    print(f'{key.title()}\'s definiton: {value}')
print('\n')

# 6.5
waters = {
    'nile': 'egypt',
    'meuse': 'liège',
    'sambre': 'charleroi',
    }
for water, country in waters.items():
    print(f'The {water.title()} runs trough {country.title()}')
print('\n')
for water in sorted(waters.keys()):
    print(water.title())
print('\n')
for country in sorted(waters.values()):
    print(country.title())
print('\n')

# 6.6
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python',
    }
poll_names = ['bob', 'james', 'thomas', 'jen', 'edward', 'neil']
for name in poll_names:
    if name not in favorite_languages:
        print(f'Hey {name.title()}, we wich you to take our poll, are you okay ?')
    else:
        print(f'Thanks {name.title()} for taking the poll !')
    
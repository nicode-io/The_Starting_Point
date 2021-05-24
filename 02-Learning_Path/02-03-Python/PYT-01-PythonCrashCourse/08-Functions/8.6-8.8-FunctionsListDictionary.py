# 8.6
def city_country(city_name, city_country):
    '''return a string with city and coutnry'''
    return f'{city_name.title()}, {city_country.title()}'
print(city_country('brussels', 'belgium'))
print(city_country('marrakech', 'morocco'))
print(city_country('lisbonne', 'portugal'))
print('\n')

# 8.7
def make_albums(artist, title, songs_number=None):
    '''Build dictionary for an album'''
    if songs_number:
        album = {'artist': artist, 'title': title, 'songs': songs_number}
    else:
        album = {'artist': artist, 'title': title}
    return album
print(make_albums('Iam', 'L\'école du micro d\'argent'))
print(make_albums('Starflam', 'survivants', 17))
print(make_albums('Offspring', 'Smash', 14))
print('\n')

# 8.8
def make_albums(artist, title, songs_number=None):
    '''Build dictionary for an album'''
    if songs_number:
        album = {'artist': artist, 'title': title, 'songs': songs_number}
    else:
        album = {'artist': artist, 'title': title}
    return album
while True:
    artist = input('Wich artist name do you want to add ? (q to leave) ')
    if artist != 'q':
        title = input('What\'s the title of the album ? (q to leave) ')
        if title != 'q':
            print(make_albums(artist, title))
        else:
            break
    else:
        break



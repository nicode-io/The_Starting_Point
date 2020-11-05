# 3.8
trips = ['toulouse','ladakh', 'marrakech', 'lisbonne', 'deauville']
print(trips)
print(sorted(trips)) #temporary sort
print(trips)
print(sorted(trips, reverse=True)) 
print(trips)
trips.reverse()
print(trips)
trips.reverse()
print(trips)
trips.sort() # definitive sort
print(trips)
trips.sort(reverse=True)
print(trips)

#3.9 
diner_people = ['albert einstein', 'bob dylan', 'freddy mercury']
print(f'\nWe will be {len(diner_people)} guests for the diner')

# 3.10
cars =['tesla', 'bmw', 'toyota', 'porsche', 'ferrari', 'lamborghini', 'polestar', 'audi']
print(f'{cars[2].title()} are robust')
cars.append('mercedes')
cars.insert(2, 'subaru')
del cars[5]
popped = cars.pop(2)
cars.reverse()
print(f'There\'s {len(cars)} brands in Cars\' list')
cars.sort()
print(cars)
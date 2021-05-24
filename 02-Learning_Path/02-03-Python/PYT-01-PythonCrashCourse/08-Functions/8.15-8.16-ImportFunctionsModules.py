# 8.15
from module import cars as c
dictionary = c('tesla', 'model s', color='white', year='2018')
print(dictionary)

# 8.16
import module as m
dictionary = m.cars('tesla', 'model s', color='white', year='2018')
print(dictionary)

from module import *
dictionary = cars('tesla', 'model s', color='white', year='2018')
print(dictionary)

from module import cars
dictionary = cars('tesla', 'model s', color='white', year='2018')
print(dictionary)
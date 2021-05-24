# 4.3
for number in range(1, 21):
  print(number)

# 4.4
for number in range(1, 1000001):
  print(number)

# 4.5
numbers = [number for number in range(1, 1000001)]
print(max(numbers), min(numbers), sum(numbers))

# 4.6
for odd_number in range(1, 21, 2):
  print(odd_number)

# 4.7
for multiple_three in range(3, 31, 3):
  print(multiple_three)

# 4.8
for number in range(1, 11):
  print(number**3)

# 4.9
cubes = [number**3 for number in range(1, 11)]
print(cubes)
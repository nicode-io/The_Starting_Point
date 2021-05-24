#!/bin/python

"""
Game of rock, paper, scissors develop for the workshop:
 0. import libraries
 1. init score of user, computer to zero, count
 2. ask to the user number of game to play
 3. create a for loop to fill a list with computer choices
 4. create a while loop to ask the choice of the user
    - compare the computer choice and user choice
    - display the winner
    - increment his score
5. display the score and give the winner of the game
"""
from random import randint

# init variables
computer_score = 0
user_score = 0
count = 0

# Create a function to translate a number to his name
def choiceName(number):
    if number == 1:
        return "Rock"
    elif number == 2:
        return "Paper"
    else:
        return "Scissors"

# for loop to fill a list of computer choice with a random, this loop is optional
number_games = int(input("Enter the number of games: "))
computer_choices = []
for i in range(number_games):
    computer_choices.append(choiceName(randint(1, 3)))
# computer_choices = [choiceName(randint(1,3) for i in range(number_games)]


while count < number_games:
    user_choice = int(input("Choose 1.Rock, 2.Paper, 3.Scissors: "))
    user_choice_name = choiceName(user_choice)

    if (computer_choices[count] == "Rock" and user_choice_name == "Scissors") or (computer_choices[count] == "Paper" and user_choice_name == "Rock") or (computer_choices[count] == "Scissors" and user_choice_name == "Paper"):
        print("Computer wins !")
        computer_score += 1
    elif (user_choice_name == "Rock" and computer_choices[count] == "Scissors") or (user_choice_name == "Paper" and computer_choices[count] == "Rock") or (user_choice_name == "Scissors" and computer_choices[count] == "Paper"):
        print("User wins")
        user_score += 1
    else:
        print("User and Computer are tie")

    count += 1


if computer_score > user_score:
    print("Computer: {}, User: {} and Computer is the winner of the game".format(computer_score, user_score))
elif computer_score < user_score:
    print("Computer: {}, User: {} and User is the winner of the game".format(computer_score, user_score))
else:
    print("Computer: {}, User: {}, computer and user are tie ".format(computer_score, user_score))

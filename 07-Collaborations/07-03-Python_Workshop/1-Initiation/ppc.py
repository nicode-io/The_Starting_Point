# jeu Rock, Paper, Scissors
# l'ordinateur joue au hasard

from random import randint
from tkinter import *

def augmenter_scores(user_choice,computer_choice):
    global user_score, computer_score
    if user_choice == 1 and computer_choice == 2:
        computer_score += 1
    elif user_choice == 2 and computer_choice == 1:
        user_score += 1
    elif user_choice == 1 and computer_choice == 3:
        user_score += 1
    elif user_choice == 3 and computer_choice == 1:
        computer_score += 1
    elif user_choice == 3 and computer_choice == 2:
        user_score += 1
    elif user_choice == 2 and computer_choice == 3:
        computer_score += 1        

def jouer(computer_choice):
    global user_score, computer_score, score1, score2
    user_choice = randint(1,3)
    if user_choice==1:
        lab3.configure(image=Rock)
    elif user_choice==2:
        lab3.configure(image=Paper)
    else:
        lab3.configure(image=Scissors)
    augmenter_scores(user_choice,computer_choice)
    score1.configure(text=str(computer_score))
    score2.configure(text=str(user_score))

def jouer_Rock():
    jouer(1)
    lab1.configure(image=Rock)

def jouer_Paper():
    jouer(2)
    lab1.configure(image=Paper)

def jouer_Scissors():
    jouer(3)
    lab1.configure(image=Scissors)

def reinit():
    global user_score,computer_score,score1,score2,lab1,lab3
    computer_score = 0
    user_score = 0
    score1.configure(text=str(computer_score))
    score2.configure(text=str(user_score))
    lab1.configure(image=rien)
    lab3.configure(image=rien)


# variables globales
computer_score = 0
user_score = 0

# fenetre graphique
fenetre = Tk()
fenetre.title("Rock, Paper, Scissors")

#images
rien = PhotoImage(file ='./game_pictures/rien.gif')
versus = PhotoImage(file ='./game_pictures/versus.gif')
Rock = PhotoImage(file ='./game_pictures/Rock.gif')
Paper = PhotoImage(file ='./game_pictures/Paper.gif')
Scissors = PhotoImage(file ='./game_pictures/Scissors.gif')

# Label
texte1 = Label(fenetre, text="Humain :", font=("Helvetica", 16))
texte1.grid(row=0,column=0)

texte2 = Label(fenetre, text="Machine :", font=("Helvetica", 16))
texte2.grid(row=0,column=2)

texte3 = Label(fenetre, text="Pour jouer, cliquez sur une des icones ci-dessous.")
texte3.grid(row=3, columnspan=3, pady=5)

score1 = Label(fenetre, text="0", font=("Helvetica", 16))
score1.grid(row=1, column=0)    

score2 = Label(fenetre, text="0", font=("Helvetica", 16))        
score2.grid(row=1, column=2)      

lab1 = Label(fenetre, image=rien)
lab1.grid(row=2, column=0)

lab2 = Label(fenetre, image=versus)
lab2.grid(row =2, column =1)

lab3 = Label(fenetre, image=rien)
lab3.grid(row =2, column =2)

# boutons
bouton1 = Button(fenetre,command=jouer_Rock)
bouton1.configure(image=Rock)
bouton1.grid(row =4, column =0)

bouton2 = Button(fenetre,command=jouer_Paper)
bouton2.configure(image=Paper)
bouton2.grid(row =4, column =1,)

bouton3 = Button(fenetre,command=jouer_Scissors)
bouton3.configure(image=Scissors)
bouton3.grid(row =4, column =2)

bouton4 = Button(fenetre,text='Recommencer',command=reinit)
bouton4.grid(row =5, column =0, pady =10, sticky=E)

bouton5 = Button(fenetre,text='Quitter',command=fenetre.destroy)
bouton5.grid(row =5, column =2, pady =10, sticky=W)

# demarrage :
fenetre.mainloop()
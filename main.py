from math import cos


weight = int(input("Weight: ")) 

if weight<=1:
    cost=5
elif weight<=5:
    cost=10
elif weight<=10:
    cost=15
elif weight<=20:
    cost=20
else:
    cost=0

print("cost of shipping: ",cost)
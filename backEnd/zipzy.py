data = open("states.txt", "r")
for state in data:
    state = state.split(",")
    print(state)
    
    newdata = open("newstates.txt", "a+")
    newdata.write(state[0]+ f"\n")

# 1-Duplicate in array 
# A[] = {0,1,2,3,4,5}
# B[] = {5,4,3,2,1,0}
#using sets- convert array into sets and find duplicate items

A = [0,1,2,3,4,5]
B = [5,4,3,2,1,0]
set_A = set(A)
set_B = set(B)
duplicates = set_A.intersection(set_B)
print("Duplicate elements:", list(duplicates))

#using loop
A = [0,1,2,3,4,5]
B = [5,4,3,2,1,0]
duplicates = []
for element in A:
    if element in B:
        duplicates.append(element)
print("Duplicates elements:",duplicates)



# 2-Occurrence of key in an array 
#key = 1
#A[] = {0,1,2,3,4,5}
#B[] = {5,4,3,2,1,0}
key = 1
A = [0,1,2,3,4,5]
B = [5,4,3,2,1,0]
count_A = 0
count_B = 0
for element in A:
    if element == key:
        count_A += 1

for element in B:
    if element == key:
        count_B += 1

print(f"Occurrences of{key} in array A: {count_A}")
print(f"Occurrences of{key} in array B: {count_B}")          



# 3-Find if two arrays are equal
# Testcase 1 : 
# A[] = {1,2,5,4,0}
# B[] = {1,2,5,4,0}
# Testcase 2:
# A[] = {1,2,3,4,5}
# B[] = {11, 22, 33 ,44}

# you can use the '==' opetator to compare them element by element
# Testcase 1
A = [1, 2, 5, 4, 0]
B = [1, 2, 5, 4, 0]
if A == B:
    print("Arrays A B are equal.")
else:
    print("Array A and B are not equal.") 


# Testcase 2
A = [1, 2, 3, 4, 5]
B = [11, 22, 33, 44]
if A == B:
    print("Arrays A and B are equal.")
else:
    print("A and B are not equal")    


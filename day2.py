# Maximum in array
A = {0,1,2,3,4,5}
B = {5,4,3,2,1,0}
maximum_value_A = max(A)
maximum_value_B = max(B)
print("Maximum value in A:", maximum_value_A)
print("Maximum value in B:", maximum_value_B)



# Minimum in array
A = {0,1,2,3,4,5}
B = {5,4,3,2,1,0}
minimum_value_A = max(A)
minimum_value_B = max(B)
print("Minimum value in A:", minimum_value_A)
print("Minimum value in B:", minimum_value_B)



# Find key in array
# Testcases : 
# k = 4
# A[] = {1,2,5,4,0}
# k = 33
# B[] = {11, 22, 33 ,44}
k = 4
A = [1,2,5,4,0]
if k in A:
    print(f"{k} is found in array A.")
else:
    print(f"{k} is not found in array A.")
    k = 33
B = [11,22,33,44]
if k in B:
    print(f"{k} is found in array B.")
else:
    print(f"{k} is not found in array B.")            

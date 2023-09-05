#sort an array- you can use the "sorted()" function or the "sort" methos for lists
#using sorted() Function
A = [0,1,2,3,4,5]
B = [5,4,3,2,1,0]
sorted_A = sorted(A)
sorted_B = sorted(B)
print("Sorted A:", sorted_A)
print("Sorted B:", sorted_B)

#using sort() method
A = [0,1,2,3,4,5]
B = [5,4,3,2,1,0]
A.sort()
B.sort()
print('Sorted A:',A)
print('Sorted B:',B)


# first occurrence of a key- you can use the index() method here how you can do it for array A and B with the key 1
A = [0,1,2,3,4,5]
B = [5,4,3,2,1,0]
key = 1
try:
    index_A = A.index(key)
    print(f"First occurrence of {key} in A is at index{index_A}")
except ValueError:
    print(f"{key} not found in A")

try:
    index_B = B.index(key)
    print(f"First occurrence of {key} in B is at index{index_B}")
except ValueError:
    print(f"{key} not found in B")    





#using loop no add array
def find_even_and_odd(arr):
    even_numbers = []
    odd_numbers = []

    for num in arr:
        if num % 2 == 0:
            even_numbers.append(num)
        else:
            odd_numbers.append(num)

    return even_numbers, odd_numbers

# Testcase 1
A = [1, 2, 5, 4, 0]
B = [1, 2, 5, 4, 0]

even_A, odd_A = find_even_and_odd(A)
even_B, odd_B = find_even_and_odd(B)

print("Testcase 1:")
print("Array A - Even numbers:", even_A)
print("Array A - Odd numbers:", odd_A)
print("Array B - Even numbers:", even_B)
print("Array B - Odd numbers:", odd_B)

# Testcase 2
C = [1, 2, 3, 4, 5]
D = [11, 22, 33, 44]

even_C, odd_C = find_even_and_odd(C)
even_D, odd_D = find_even_and_odd(D)

print("\nTestcase 2:")
print("Array C - Even numbers:", even_C)
print("Array C - Odd numbers:", odd_C)
print("Array D - Even numbers:", even_D)
print("Array D - Odd numbers:", odd_D)






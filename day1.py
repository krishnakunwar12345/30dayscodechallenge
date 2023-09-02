#using list slicing to reverse an Array
arr = [11,22,33,44,55]
print("Array is:",arr)

res = arr[::-1] 
print("new reversed array:",res)



#reverse string "hello world":
txt = "hello world"[::-1]
print(txt)




#compare array
import numpy as np
an_array = np.array([[1,2],[3,4]])
another_array = np.array([[1,2],[3,4]])

comparison = an_array == another_array
equal_arrays = comparison.all()

print(equal_arrays)
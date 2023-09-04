# Type casting
# Closure
# Var and const
# Loops (for, foreach, for of, for in) 
# Scope (Lexical)
# maps


#type casting
#it is a process to convert a value from one data type to another
#implicit method- in this method converts the datatype in to another datatype automatically
a = 9
print(type(a))

b = 4.4
print(type(b))

c = a + b
print(c)
print(type(c))

d = a * b
print(d)
print(type(d))


#Explicit method- in this method user involvement to convert the variable data type into the requried data type
# int to float
a = 4
n = float(a)
print(n)
print(type(n))

# float to int
a = 3.2
n = int(a)
print(n)
print(type(n))

# int to string
a = 6
n = str(a)
print(n)
print(type(n))



#closure- it is a function object that remembers values in enclosing scopes even if they are not present in memory
def outer_function(x):
    def inner_function(y):
        return x + y
    return inner_function

closure = outer_function(10)
result = closure(5)  # The inner function still has access to 'x'
print(result)  # Output will be 15


# Loops (for, foreach, for of, for in)
# for loop- for loop to iterate over elements of an iterable like a list,tuple,string or dictionary
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# while loop- it is use for iterative purpose they continue executing long as a specified condition is 'True'
i = 0
while i < 5:
    print(i)
    i += 1
    
#scope lexical-Lexical scope means that the scope of a variable is determined by its location within the source code, specifically where it is defined or declared
# Globle scope- Variables defined outside of all functions or classes have global scope. They can be accessed from anywhere in the code, both inside and outside functions or classes
global_var = 10  # This is a global variable

def func():
    print(global_var)

func()

#Enclosing (Nested) Scope-In Python, when you have nested functions, each inner function has access to variables in its enclosing (outer) functions' scope
def outer():
    outer_var = 20  
    def inner():
        print(outer_var)  
    inner()
outer()



#Local Scope-Variables defined inside a function have local scope, meaning they are only accessible within that function
def func():
    local_var = 30  # This is a local variable
    print(local_var)

func()


# maps- a "map" can refer to two different concepts: a data structure and a higher-order function for applying a function to elements of an iterable
#Dictionary (Map as a Data Structure)-a dictionary is a built-in data structure that allows you to store key-value pairs. It's sometimes referred to as a "map" in other programming languages. Dictionaries are unordered collections of items where each item is stored as a pair of a key and its associated value
# Creating a dictionary
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Accessing values using keys
print(person["name"])  # Output: "Alice"

# Modifying values
person["age"] = 31

# Adding new key-value pairs
person["gender"] = "female"

# Iterating over keys and values
for key, value in person.items():
    print(f"{key}: {value}")



# map() Function (Functional Programming Map)-map() function that is used for applying a given function to each item in an iterable (e.g., a list) and returning an iterable of the results. It's a higher-order function, which means it takes a function as an argument
# Define a function to double a number
def double(x):
    return x * 2

# Create a list of numbers
numbers = [1, 2, 3, 4, 5]

# Use map to apply the function to each element in the list
doubled_numbers = map(double, numbers)

# Convert the map result to a list (or another iterable)
doubled_numbers_list = list(doubled_numbers)

print(doubled_numbers_list)  # Output: [2, 4, 6, 8, 10]




def calculate():
    global number_1, number_2, calc_type

    operation = calc_type

    if operation == "+":
        result = number_1 + number_2
        if type(result) == float:
            result = round(result, 2)
        else:
            result = int(result)
        print(f"the reuslt of {number_1} + {number_2} is {result}")
        result = f"{number_1} + {number_2} = {result}"
        return result

    if operation == "-":
        result = number_1 - number_2
        if type(result) == float:
            result = round(result, 2)
        else:
            result = int(result)
        print(f"the reuslt of {number_1} - {number_2} is {result}")
        result = f"{number_1} - {number_2} = {result}"
        return result

    if operation == "*" or operation == "x" or operation == "X":
        result = number_1 * number_2
        if type(result) == float:
            result = round(result, 2)
        else:
            result = int(result)
        print(f"the reuslt of {number_1} * {number_2} is {result}")
        result = f"{number_1} x {number_2} = {result}"
        return result

    if operation == "." or operation == "/" or operation == "÷":
        result = number_1 / number_2
        if result.is_integer() == True:
            result = int(result)
        else:
            pass
        print(f"the reuslt of {number_1} / {number_2} is {result}")
        result = f"{number_1} / {number_2} = {result}"
        return result

def change_to_int():
    global number_1, number_2, calc_type

    try:
        number_1 = float(number_1)
        number_2 = float(number_2)
    except Exception:
        result = "We need numbers my friend"
        return result

    else: 
        if number_1.is_integer():
            number_1 = int(number_1)
        else:
            pass
        
        if number_2.is_integer():
            number_2 = int(number_2)
        else:
            pass

        # print("all done check info:")
        # print(f"first number: {number_1}")
        # print(f"second number: {number_2}")
        # print(f"operarion type:  {calc_type}")
        # print("---------------")
        # print("input types:")
        # print(f"number_1 type: {type(number_1)}")
        # print(f"number_2 type: {type(number_2)}")
        # print(f"calc type: {type(calc_type)}")
        return calculate()


def check_poin(x, y, z):
    global number_1, number_2, calc_type

    number_1 = x
    number_2 = y
    calc_type = z

    calc_type_list = ["+" , "-", "*", "x", "/", ".", "X", "÷"]


    if len(number_1) == 0 or len(number_2) == 0 or len(calc_type) == 0:
        result = ("None | Wrong input")
        return result
    else:
        if calc_type not in calc_type_list:
            result = ("Wrong calculation type")
            return result
        else:
            return change_to_int()



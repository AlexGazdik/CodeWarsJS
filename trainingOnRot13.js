// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Please note that using encode is considered cheating.


def rot13(message):
    alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    alpha_dict = dict(zip(alphabet, range(1,27)))
    message_index = []
    for i in message.lower():
        message_index.append(alpha_dict.get(i))
    x = lambda a : a + 13 
    rot13_index = list(map(x,message_index))
    rot13_message = []
    for i in rot13_index:
        if i < 26:
            rot13_message.append(alphabet[i-1])
        else:
            rot13_message.append(alphabet[i - 27])
    listToStr = ''.join([str(i) for i in rot13_message])
    capCount = 0
    translated =''
    
    for i in message:
        if i.isupper() == True:
            capCount += 1
            cl = message.index(i)
            translated += listToStr[:cl] + listToStr[cl].swapcase() + listToStr[cl + 1:]
    if capCount > 0:
        return translated
    else:
        return listToStr
    

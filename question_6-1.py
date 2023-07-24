#!/usr/bin/env python3
"""isPalindrome Function"""

def isPalindrome(string):
    """
    isPalindrome takes user input and checks if it's
    a palindrome. If it's not, it returns the word in
    reverse
    """
    newString = string[::-1]

    if newString == string:
        return ("{} is palindrome".format(string))
    return newString

string = input("Enter a word: ")
print(isPalindrome(string))

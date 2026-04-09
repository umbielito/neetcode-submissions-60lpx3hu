class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        charMap = {
            "}": "{",
            ")": "(",
            "]": "["
        }
        for char in s:
            print(stack)
            if char in charMap.values():
                stack.append(char)
            else:
                if char not in charMap or len(stack) == 0:
                    return False
                else:
                    top = stack[len(stack) - 1]
                    if top != charMap[char]:
                        return False
                    else:
                        stack.pop()
        if len(stack):
            return False
        return True
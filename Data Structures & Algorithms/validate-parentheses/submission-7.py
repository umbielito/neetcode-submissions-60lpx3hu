class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        charMap = {
            "}": "{",
            ")": "(",
            "]": "["
        }
            
        for char in s:
            # Se for um caractére que "abre" apenas adiciona à stack
            if char in charMap.values():
                stack.append(char)
            else:
                # Se não for for um caractére que "fecha" ou se a stack estiver vazia, retorna Falso
                if char not in charMap or not stack:
                    return False
                else:
                    # Verifica se o caractére não corresponde ao que fecha o caractére do topo
                    if stack[-1] != charMap[char]:
                        return False
                    else:
                        stack.pop()

        return True if not stack else False
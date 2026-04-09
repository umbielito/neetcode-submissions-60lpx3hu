class DynamicArray:

    def __init__(self, capacity: int):
        self.items = [0] * capacity
        self.capacity = capacity
        self.length = 0

    def get(self, i: int) -> int:
        return self.items[i]

    def set(self, i: int, n: int) -> None:
        self.items[i] = n

    def pushback(self, n: int) -> None:
        if self.length == self.capacity:
            self.resize()
        self.items[self.length] = n
        self.length += 1

    def popback(self) -> int:
        item = self.items[self.length - 1]
        self.items[self.length - 1] = 0
        self.length -= 1
        return item

    def resize(self) -> None:
        self.capacity *= 2
        new_items = [0] * self.capacity
        for i in range(self.length):
            new_items[i] = self.items[i]
        self.items = new_items

    def getSize(self) -> int:
        return self.length
        
    def getCapacity(self) -> int:
        return self.capacity

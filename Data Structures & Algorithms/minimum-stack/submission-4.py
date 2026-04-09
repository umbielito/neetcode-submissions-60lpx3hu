class MinStack:

    def __init__(self):
        self.stack = []
        self.min = None
        

    def push(self, val: int) -> None:
        print(f"Pushing val {val}. CurrentMin {self.min}")
        self.stack.append(val)
        if self.min == None or val < self.min:
            print("Should replace min")
            self.min = val

    def pop(self) -> None:
        self.stack.pop()
        if self.stack:
            new_min = self.stack[0]
            for item in self.stack:
                if item < new_min:
                    new_min = item
            self.min = new_min
        else:
            self.min = None


    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min

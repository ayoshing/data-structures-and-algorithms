class Node
    attr_accessor :value, :next

    def initialize(value)
        @value = value
        @next = nil
    end
end

class LinkedList
    attr_accessor :head, :tail, :length

    def initialize
        @head = nil
        @tail = nil
        @length = 0
    end

    def append(value)
        node = Node.new(value)
        if !self.head && !self.tail
            self.head = node
            self.tail = node
        else
            self.tail.next = node
            self.tail = self.tail.next
        end
        self.length += 1
    end

    def prepend(value)
        node = Node.new(value)
        if !self.head && !self.tail
            self.head = node
            self.tail = node
        else
            node.value = value
            node.next = self.head
            self.head = node
        end
        self.length += 1
    end
    
end
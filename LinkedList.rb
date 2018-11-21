class Node
    attr_accessor :value, :next

    def initialize(value)
        @value = value
        @next = nil
    end
end

class LinkedList
    attr_accessor :head, :length

    def initialize
        @head = nil
        @length = 0
    end

    def append(value)
        self.head = Node.new(value)
        self.length += 1
    end
end
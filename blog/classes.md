This week, we learned a lot about ruby. We especially did a lot of work with using classes. Classes are very useful in ruby, as they allow for the programmer to organize methods and variables within a class. An example of this could be the class dog, which takes a name as an input:

class dog
	def initialize(name)
		@name = name
	end
end

In this example, when someone wants to create a new dog, they can type in dog.new("Dog's name"). Now we have a dog! This is useful because now, we can create methods that only dogs can do, such as:

class dog
	def bark
		puts "Woof, Woof!"
	end
end

#bark can only be applied to dogs because it is within the dog class. Another interesting thing that is unique to classes is something known as instance variables. If we go back to the original code, there is a line @name = name. @name is known as an instance variable. What this means is that just like the method, it can only be accessed within the class. For example, we can write:

class dog
	def whats_your_name?
		puts @name
	end
end

@name was set equal in a different method, but it is still accessible because of that little @ symbol.
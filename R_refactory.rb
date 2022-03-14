# method get points&comments
def point_comment
  puts "Please enter a rating on a scale of 1 to 5"
  point = gets.to_i
  if point <= 0 || point > 5
    puts "Please enter on a scale of 1 to 5"
  else
    puts "Enter your comments."
    comment = gets
    post = "Point: #{point} Comment: #{comment}"
    File.open("data.txt", "a") do |file|
      file.puts(post)
    end
  end
end

# method get result
def get_result
  puts "Results to date."
  File.open("data.txt", "r") do |file|
    file.each_line do |line|
      puts line
    end
  end
end


while true
  puts "Please select the process to be carried out from 1 to 3"
  puts "1: Enter rating points and comments."
  puts "2: Check the results so far."
  puts "3: Stop."
  num = gets.to_i
  
  case num
  when 1
    point_comment  # method
  when 2
    get_result  # method
  when 3
    puts "Termination."
    break
  else
    puts "Please enter 1 to 3"
  end
end

require 'nokogiri'
require 'open-uri'

last_file = File.open("last.txt", "r")
last_prj_list = Array.new
last_file.each_line do |line|
  last_prj_list << line.strip
end
last_file.close

page = Nokogiri::HTML(open("https://github.com/trending?since=weekly"))
page.css(".repo-list-item").each do |li|
  prj = li.css(".repo-list-name>a")[0]["href"]
  url = "https://github.com" + prj
  desc = li.css(".repo-list-description").text.strip
  dup = last_prj_list.include?(prj) ? "중복" : ""
  puts "#{prj};#{url};#{desc};#{dup}"
end

require 'nokogiri'
require 'open-uri'

last_file = File.open("last.txt", "r")
last_prj_list = Array.new
last_file.each_line do |line|
  last_prj_list << line.strip
end
last_file.close

page = Nokogiri::HTML(open("https://github.com/trending?since=weekly"))
index = 1

page.css(".repo-list-item").each do |li|
	prj = li.css(".repo-list-name>a")[0]["href"]
	url = "https://github.com" + prj
	desc = li.css(".repo-list-description").text.strip
	dup = last_prj_list.include?(prj) ? "중복" : ""
	puts "#{prj};#{desc};#{url};#{dup}"
  
	name = prj.split("/")  
	file_index = "%02d" % index
	index = index + 1
	f = File.open("014-" + file_index + "_" + name[2] + ".md","w+")
	f.puts "# " + name[2]
	f.puts "- 페이지링크: [" + name[2] + "](" + url + ")"
	f.close()
end

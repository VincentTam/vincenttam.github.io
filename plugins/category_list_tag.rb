module Jekyll
    class CategoryListTag < Liquid::Tag
	def render(context)
	    html = ""
	    categories = context.registers[:site].categories.keys
	    categories.sort.each do |category|
		posts_in_category = context.registers[:site].categories[category].size
		category_dir = context.registers[:site].config['category_dir']
		category_url = File.join(category_dir, category.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase)
		# For using MathJax in category "LaTeX"
		category_string = category.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase
		if category_string == "-rm-latex-"
		    latex_category_string = "$-slash-rm-slash-latex$"
		    category_url = File.join(category_dir, latex_category_string)
		end
		html << "<li class='category'><a href='/#{category_url}/'>#{category} (#{posts_in_category})</a> <a href='/#{category_url}/atom.xml'><img title = 'Category Atom Feed' src='/images/rss.png' alt='Category Atom Feed' height='15' width ='15'/></a></li>\n"
	    end
	    html
	end
    end
end

Liquid::Template.register_tag('category_list', Jekyll::CategoryListTag)

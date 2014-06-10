module CustomLiquidFilters

  def remove_linenumbers(input)
    input.gsub(/\<td\ class="gutter"\>.+?\<\/td\>/m, ' ')
  end

  RegexMap = {
    /\<div\ class="caption"\>Click the image for a larger view.\<\/div\>/ => '',
    /\<div\ id="image-dialog-\d+".*?\>.+?\<\/div\>/m => '',
    /\<div\ class="illustration\ print"\>.+?\<\/div\>/m => '',
  }

  def remove_bigfig(input)
    RegexMap.each_pair {|k,v| input.gsub!(k, v)}
    input
  end

  RegexMapCatFeed = {
    /imgpopup/ => "img center",
    /\d+%/ => "800",
  }

  def remove_bigfig_catfeed(input)
    RegexMapCatFeed.each_pair {|k,v| input.gsub!(k, v)}
    input
  end
end

Liquid::Template.register_filter CustomLiquidFilters

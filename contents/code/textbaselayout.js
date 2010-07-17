/**
  * a base layout for drawing text
  * NOTE: this uses the abstract method getText(keyContainer) which you have to implement
  */
TextBaseLayout = function()
{
	/**
	  * paints the image with the given painter to the screen
	  *
	  * @param painter the painter used to paint the image
	  * @param keyContainer the current key's container
	  */
	this.drawKey = function(painter, keyContainer)
	{
		// get the text for the given key
		var text = this.getText(keyContainer);
		
		// draw the text for the given key
		painter.drawText(this.xPosition, this.yPosition, text);
		
		// update the walking size
		// we're walking the lenght of the text plus 1 character (= a blank)
		this.walkSize = this.fontSize * (text.length + 1);
	}
}

// inherit BaseLayout
TextBaseLayout.prototype = new BaseLayout();
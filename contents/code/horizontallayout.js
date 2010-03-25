/**
  * an object which provides a horizontal layout
  */
HorizontalLayout = function()
{
	/**
	  * returns the calculated width of the image
	  */
	this.imageWidth = function()
	{
		// use the full width
		return plasmoid.size.width;
	}
	
	/**
	  * returns the calculated height of the image
	  */
	this.imageHeight = function()
	{
		var imageHeight = plasmoid.size.height;
		
		// calculate how often we have to subtract the spacing
		// we need to subtract spacing as soon as we have more than one rectangle
		var spacingCount = global.keyInformation.count() - 1;
		
		// minus twice the image padding (top and bottom)
		imageHeight -= 2 * global.configuration.layoutConfiguration().getImagePadding();
		
		// minus spacing (between the rectangles)
		imageHeight -= global.configuration.layoutConfiguration().getImageSpacing() * spacingCount;
		
		// divide the height through the key count (so we get the height per key)
		imageHeight /= global.keyInformation.count();
		
		return imageHeight;
	}
	
	/**
	  * paints the image with the given painter to the screen
	  *
	  * @param painter the painter used to paint the image
	  */
	this.paint = function(painter)
	{
		var xPos = 0;
		var yPos = 0;
		
		// start at 0 + padding
		yPos = global.configuration.layoutConfiguration().getImagePadding();
		
		for (var i = 0; i < global.keyInformation.count(); i++)
		{
			var keyContainer = global.keyInformation.getContainer(i);
			
			var width = this.imageWidth();
			var height = this.imageHeight();
			
			// paint the icon
			painter.fillRect(xPos, yPos, width, height, keyContainer.color);
			
			// add the spacing
			yPos += global.configuration.layoutConfiguration().getImageSpacing() + height;
		}
	}
}
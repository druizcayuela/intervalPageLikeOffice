$(document).ready(function() {

  $('#yourID').click(function(){ 
		
	    var pageRange = $('#yourIDText').val();
	    
      if(selectedVal==2){
	    
  	    //The Regex which validate if it is correct syntacticaly 	
  	    var patt1 = new RegExp("^(\\s*\\d+\\s*\\-\\s*\\d+\\s*,?|\\s*\\d+\\s*,?)+$");
  	 	    
   	    if(patt1.test(pageRange)){
 	    	
   	    	//Before submiting, check new validations, such as max page and repeat page.
   	    	var maxPage = parseInt($('#lastPage').val(),10);
   	    	
   	    	if(checkRangePage(pageRange, maxPage)){
     	 
  	 	    	$('#yourId').removeClass('InputFieldError');
  	 	    	$('#form').submit();
   	    	}else{
     	    		
   	    		$('#yourId').addClass('InputFieldError');
   	    		openModalError("Please, enter a valid page range. Ex: 1-3,5");
   	    		
   	    	} 	 
   	    }else{
   	    	
   	    	$('#routingNumber').addClass('InputFieldError');
   	    	openModalError("Please, enter a valid page range. Ex: 1-3,5");
   	    	
   	    }
	    }
	   	        
	});


});

/**
 * Used for page range: Return true or false if it is correct the expression .
 * @param str
 */
function checkRangePage(pageRange, maxPage){
	
	//First, make the correct list with all pages
	var pagesList = [];
	var pagesGroup = pageRange.split(",");
	
	for(var i=0; i<pagesGroup.length; i++){
		
		if(pagesGroup[i].indexOf("-") > -1){
			
			var pagesListRange = pagesGroup[i].split("-");
			var index = parseInt(pagesListRange[0], 10);
			var end = parseInt(pagesListRange[1], 10);
			
			if(index>=end){
				return false;
			}
			
			for(var j=index; j<=end; j++){
				pagesList.push(j);
			}
		}else{
			pagesList.push(parseInt(pagesGroup[i], 10));
		}
	}
	
	//Later, check if there is any page bigger than the max page or equals zero
	for(i=0; i<pagesList.length; i++){
		
		if(pagesList[i]>maxPage || pagesList[i]==0){
			return false;
		}
	}
	
	//Finally, check repeat pages
	if(hasDuplicates(pagesList)){
		return false;				
	}
	
	return true;
}

/**
 * Used for ArrayList: Return true or false if array has repeat values.
 * @param str
 */
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

var marginY=0;
var destination=0;
var peed=5;
function initScroll(elementId){
	destination= document.getElementbyId(elementId).offsetTop;
	
	scroller= setTimeout(function(){
		initScroll(elementId);
	},1);
	marginY=marginY+speed;

	if (marginY >= destination){
		clearTimeout(scroller);
	}

	window.scroll(0,marginY);
}
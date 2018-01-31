
function checkPageNumMaxPage(pageNum, maxPageNum){
	

	if(maxPageNum == 1){
		return 1;
	}else if(pageNum == 1){
		return 2;
	}else if(pageNum == maxPageNum){
		return 3;
	}else{
		return 4;
	}
}
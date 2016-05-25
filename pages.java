private List<String> getListToCallWS(ImagesGetPreviewTiffImageContentServerID imagesGetPreviewTiffForm) {
		
		List<String> listContentServerID = new ArrayList<String>();
		
		
		String[] pagesGroup = imagesGetPreviewTiffForm.getRangeText().split(",");
		
		for (String pages : pagesGroup) {
			
			if(pages.contains("-")){
				
				String[] pagesRange = pages.split("-");
				int index=Integer.parseInt(pagesRange[0]);
				int end=Integer.parseInt(pagesRange[1]);
				
				for (int i = index; i <= end; i++) {
					
					listContentServerID.add(imagesGetPreviewTiffForm.getContentServerIDList().get(i-1));
				}
				
			}else{
				
				listContentServerID.add(imagesGetPreviewTiffForm.getContentServerIDList().get((Integer.parseInt(pages))-1));
			}
			
		}
		
		return listContentServerID;
}

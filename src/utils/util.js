export const applyDrag = (arr, dragResult) => {
    // console.log(dragResult);
    const { removedIndex, addedIndex, payload } = dragResult;
    if (removedIndex === null && addedIndex === null) return arr;
  
    const result = [...arr];
    let itemToAdd = payload;
  
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0];
    }
  
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd);
    }
  
    return result;
  };

export const getPayload2 = (dragResult) => {
  // console.log(dragResult);
  if(dragResult.removedIndex !== null && dragResult.addedIndex !== null){
  }
  if(dragResult.removedIndex === null && dragResult.addedIndex !== null){
    const date = new Date(); 
    const fdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    dragResult.payload.startDate=fdate;
    dragResult.payload.endDate="";
  }
  return dragResult;
}

export const getPayload3 = (dragResult) => {
  // console.log(dragResult);
  if(dragResult.removedIndex !== null && dragResult.addedIndex !== null){
    
  }
  if(dragResult.removedIndex === null && dragResult.addedIndex !== null){
    const date = new Date(); 
    const fdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    dragResult.payload.endDate=fdate;
    if(dragResult.payload.startDate ===""){
      dragResult.payload.startDate=fdate;
    }
  }
  return dragResult;
}

export const getPayload1 = (dragResult) => {
  // console.log(dragResult);
  if(dragResult.removedIndex !== null && dragResult.addedIndex !== null){
  }
  if(dragResult.removedIndex === null && dragResult.addedIndex !== null){
    dragResult.payload.endDate="";
    dragResult.payload.startDate="";
  }
  return dragResult;
}
  export const getTrashPayload = (dragResult) => {
    if(dragResult.addedIndex !== null){
      return null;
    }
  }

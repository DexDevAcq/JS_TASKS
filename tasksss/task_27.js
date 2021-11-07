let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
    let obj = list;

    while(obj){
        console.log(obj.value);
        console.log(obj.next)
        obj = obj.next;
    }
}


printList(list)
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
    let arr = [obj];

    while(obj){
        arr.push(obj)
        obj = obj.next;
    }

    for(let i = arr.length - 1; i != 0; i--) {
        console.log(arr[i])
    }
}


printList(list)
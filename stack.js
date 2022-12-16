// class Browser() {
//      push(url) : 새로운 url로 진입;
//      back() : 뒤로가기;
//      front() : 앞으로가기;
//      URL() : 현재 url 출력 ;
//     }

//overflow, underflow 방지 필요함

function Stack(action, current) {
  class Browser {
    constructor() {
      this.arr = [];
      this.index = 0;
    }
    //새요소 추가
    push(url) {
      this.arr[this.index++] = url;
      this.index += 1;
    }
    //가장 최근 들어온 데이터를 방출하고 리턴
    pop() {
      if (this.index <= 0) {
        return;
      }
      const res = this.arr[this.index - 1];
      delete this.arr[this.index - 1];
      this.top -= 1;
      return res;
    }
  }
  const preStack = new Browser();
  const nextStact = new Browser();

  let currentPage = current;

  for (item of action) {
    //url 접속시
    if (typeof item === "string") {
      preStack.push(currentPage);
      nextStact.arr = [];
      nextStact.index = 0;
      currentPage = item;
    }
    //뒤로가기
    if (item === -1 && preStack.arr > 0) {
      nextStact.push(currentPage);
      currentPage = preStack.pop();
    }
    //앞으로가기
    if (item === -1 && preStack.arr > 0) {
      preStack.push(currentPage);
      currentPage = nextStact.pop();
    }
  }
}

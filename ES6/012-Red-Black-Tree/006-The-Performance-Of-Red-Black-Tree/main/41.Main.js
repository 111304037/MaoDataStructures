// main 函数
class Main {
  constructor () {
    {
      // this.alterLine("MyStack Area");

      // let ms = new MyStack(10);
      // for (let i = 1; i <= 10 ; i++) {
      //     ms.push(i);
      //     console.log(ms.toString());
      // }

      // console.log(ms.peek());
      // this.show(ms.peek());

      // while (!ms.isEmpty()) {
      //   console.log(ms.toString());
      //   ms.pop();
      // }

      // this.alterLine("leetcode 20. 有效的括号");
      // let s = new Solution();
      // this.show(s.isValid("{ [ ( ) ] }"));
      // this.show(s.isValid(" [ ( ] ) "));

      // this.alterLine("MyQueue Area");
      // let mq = new MyQueue(10);
      // for (let i = 1; i <= 10 ; i++) {
      //     mq.enqueue(i);
      //     console.log(mq.toString());
      // }

      // console.log(mq.getFront());
      // this.show(mq.getFront());

      // while (!mq.isEmpty()) {
      //   console.log(mq.toString());
      //   mq.dequeue();
      // }
      
      // this.alterLine("MyLoopQueue Area");
      // let mlq = new MyQueue();
      // for (let i = 1; i <= 10 ; i++) {
      //     mlq.enqueue(i);
          // console.log(mlq.toString());
      // }

      // console.log(mlq.getFront());
      // this.show(mlq.getFront());

      // while (!mlq.isEmpty()) {
      //   console.log(mlq.toString());
      //   mlq.dequeue();
      // }

      // this.alterLine("Queues Comparison Area");
      // let mq = new MyQueue();
      // let mlq = new MyLoopQueue();
      // let performanceTest = new PerformanceTest();

      // let mqInfo = performanceTest.testQueue(mq, 10000);
      // let mlqInfo = performanceTest.testQueue(mlq, 10000);

      // this.alterLine("MyQueue Area");
      // console.log(mqInfo);
      // this.show(mqInfo);

      // this.alterLine("MyLoopQueue Area");
      // console.log(mlqInfo);
      // this.show(mlqInfo);

      // this.alterLine("MyLinkedList Area");
      // let mylinkedList = new MyLinkedList();

      // for (let i = 1; i <= 5 ; i++) {
      //   mylinkedList.addFirst(i);
      //   console.log(mylinkedList.toString());
      // }
      // mylinkedList.insert(2, 88888);
      // console.log(mylinkedList.toString());

      // mylinkedList.remove(2);
      // console.log(mylinkedList.toString());

      // mylinkedList.removeFirst();
      // console.log(mylinkedList.toString());

      // mylinkedList.removeLast();
      // console.log(mylinkedList.toString());
      
      // this.alterLine("MyLinkedListStack Area");
      // let myLinkedListStack = new MyLinkedListStack();
      // for (let i = 1; i <= 5 ; i++) {
      //   myLinkedListStack.push(i);
      //   console.log(myLinkedListStack.toString());
      // }

      // console.log(myLinkedListStack.peek());
      // this.show(myLinkedListStack.peek());

      // for (let i = 0; i < 5 ; i++) {
      //   console.log(myLinkedListStack.toString());
      //   myLinkedListStack.pop();
      // }
      
      // this.alterLine("Stacks Comparison Area");
      // let myStack = new MyStack();
      // let myLinkedListStack = new MyLinkedListStack();
      // let performanceTest = new PerformanceTest();

      // let myStackInfo = performanceTest.testStack(myStack, 100000);
      // let myLinkedListStackInfo = performanceTest.testStack(myLinkedListStack, 100000);

      // this.alterLine("MyStack Area");
      // console.log(myStackInfo);
      // this.show(myStackInfo);

      // this.alterLine("MyLinkedListStack Area");
      // console.log(myLinkedListStackInfo);
      // this.show(myLinkedListStackInfo);
      
      // this.alterLine("MyLinkedListQueue Area");
      // let myLinkedListQueue = new MyLinkedListQueue();
      // for (let i = 1; i <= 5 ; i++) {
      //   myLinkedListQueue.enqueue(i);
      //   console.log(myLinkedListQueue.toString());
      // }

      // console.log(myLinkedListQueue.getFront());
      // this.show(myLinkedListQueue.getFront());

      // for (let i = 0; i < 5 ; i++) {
      //   console.log(myLinkedListQueue.toString());
      //   myLinkedListQueue.dequeue();
      // }
      
      // this.alterLine("leetcode 203. 删除指定元素的所有节点");
      // let s = new Solution();

      // let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);

      // console.log(node.toString());
      // let result = s.removeElements(node, 1);
      // console.log(result.toString());

      // this.alterLine("递归求和");
      // let calc = new Calc();
      // let arr = [1,2,3,4];
      
      // let arrInfo = `[`;
      // for (var i = 0; i < arr.length - 1; i++) {
      //   arrInfo += `${arr[i]},`
      // }
      // arrInfo += `${arr[arr.length - 1]}`;
      // arrInfo += `]`;
      // document.body.innerHTML += `${arrInfo}<br /><br />`;
      // this.show (calc.sum(arr));
      // this.show (calc.tailSum(arr));

      // this.alterLine("leetcode 203. 删除指定元素的所有节点(递归)");
      // let s = new Solution();

      // let arr = [1,2,3,5,1,2,1,3,5,3,5,6,3,1,5,1,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);

      // console.log(node.toString());
      // let result = s.removeElements(node, 2);
      // console.log(result.toString());
    
      // this.alterLine("leetcode 203. 删除指定元素的所有节点(递归) 调试");
      // let s = new Solution();

      // let arr = [1,2,3];
      // let node = new ListNode(null);
      // node.appendToLinkedListNode(arr);
      // this.show(node);
      // s.removeElements(node, 2);
      
      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      // myBinarySearchTree.preOrder(this.show);

      // this.show(myBinarySearchTree.contains(1));
      // console.log(myBinarySearchTree.contains(1));

      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      
      // console.log(myBinarySearchTree.toString());
      
      // this.alterLine("MyBinarySearchTree Area");
      // let myBinarySearchTree = new MyBinarySearchTree();
      // let nums = [5, 3, 6, 8, 4, 2];
      // for (var i = 0; i < nums.length; i++) {
      //   myBinarySearchTree.add(nums[i]);
      // }

      // /////////////////
      // //      5      //
      // //    /   \    //
      // //   3    6    //
      // //  / \    \   //
      // // 2  4     8  //
      // /////////////////
      
      // this.alterLine("MyBinarySearchTree PreOrder Area");
      // myBinarySearchTree.preOrder(this.show);

      // this.alterLine("MyBinarySearchTree NonRecursivePreOrder Area");
      // myBinarySearchTree.nonRecursivePreOrder(this.show);

      // this.alterLine("MyBinarySearchTree InOrder Area");
      // myBinarySearchTree.inOrder(this.show);

      // this.alterLine("MyBinarySearchTree PostOrder Area");
      // myBinarySearchTree.postOrder(this.show);

      // this.alterLine("MyBinarySearchTree LevelOrder Area");
      // myBinarySearchTree.levelOrder(this.show);

      // this.alterLine("MyBinarySearchTree remove Min Node Area");
      // {
      //   let tree = new MyBinarySearchTree();

      //   let n = 100;
      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //   }

      //   let array = new MyArray(n);

      //   while(!tree.isEmpty()) {
      //     array.add(tree.removeMin());
      //   }

      //   // 数组中的元素从小到大排序的
      //   console.log(array.toString());

      //   for (var i = 1; i < n; i++) {
      //     //如果数组后面的元素小于数组前面的元素
      //     if (array.get(i) < array.get(i - 1))
      //       throw new Error("error. array element is not (small - big) sort.");
      //   }

      //   console.log("removeMin test completed.");
      //   this.show("removeMin test completed.");
      // }

      // this.alterLine("MyBinarySearchTree remove Max Node Area");
      // {
      //   let tree = new MyBinarySearchTree();

      //   let n = 100;
      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //   }

      //   let array = new MyArray(n);

      //   while(!tree.isEmpty()) {
      //     array.add(tree.removeMax());
      //   }

      //   // 数组中的元素从大到小排序的
      //   console.log(array.toString());

      //   for (var i = 1; i < n; i++) {
      //     //如果数组后面的元素大于数组前面的元素
      //     if (array.get(i) > array.get(i - 1))
      //       throw new Error("error. array element is not (big - small) sort.");
      //   }

      //   console.log("removeMax test completed.");
      //   this.show("removeMax test completed.");
      // }

      // this.alterLine("MyBinarySearchTree Remove Node Area");
      // {
      //   let n = 100;

      //   let tree = new MyBinarySearchTree();
      //   let array = new MyArray(n);

      //   let random = Math.random;

      //   for (var i = 0; i < n; i++) {
      //     tree.add(n * n * n * random());
      //     array.add(tree.removeMin());
      //   }

      //   // 数组中的元素从小到大排序的
      //   console.log(array.toString());

      //   for (var i = 0; i < n; i++) {
      //     tree.remove(array.get(i));
      //   }

      //   console.log("removeMin test "+ (tree.isEmpty() ? "completed." : "no completed."));
      //   this.show("removeMin test "+ (tree.isEmpty() ? "completed." : "no completed."));
      // }
      
      // this.alterLine("MyBinarySearchTreeSet Area");
      // {
      //   let n = 5;
      //   let set = new MyBinarySearchTreeSet();

      //   let random = Math.random;
      //   let temp = null;
      //   for (var i = 0; i < n; i++) {
      //     temp = random();
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());

      //   let array = new MyArray(n);
      //   set.each((element) => {
      //     console.log(element);
      //     this.show(element);
      //     array.add(element);
      //   });

      //   for (var i = 0; i < array.getSize(); i++) {
      //     set.remove(array.get(i));
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());
      // }

      // this.alterLine("MyLinkedSet Area");
      // {
      //   let n = 100;
      //   let set = new MyLinkedListSet();

      //   let random = Math.random;
      //   let temp = null;
      //   for (var i = 0; i < n; i++) {
      //     temp = random();
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //     set.add(n * n * n * temp);
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());

      //   let array = new MyArray(n);
      //   set.each((element) => {
      //     console.log(element);
      //     this.show(element);
      //     array.add(element);
      //   });

      //   for (var i = 0; i < array.getSize(); i++) {
      //     set.remove(array.get(i));
      //   }

      //   console.log(set.getSize());
      //   this.show(set.getSize());
      // }
      
      // this.alterLine("Set Comparison Area");
      // let myLinkedListSet = new MyLinkedListSet();
      // let myBinarySearchTreeSet = new MyBinarySearchTreeSet();
      // let performanceTest = new PerformanceTest();

      // let myLinkedListSetInfo = performanceTest.testSet(myLinkedListSet, 5000);
      // let myBinarySearchTreeSetInfo = performanceTest.testSet(myBinarySearchTreeSet, 5000);

      // this.alterLine("MyLinkedListSet Area");
      // console.log(myLinkedListSetInfo);
      // this.show(myLinkedListSetInfo);

      // this.alterLine("MyBinarySearchTreeSet Area");
      // console.log(myBinarySearchTreeSetInfo);
      // this.show(myBinarySearchTreeSetInfo);
      
      // this.alterLine("leetcode 804.唯一摩尔斯密码词");
      // let s = new Solution();
      // let words = ["gin", "zen", "gig", "msg"];
      // this.show(s.uniqueMorseRepresentations(words));
      
     // this.alterLine("MyLinkedListMap Area");
     //  {
     //    let n = 5;
     //    let map = new MyLinkedListMap();
     //    let array = new MyArray();

     //    let random = Math.random;
     //    let temp = null;
     //    let result = null;
     //    for (var i = 0; i < n; i++) {
     //      temp = random();
     //      result = n * n * n * temp;
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //    }

     //    console.log(array.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      if (map.contains(result))
     //        map.add(result, map.get(result) + 1);
     //      else
     //        map.add(result, 1);
     //    }

     //    console.log(map.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      map.remove(result);
     //    }

     //    console.log(map.toString());

     //  }
     
     //  this.alterLine("MyBinarySearchTreeMap Area");
     //  {
     //    let n = 5;
     //    let map = new MyBinarySearchTreeMap();
     //    let array = new MyArray();

     //    let random = Math.random;
     //    let temp = null;
     //    let result = null;
     //    for (var i = 0; i < n; i++) {
     //      temp = random();
     //      result = n * n * n * temp;
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //      array.add(result);
     //    }

     //    console.log(array.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      if (map.contains(result))
     //        map.add(result, map.get(result) + 1);
     //      else
     //        map.add(result, 1);
     //    }

     //    console.log(map.toString());

     //    for (var i = 0; i < array.getSize(); i++) {
     //      result = array.get(i);
     //      map.remove(result);
     //    }

     //    console.log(map.toString());
     //  }
     
      // this.alterLine("Set Comparison Area");
      // let myLinkedListSet = new MyLinkedListSet();
      // let myBinarySearchTreeSet = new MyBinarySearchTreeSet();
      // let systemSet = new Set();
      // let performanceTest1 = new PerformanceTest();

      // systemSet.remove = systemSet.delete;
      // systemSet.contains = systemSet.has;
      // systemSet.isEmpty = () => systemSet.size === 0;    
      // systemSet.getSize = () => systemSet.size;

      // let myLinkedListSetInfo = performanceTest1.testSet(myLinkedListSet, 50000);
      // let myBinarySearchTreeSetInfo = performanceTest1.testSet(myBinarySearchTreeSet, 50000);
      // let systemSetInfo = performanceTest1.testSet(systemSet, 50000);

      // this.alterLine("MyLinkedListSet Area");
      // console.log(myLinkedListSetInfo);
      // this.show(myLinkedListSetInfo);

      // this.alterLine("MyBinarySearchTreeSet Area");
      // console.log(myBinarySearchTreeSetInfo);
      // this.show(myBinarySearchTreeSetInfo);

      // this.alterLine("SystemSet Area");
      // console.log(systemSetInfo);
      // this.show(systemSetInfo);

      // this.alterLine("Map Comparison Area");
      // let myLinkedListMap = new MyLinkedListMap();
      // let myBinarySearchTreeMap = new MyBinarySearchTreeMap();
      // let systemMap = new Map();
      // let performanceTest = new PerformanceTest();

      // systemMap.remove = systemMap.delete;
      // systemMap.contains = systemMap.has;
      // systemMap.add = systemMap.set;
      // systemMap.isEmpty = () => systemMap.size === 0;
      // systemMap.getSize = () => systemMap.size;

      // let myLinkedListMapInfo = performanceTest.testMap(myLinkedListMap, 50000);
      // let myBinarySearchTreeMapInfo = performanceTest.testMap(myBinarySearchTreeMap, 50000);
      // let systemMapInfo = performanceTest.testMap(systemMap, 50000);

      // this.alterLine("MyLinkedListMap Area");
      // console.log(myLinkedListMapInfo);
      // this.show(myLinkedListMapInfo);

      // this.alterLine("MyBinarySearchTreeMap Area");
      // console.log(myBinarySearchTreeMapInfo);
      // this.show(myBinarySearchTreeMapInfo);

      // this.alterLine("SystemMap Area");
      // console.log(systemMapInfo);
      // this.show(systemMapInfo);

      // this.alterLine("leetcode 349.  两个数组的交集");
      // let s = new Solution();
      // var nums1 = [1,2,2,1], nums2 = [2,2];
      // var nums3 = [4,9,5], nums4 = [9,4,9,8,4];

      // console.log("[" + s.intersection(nums1, nums2) + "]");
      // console.log("[" + s.intersection(nums3, nums4) + "]");
      // this.show("[" + s.intersection(nums1, nums2) + "]");
      // this.show("[" + s.intersection(nums3, nums4) + "]");

      // this.alterLine("leetcode 350.  两个数组的交集 II");

      // console.log("[" + s.intersect(nums1, nums2) + "]");
      // console.log("[" + s.intersect(nums3, nums4) + "]");
      // this.show("[" + s.intersect(nums1, nums2) + "]");
      // this.show("[" + s.intersect(nums3, nums4) + "]");
    }
    
    {
      // this.alterLine("MaxHeap Comparison Area");
      // const n = 1000000;

      // const maxHeapIsHeapify = new MyMaxHeap();
      // const maxHeapNotHeapify = new MyMaxHeap();
      // let performanceTest1 = new PerformanceTest();

      // const random = Math.random;
      // let arr = [];
      // let arr1 = [];

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++) {
      //   arr.push(random() * n);
      //   arr1.push(arr[i]);
      // }

      // this.alterLine("MaxHeap Is Heapify Area");
      // const maxHeapIsHeapifyInfo = performanceTest1.testHeap(maxHeapIsHeapify, arr, true);
      // console.log(maxHeapIsHeapifyInfo);
      // this.show(maxHeapIsHeapifyInfo);

      // this.alterLine("MaxHeap Not Heapify Area");
      // const maxHeapNotHeapifyInfo = performanceTest1.testHeap(maxHeapNotHeapify, arr1, false);
      // console.log(maxHeapNotHeapifyInfo);
      // this.show(maxHeapNotHeapifyInfo);

      // this.alterLine("MyMaxHeap Replace Area");
      // const n = 20;

      // const maxHeap = new MyMaxHeap();
      // const random = Math.random;

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++)
      //   maxHeap.add(random() * n);

      // console.log("MaxHeap maxHeap size:" + maxHeap.size());
      // this.show("MaxHeap maxHeap size:" + maxHeap.size());

      // // 使用数组取值
      // let arr = [];
      // for (let i = 0; i < n ; i++)
      //   arr[i] = maxHeap.replace(0);

      // console.log("Array arr size:" + arr.length + "，MaxHeap maxHeap size:" + maxHeap.size());
      // this.show("Array arr size:" + arr.length + "，MaxHeap maxHeap size:" + maxHeap.size());
      // console.log(arr, maxHeap);
      // // 检验一下是否符合要求
      // for (let i = 1; i < n; i++)
      //   if (arr[i - 1] < arr[i]) throw new Error("error.");

      // console.log("test maxHeap completed.");
      // this.show("test maxHeap completed.");
      
      // this.alterLine("leetcode 347. 前K个高频元素");
      // let s = new Solution();

      // let arr = [5,-3,9,1,7,7,9,10,2,2,10,10,3,-1,3,7,-9,-1,3,3];
      // console.log(arr);
      // this.show(arr);

      // let result = s.topKFrequent(arr, 3);
      // console.log(result);
      // this.show(result);
    }

    {
        // this.alterLine("MySegmentTree Area");
        // // 初始数据
        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        // // 初始化线段树，将初始数据和融合器传入进去
        // let mySegmentTree = new MySegmentTree(nums);
        // // 指定线段树的融合器
        // mySegmentTree.updateMerge((a, b) => a + b);

        // // 输出
        // console.log(mySegmentTree.toString());
        // this.show("");

        // // 输出查询后的数据
        // this.alterLine("MySegmentTree Queue Area");
        // console.log("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // this.show("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // console.log("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // this.show("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // console.log("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        // this.show("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        
        // // 输出更新后 再查询的数据
        // this.alterLine("MySegmentTree Update Area");
        // console.log(mySegmentTree.toString());
        // this.show("");
        // mySegmentTree.set(0, 2);
        // console.log("更新索引 0 值为 2：");
        // this.show("更新索引 0 值为 2：");
        // console.log(mySegmentTree.toString());
        // this.show("");
        // console.log("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // this.show("查询区间[0, 2]：" + mySegmentTree.query(0,2));
        // console.log("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // this.show("查询区间[3, 9]：" + mySegmentTree.query(3,9));
        // console.log("查询区间[0, 9]：" + mySegmentTree.query(0,9));
        // this.show("查询区间[0, 9]：" + mySegmentTree.query(0,9));
    }

    {
        // this.alterLine("leetcode 303. 区域和检索-数组不可变");
        // let s = new Solution();
        // let nums = [-2, 0, 3, -5, 2, -1];
        // let numArray = s.NumArray(nums);

        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
        // console.log(numArray.sumRange(2, 5));
        // this.show(numArray.sumRange(2, 5));
        // console.log(numArray.sumRange(0, 5));
        // this.show(numArray.sumRange(0, 5));
        
        // this.alterLine("leetcode 307. 区域和检索 - 数组可修改");
        // let s = new Solution();
        // let nums = [1, 3, 5];
        // let numArray = s.NumArray2(nums);

        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
        // numArray.update(1, 2); 
        // console.log(numArray.sumRange(0, 2));
        // this.show(numArray.sumRange(0, 2));
    }

    {
      // this.alterLine("Set Comparison Area");
      // const n = 2000000;

      // const myBSTSet = new MyBinarySearchTreeSet();
      // const myTrieSet = new MyTrieSet();
      // let performanceTest1 = new PerformanceTest();

      // const random = Math.random;
      // let arr = [];

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++) {
      //   arr.push(i.toString());
      // }

      // this.alterLine("MyBSTSet Comparison Area");
      // const myBSTSetInfo = performanceTest1.testCustomFn(function () {

      //   for(const word of arr)
      //     myBSTSet.add(word);

      // });

      // // 总毫秒数：3173
      // console.log(myBSTSetInfo);
      // this.show(myBSTSetInfo);

      // this.alterLine("MyTrieSet Comparison Area");
      // const myTrieSetInfo = performanceTest1.testCustomFn(function () {

      //   for(const word of arr)
      //     myTrieSet.add(word);

      // });
      
      // // 总毫秒数：2457
      // console.log(myTrieSetInfo);
      // this.show(myTrieSetInfo);
    }

    {
        // this.alterLine("leetcode 208.实现 Trie (前缀树)");

        // let s = new Solution();
        // let trie = s.Trie();
        // this.show(trie.insert("apple") + "");
        // this.show(trie.search("apple") + " // 返回 true");   // 返回 true
        // this.show(trie.search("app") + "// 返回 false");     // 返回 false
        // this.show(trie.startsWith("app") + "// 返回 true"); // 返回 true
        // this.show(trie.insert("app") + "");   
        // this.show(trie.search("app") + "// 返回 true");     // 返回 true

        // this.alterLine("leetcode 211.添加与搜索单词 - 数据结构设计");

        // let s = new Solution();
        // let trie = s.WordDictionary();
        // this.show(trie.addWord("bad") + "");
        // this.show(trie.addWord("dad") + "");
        // this.show(trie.addWord("mad") + "");
        // this.show(trie.search("pad") + "-> false" );//-> false
        // this.show(trie.search("bad") + "-> true" );//-> true
        // this.show(trie.search(".ad") + "-> true" );//-> true
        // this.show(trie.search("b..") + "-> true" );//-> true

        // this.alterLine("leetcode 208. 实现 Trie (前缀树)");

        // let trie = new MyTrie();
        // this.show(trie.add("apple") + "");
        // this.show(trie.contains("apple") + " // 返回 true");   // 返回 true
        // this.show(trie.contains("app") + "// 返回 false");     // 返回 false
        // this.show(trie.isPrefix("app") + "// 返回 true"); // 返回 true
        // this.show(trie.add("app") + "");   
        // this.show(trie.contains("app") + "// 返回 true");     // 返回 true

        // this.alterLine("leetcode 211. 添加与搜索单词 - 数据结构设计");

        // trie = new MyTrie();
        // this.show(trie.add("bad") + "");
        // this.show(trie.add("dad") + "");
        // this.show(trie.add("mad") + "");
        // this.show(trie.regexpSearch("pad") + "-> false" );//-> false
        // this.show(trie.regexpSearch("bad") + "-> true" );//-> true
        // this.show(trie.regexpSearch(".ad") + "-> true" );//-> true
        // this.show(trie.regexpSearch("b..") + "-> true" );//-> true
        // this.show(trie.regexpSearch("b....") + "-> false" );//-> false
        
        // this.alterLine("leetcode 677. 键值映射");
        // let s = new Solution();
        // let trie = s.MapSum();

        // this.show(trie.insert("apple", 3) + " 输出: Null");
        // this.show(trie.sum("ap") + " 输出: 3");
        // this.show(trie.insert("app", 2) + " 输出: Null");
        // this.show(trie.sum("ap") + " 输出: 5");
    }
  
    {
      // this.alterLine("Map Comparison Area");
      // const n = 2000000;

      // const myBSTMap = new MyBinarySearchTreeMap();
      // const myTrieMap = new MyTrieMap();
      // let performanceTest1 = new PerformanceTest();

      // const random = Math.random;
      // let arr = [];

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++) {
      //   arr.push(Math.floor(n * random()).toString());
      // }

      // this.alterLine("MyBSTMap Comparison Area");
      // const myBSTMapInfo = performanceTest1.testCustomFn(function () {

      //   // 添加
      //   for(const word of arr)
      //     myBSTMap.add(word, String.fromCharCode(word));

      //   // 删除
      //   for(const word of arr)
      //     myBSTMap.remove(word);

      //   // 查找
      //   for(const word of arr)
      //     if (myBSTMap.contains(word))
      //       throw new Error("doesn't remove ok.");

      // });

      // //  总毫秒数：18703
      // console.log(myBSTMapInfo);
      // this.show(myBSTMapInfo);

      // this.alterLine("MyTrieMap Comparison Area");
      // const myTrieMapInfo = performanceTest1.testCustomFn(function () {

      //   for(const word of arr)
      //     myTrieMap.add(word, String.fromCharCode(word));

      //   // 删除
      //   for(const word of arr)
      //     myTrieMap.remove(word);

      //   // // 查找
      //   for(const word of arr)
      //     if (myTrieMap.contains(word))
      //       throw new Error("doesn't remove ok.");

      // });
      
      // // 总毫秒数：8306
      // console.log(myTrieMapInfo);
      // this.show(myTrieMapInfo);
      // console.log(myTrieMap.getKeys()); // 有效
      // console.log(myTrieMap.getValues()); // 有效
    }
    
    {
      // this.alterLine("UnionFind Comparison Area");
      // // 十万级别
      // const size = 100000; // 并查集维护节点数
      // const openCount = 100000; // 操作数

      // // 生成同一份测试数据的辅助代码
      // const random = Math.random;
      // const primaryArray = new Array(openCount);
      // const secondaryArray = new Array(openCount);

      // // 生成同一份测试数据
      // for (var i = 0; i < openCount; i++) {
      //     primaryArray[i] = Math.floor(random() * size);
      //     secondaryArray[i] = Math.floor(random() * size);
      // }

      // // 开始测试
      // const myUnionFindOne = new MyUnionFindOne(size);
      // const myUnionFindTwo = new MyUnionFindTwo(size);
      // const myUnionFindThree = new MyUnionFindThree(size);
      // const performanceTest = new PerformanceTest();

      // // 测试后获取测试信息
      // const myUnionFindOneInfo = performanceTest.testUnionFind(
      //   myUnionFindOne,
      //   openCount,
      //   primaryArray,
      //   secondaryArray
      // );
      // const myUnionFindTwoInfo = performanceTest.testUnionFind(
      //   myUnionFindTwo,
      //   openCount,
      //   primaryArray,
      //   secondaryArray
      // );
      // const myUnionFindThreeInfo = performanceTest.testUnionFind(
      //   myUnionFindThree,
      //   openCount,
      //   primaryArray,
      //   secondaryArray
      // );

      // // 总毫秒数：24143
      // console.log("MyUnionFindOne time：" + myUnionFindOneInfo, myUnionFindOne);
      // this.show("MyUnionFindOne time：" + myUnionFindOneInfo);
      // // 总毫秒数：32050
      // console.log("MyUnionFindTwo time：" + myUnionFindTwoInfo, myUnionFindTwo);
      // this.show("MyUnionFindTwo time：" + myUnionFindTwoInfo);
      // // 总毫秒数：69
      // console.log("MyUnionFindThree time：" + myUnionFindThreeInfo, myUnionFindThree);
      // this.show("MyUnionFindThree time：" + myUnionFindThreeInfo);
    }

    {
      // this.alterLine("UnionFind Comparison Area");
      // // 千万级别
      // const size = 10000000; // 并查集维护节点数
      // const openCount = 10000000; // 操作数

      // // 生成同一份测试数据的辅助代码
      // const random = Math.random;
      // const primaryArray = new Array(openCount);
      // const secondaryArray = new Array(openCount);

      // // 生成同一份测试数据
      // for (var i = 0; i < openCount; i++) {
      //     primaryArray[i] = Math.floor(random() * size);
      //     secondaryArray[i] = Math.floor(random() * size);
      // }

      // // 开始测试
      // const myUnionFindThree = new MyUnionFindThree(size);
      // const myUnionFindFour = new MyUnionFindFour(size);
      // const myUnionFindFive = new MyUnionFindFive(size);
      // const myUnionFindSix = new MyUnionFindSix(size);
      // const performanceTest = new PerformanceTest();

      // // 测试后获取测试信息
      // const myUnionFindThreeInfo = performanceTest.testUnionFind(
      //   myUnionFindThree,
      //   openCount,
      //   primaryArray,
      //   secondaryArray
      // );
      // const myUnionFindFourInfo = performanceTest.testUnionFind(
      //   myUnionFindFour,
      //   openCount,
      //   primaryArray,
      //   secondaryArray
      // );
      // const myUnionFindFiveInfo = performanceTest.testUnionFind(
      //   myUnionFindFive,
      //   openCount,
      //   primaryArray,
      //   secondaryArray
      // );
      // const myUnionFindSixInfo = performanceTest.testUnionFind(
      //   myUnionFindSix,
      //   openCount,
      //   primaryArray,
      //   secondaryArray
      // );

      // // 总毫秒数：8042
      // console.log("MyUnionFindThree time：" + myUnionFindThreeInfo, myUnionFindThree);
      // this.show("MyUnionFindThree time：" + myUnionFindThreeInfo);
      // // 总毫秒数：7463
      // console.log("MyUnionFindFour time：" + myUnionFindFourInfo, myUnionFindFour);
      // this.show("MyUnionFindFour time：" + myUnionFindFourInfo);
      // // 总毫秒数：5118
      // console.log("MyUnionFindFive time：" + myUnionFindFiveInfo, myUnionFindFive);
      // this.show("MyUnionFindFive time：" + myUnionFindFiveInfo);
      // // 总毫秒数：5852
      // console.log("MyUnionFindSix time：" + myUnionFindSixInfo, myUnionFindSix);
      // this.show("MyUnionFindSix time：" + myUnionFindSixInfo);
    }

    {
      // this.alterLine("AVLTree Area");
      // // 千级别
      // const openCount = 100; // 操作数
      // const rank = 10000000;

      // // 生成同一份测试数据的辅助代码
      // const random = Math.random;
      // const array = new Array(openCount);

      // // 生成同一份测试数据
      // for (var i = 0; i < openCount; i++)
      //     array[i] = Math.floor(random() * rank);

      // // 创建AVL树实例
      // const avl = new MyAVLTree();

      // for (const value of array)
      //   avl.add(value);

      // // 输出当前这棵avl树是否是一个二分搜索树
      // this.show("Is Binary Search Tree : " + avl.isBanarySearchTree());
      // console.log("Is Binary Search Tree : " + avl.isBanarySearchTree());
      
      // // 输出当前这棵avl树是否是一个平衡二叉树
      // this.show("Is Balanced : " + avl.isBalanced());
      // console.log("Is Balanced : " + avl.isBalanced());
    }

    {
      // this.alterLine("Map Comparison Area");
      // const n = 2000000;
      // // const n = 200;

      // const myBSTMap = new MyBinarySearchTreeMap();
      // const myAVLTree = new MyAVLTree();
      // let performanceTest1 = new PerformanceTest();

      // const random = Math.random;
      // let arrNumber = new Array(n);

      // // 循环添加随机数的值
      // for (let i = 0; i < n; i++)
      //   arrNumber[i] = Math.floor(n * random());

      // this.alterLine("MyBSTMap Comparison Area");
      // const myBSTMapInfo = performanceTest1.testCustomFn(function () {

      //   // 添加
      //   for(const word of arrNumber)
      //     myBSTMap.add(word, String.fromCharCode(word));

      //   // 删除
      //   for(const word of arrNumber)
      //     myBSTMap.remove(word);

      //   // 查找
      //   for(const word of arrNumber)
      //     if (myBSTMap.contains(word))
      //       throw new Error("doesn't remove ok.");
      // });

      // //  总毫秒数：
      // console.log(myBSTMapInfo);
      // this.show(myBSTMapInfo);

      // this.alterLine("MyAVLTree Comparison Area");
      // const that = this;
      // const myAVLTreeInfo = performanceTest1.testCustomFn(function () {

      //   for(const word of arrNumber)
      //     myAVLTree.add(word, String.fromCharCode(word));

      //   // 输出当前这棵myAVLTree树是否是一个二分搜索树
      //   that.show("Is Binary Search Tree : " + myAVLTree.isBanarySearchTree());
      //   console.log("Is Binary Search Tree : " + myAVLTree.isBanarySearchTree());
        
      //   // 输出当前这棵myAVLTree树是否是一个平衡二叉树
      //   that.show("Is Balanced : " + myAVLTree.isBalanced());
      //   console.log("Is Balanced : " + myAVLTree.isBalanced());

      //   // 删除
      //   for(const word of arrNumber) {
      //     myAVLTree.remove(word);
      //   }

      //   // // 查找
      //   for(const word of arrNumber)
      //     if (myAVLTree.contains(word))
      //       throw new Error("doesn't remove ok.");
      // });
      
      // // 总毫秒数：
      // console.log(myAVLTreeInfo);
      // this.show(myAVLTreeInfo);
    }

      this.alterLine("RedBlackTree Comparison Area");
      const n = 2000000;

      const myBSTMap = new MyBinarySearchTreeMap();
      const myAVLTree = new MyAVLTree();
      const myRedBlackTree = new MyRedBlackTree();
      let performanceTest1 = new PerformanceTest();

      const random = Math.random;
      let arrNumber = new Array(n);

      // 循环添加随机数的值
      for (let i = 0; i < n; i++)
        arrNumber[i] = Math.floor(n * random());

      this.alterLine("MyBSTMap Comparison Area");
      const myBSTMapInfo = performanceTest1.testCustomFn(function () {

        // 添加
        for(const word of arrNumber)
          myBSTMap.add(word, String.fromCharCode(word));
      });

      // 总毫秒数：4771
      console.log(myBSTMapInfo + "   节点个数：" + myBSTMap.getSize());
      this.show(myBSTMapInfo + "   节点个数：" + myBSTMap.getSize());

      this.alterLine("MyAVLTree Comparison Area");
      // const that = this;
      const myAVLTreeInfo = performanceTest1.testCustomFn(function () {

        for(const word of arrNumber)
          myAVLTree.add(word, String.fromCharCode(word));
      });
      
      // 总毫秒数：6226
      console.log(myAVLTreeInfo + "   节点个数：" + myAVLTree.getSize());
      this.show(myAVLTreeInfo + "   节点个数：" + myAVLTree.getSize());

      this.alterLine("MyRedBlackTree Comparison Area");
      
      const myRedBlackTreeInfo = performanceTest1.testCustomFn(function () {

        for(const word of arrNumber)
          myRedBlackTree.add(word, String.fromCharCode(word));
      });
      
      // 总毫秒数：6396
      console.log(myRedBlackTreeInfo + "   节点个数：" + myRedBlackTree.getSize());
      this.show(myRedBlackTreeInfo + "   节点个数：" + myRedBlackTree.getSize());

  }

  // 将内容显示在页面上
  show (content) {
    document.body.innerHTML += `${content}<br /><br />`;
  }

  // 展示分割线
  alterLine (title) {
    let line = `--------------------${title}----------------------`
    console.log(line);
    document.body.innerHTML += `${line}<br /><br />`;
  }
}

// 页面加载完毕
window.onload = function () {
  // 执行主函数
  new Main();
}
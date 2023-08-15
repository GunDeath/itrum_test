/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let firstNum = '', secendNum = '';
    while(l1){
        firstNum = l1.val + firstNum;
        l1 = l1.next;
    }
    while(l2){
        secendNum = l2.val + secendNum;
        l2 = l2.next;
    }
    const accSum = (BigInt(firstNum) + BigInt(secendNum)).toString();

    let list = null;
    let counter = 0;
    while(counter < accSum.length){
        list = new ListNode(accSum[counter], list);
        counter++;
    }
    return list;
};
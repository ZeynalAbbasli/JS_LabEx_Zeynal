// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        if(!this.head) {
            this.head = new Node(data);
        }
        else {
            let tmp = this.head;
            this.head = new Node(data);
            this.head.next = tmp;
        }

    }

    size () {
        if(!this.head) {
            return 0;
        }
        let hd = this.head;
        let count = 1;
        while(hd.next !== null) {
            count++;
            hd = hd.next;
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let hd1 = this.head;

        while(hd1.next !== null) {
            hd1 = hd1.next;
        }
        return hd1;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        //let tmp = this.head;
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let tmp = this.head;

        while(tmp.next.next !== null) {
            tmp = tmp.next;
        }
        tmp.next = null;
    }

    insertLast(Data) {
        if(!this.head) {
            this.head = new Node(Data);
            return;
        }

        let tmp = this.head;
        while(tmp.next !== null) {
            tmp = tmp.next;
        }
        tmp.next = new Node(Data);
    }

    getAt(integer) {

        if(!this.head) {
            return null;
        }

        let count = 0;
        let tmp = this.head;

        while(tmp !== null) {
            if(count === integer) {
                return tmp;
            }
            else {
                tmp = tmp.next;
                count ++;
            }
        }
        return null;
    }

    removeAt(integer) {
        if(!this.head) {
            return;
        }

        if(!this.head.next && integer === 0) {
            this.head = null;
        }

        let count = 0;
        let tmp = this.head;
        let prv = this.head;
        while(tmp !== null) {
            if(count === integer) {
                prv.next = tmp.next;
                break;
            }
            else {
                if(count !== 0) {
                    tmp = tmp.next;
                    prv = prv.next;
                    count++;
                }
                else {
                    tmp = tmp.next;
                    count++;
                }
            }
        }
    }

    insertAt(data, integer) {
        let nd = new Node(data);
        if(!this.head) {
            this.head = nd;
        }

        let tmp = this.head;
        let prv = this.head;
        let count = 0;
        while(tmp !== null) {
            if(count === integer) {
                if(tmp === this.head) {
                    this.head = nd;
                    nd.next = tmp;
                    break;
                }
                else {
                    prv.next = nd;
                    nd.next = tmp;
                    break;
                }
            }
            else {
                if(count===0) {
                    tmp = tmp.next;
                    count++;
                }
                else {
                    tmp = tmp.next;
                    prv = prv.next;
                    count++
                }
            }
        }
        prv.next = nd;
    }

    forEach(functioncall) {
        let tmp = this.head;
        while(tmp !== null) {
            functioncall(tmp);
            tmp = tmp.next;
        }
    }


    [Symbol.iterator]() {
        let next = this.head;
        let check = this.head;
        return {
            next() {
                if(check !== null) {
                    next = check;
                    check = check.next;
                    return {value: next = next}; 
                }
                return {done:true};
            },
            [Symbol.iterator]() { return this; }
        };  
    }
}

module.exports = { Node, LinkedList };

// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    insert(dataf) {
        let pt = this;
        let pr = new Node(0);
        while(pt!==null) {
            pr = pt;
            if(dataf <= pt.data) {
                pt = pt.left;
            }
            else {
                pt = pt.right;
            }
        }
        if(dataf <= pr.data) {
            pr.left = new Node(dataf);
        }
        else {
            pr.right = new Node(dataf);
        }
    }
    contains(data) {
        let pt = this;
        
        while(pt !== null) {
            if(pt.data === data) {
                return pt;
            }
            else {
                if(data <= pt.data) {
                    pt = pt.left;
                }
                else {
                    pt = pt.right;
                }
            }
        }
        return null;
    }

}

module.exports = Node;

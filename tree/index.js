// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        let nd = new Node(data);
        this.children.push(nd);
    }

    remove(data) {
        let arr_without = []
        for (let i = 0; i< this.children.length; i++) {
            if(this.children[i].data !== data) {
                arr_without.push(this.children[i]);
            }
        }
        this.children = arr_without;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    traverseBF(s) {
        const arr = [this.root];

        while(arr.length) {
            const node = arr.shift();
            s(node);

            arr.push(...node.children);
        }
    }

    traverseDF(s) {
        //Preorder
        const stack = [this.root];

        while(stack.length) {
            const node = stack.pop();
            s(node);

            stack.push(...node.children.reverse());
        }


    }
}

module.exports = { Tree, Node };

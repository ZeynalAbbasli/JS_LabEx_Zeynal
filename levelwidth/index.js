// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const nodes = [root, 'end'];
    let currentCounter = 0;
    const arrayCounter = [];

    while(nodes.length >= 1) {
        const currentNode = nodes.shift();
        if(currentNode === 'end') {
            arrayCounter.push(currentCounter);
            currentCounter = 0;
            if(nodes.length >= 1 ) {
                nodes.push('end');
            }
            
        }
        else {
            currentCounter ++;
            nodes.push(...currentNode.children);
        }
    }
    return arrayCounter;

}

module.exports = levelWidth;

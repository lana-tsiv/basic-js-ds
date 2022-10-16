// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }

class BinarySearchTree {
  constructor() {
    this.root_ = null;
  } 

  root() {
    return this.root_;
  }

  add(data) {
    this.root_ = addNewEl(this.root_, data);

    function addNewEl(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        node.right = addNewEl(node.right, data);
      } else {
        node.left = addNewEl(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return searchEl(this.root_, data);

    function searchEl(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data > node.data) {
        return searchEl(node.right, data);
      } else {
        return searchEl(node.left, data);
      }
    }
  }

  find(data) {
    return findEl(this.root_, data);

    function findEl(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findEl(node.right, data);
      } else {
        return findEl(node.left, data);
      }
    }
  }

  remove(data) {
    this.root_ = removeEl(this.root_, data);

    function removeEl(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeEl(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeEl(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeEl(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.root_) {
      return null;
    }

    let minNode = this.root_;
    while(minNode.left) {
      minNode = minNode.left;
    }

    return minNode.data;
  }

  max() {
    if (!this.root_) {
      return null;
    }

    let maxNode = this.root_;
    while(maxNode.right) {
      maxNode = maxNode.right;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};
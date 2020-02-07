// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);
            
            return this.root;
        }
        
        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        
        return this.root;
    };
    
    // Start of function getHeight
    this.getHeight = function(root) {
         // Add your code here
        let leftNode = 0;
        let rightNode = 0;
        let leftRight = 0;
        let longestNode = 0;
        if (root.data == null) {
           return longestNode;
        }
        while (root.left) {
            leftNode++
            root.left = root.left.left || root.left.right;
        }

        while (root.right !== null) {
            rightNode++;
            root.right = root.right.right || root.right.left;
        }

        longestNode = rightNode < leftNode ? leftNode  : rightNode;
        return longestNode;

    }; // End of function getHeight

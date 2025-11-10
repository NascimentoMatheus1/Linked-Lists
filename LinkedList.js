class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        if (!this.head) {
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
        } else {
            const newNode = new Node(value);
            const tailNode = this.tail;
            this.secondToLast = tailNode;
            tailNode.nextNode = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }

    prepend(value) {
        if (!this.head) {
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
        } else {
            const newNode = new Node(value);
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size += 1;
    }

    at(index) {
        let node = this.head;
        let i = 0;
        while (i < index && node.nextNode) {
            node = node.nextNode;
            i++;
        }
        if (i === index) return node.value;
        return null;
    }

    toString() {
        let node = this.head;
        while (node) {
            process.stdout.write(`(${node.value}) -> `);
            node = node.nextNode;
        }
        process.stdout.write('null');
        console.log();
    }

    pop() {
        let node = this.head;
        let previusNode = null;
        while (node.nextNode) {
            previusNode = node;
            node = node.nextNode;
        }
        if (this.head === node) {
            this.head = null;
            this.tail = null;
        } else {
            previusNode.nextNode = null;
            this.tail = previusNode;
        }
        this.size -= 1;
    }

    contains(value) {
        let node = this.head;
        while (node) {
            if (node.value === value) return true;
            node = node.nextNode;
        }
        return false;
    }

    find(value) {
        let node = this.head;
        let i = 0;
        while (node) {
            if (node.value === value) return i;
            node = node.nextNode;
            i++;
        }
        return null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

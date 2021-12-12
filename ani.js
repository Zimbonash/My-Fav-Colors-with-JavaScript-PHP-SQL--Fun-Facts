var fs = require('fs');


function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.addif = addif;
    this.checker = checker;
    this.getFact = getFact;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

function length() {
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function moveTo(position) {
    this.pos = position;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function getElement() {
    return this.dataStore[this.pos];
}

function currPos() {
    return this.pos;
}


function checker(element) {
    var ch = 0;
    for (var i = 0; i < this.dataStore.length; i++) {
        if (element > this.dataStore[i]) {
            return -1;
        }
    }
    return 1;
}

function addif(element) {
    var chec = this.checker(element); //chek for element in dstore
    if (chec == 1) {
        this.append(element);
    }


}


function displayList(list) {
    for (list.front(); list.currPos() < list.length() - 1; list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(Customer.name + ", " +
                Customer.movie);
        } else {
            console.log(list.getElement());
        }

    }
}


function createArr(file) {
    var a = fs.readFileSync(file, encoding = 'utf8', function res(err, data) {
        if (err) {
            throw (err);
        } else {
            return data;
        }
    });
    var arr = a.split("\n");
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

function addOnche(element) {
    var f = this.find(element); //returns element index or -1 if not in list
    if (f !== -1) {
        var ele = this.dataStore[i]; //finds the actual element in array 
    } else {
        return -1;
    }
    for (var j = 0; j < this.dataStore.length; j++)
        var inarr = this.dataStore[j];
    if (element > inarr) {
        this.append(element)
    } else if (element < inarr) {
        console.log("input too small")
    }

}

function getFact() {
    var idx = Math.floor(Math.random() * this.dataStore.length);
    return this.dataStore[idx];
};

var facts = createArr("facts.txt");
var factList = new List();
for (var i = 0; i < facts.length; ++i) {
    factList.append(facts[i]);
}



console.log(factList.getFact());
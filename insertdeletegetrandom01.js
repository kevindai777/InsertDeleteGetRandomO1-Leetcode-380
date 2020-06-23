//Objective is to design a data structure that supports inserting, deleting, and 
//getting a random value all in O(1) time.


//As stated in the question, everything here is O(1), so we use a 
//hashmap and an array to keep track of our values.
class Set {
    constructor() {
        this.map = {}
        this.arr = []
    }

    //Here, we update the map first since the index of the value on the map
    //should always be length - 1
    insert(val) {
        if (val in this.map) {
            return false 
        }

        this.map[val] = this.arr.length 
        this.arr.push(val)

        return true
    }

    //Here, we swap the values in the array and map for the value we want 
    //to delete. Then, we pop it out of the array and remove it from the map,
    //both of which are O(1)
    delete(val) {
        if (!(val in this.map)) {
            return false
        }

        let end = this.map[val]
        let original = this.arr[this.arr.length - 1]
        this.map[original] = end 
        this.arr[end] = original 
        delete this.map[val]
        this.arr.pop()

        return true
    }

    //Here, we get a random value in the array using Math.random()
    getRandom() {
        return this.arr[Math.floor(Math.random() * this.arr.length)]
    }
}

let set = new Set()
set.insert(5)
set.insert(10)
set.delete(5)

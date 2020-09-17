//Java Solution

class RandomizedSet {
    
    Map<Integer, Integer> map;
    List<Integer> arr;
    Random rand = new Random();
    /** Initialize your data structure here. */
    public RandomizedSet() {
        map = new HashMap();
        arr = new ArrayList();
    }
    
    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    public boolean insert(int val) {
        if (map.containsKey(val)) {
            return false;
        }
        
        map.put(val, arr.size());
        arr.add(arr.size(), val);
        return true;
    }
    
    /** Removes a value from the set. Returns true if the set contained the specified element. */
    public boolean remove(int val) {
        if (!map.containsKey(val)) {
            return false;
        }
        
        int original = map.get(val);
        int end = arr.get(arr.size() - 1);
        map.put(end, original);
        arr.set(original, end);
        map.remove(val);
        arr.remove(arr.size() - 1);
        
        return true;
    }
    
    /** Get a random element from the set. */
    public int getRandom() {
        return arr.get(rand.nextInt(arr.size()));
    }
}

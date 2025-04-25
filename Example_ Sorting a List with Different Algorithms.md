<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## Example: Sorting a List with Different Algorithms

Sorting is a fundamental concept in programming, and there are many ways to sort a list. Here are examples of several popular sorting algorithms, each with a brief explanation and a Python code sample.

---

### **1. Bubble Sort**

**How it works:**
Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.

**Python Example:**

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] &gt; arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
print(bubble_sort(items))
```


---

### **2. Selection Sort**

**How it works:**
Finds the minimum element from the unsorted part and puts it at the beginning. Repeats this process for each position in the list.

**Python Example:**

```python
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i+1, len(arr)):
            if arr[j] &lt; arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
print(selection_sort(items))
```


---

### **3. Insertion Sort**

**How it works:**
Builds the sorted array one item at a time by repeatedly inserting the next item into the correct position.

**Python Example:**

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j &gt;= 0 and key &lt; arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
print(insertion_sort(items))
```


---

### **4. Merge Sort**

**How it works:**
Divides the list into halves, recursively sorts each half, and then merges the sorted halves.

**Python Example:**

```python
def merge_sort(arr):
    if len(arr) &gt; 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i &lt; len(L) and j &lt; len(R):
            if L[i] &lt; R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i &lt; len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j &lt; len(R):
            arr[k] = R[j]
            j += 1
            k += 1
    return arr

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
print(merge_sort(items))
```


---

### **5. Quick Sort**

**How it works:**
Selects a 'pivot' element and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. Recursively sorts the sub-arrays.

**Python Example:**

```python
def quick_sort(arr):
    if len(arr) &lt;= 1:
        return arr
    else:
        pivot = arr[^0]
        left = [x for x in arr[1:] if x &lt; pivot]
        right = [x for x in arr[1:] if x &gt;= pivot]
        return quick_sort(left) + [pivot] + quick_sort(right)

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
print(quick_sort(items))
```


---

### **6. Radix Sort**

**How it works:**
Sorts numbers by processing individual digits. It groups numbers by each digit, starting from the least significant digit to the most significant.

**Python Example:**

```python
def radix_sort(arr):
    RADIX = 10
    maxLength = False
    tmp, placement = -1, 1

    while not maxLength:
        maxLength = True
        buckets = [list() for _ in range(RADIX)]

        for i in arr:
            tmp = i // placement
            buckets[tmp % RADIX].append(i)
            if maxLength and tmp &gt; 0:
                maxLength = False

        a = 0
        for b in range(RADIX):
            buck = buckets[b]
            for i in buck:
                arr[a] = i
                a += 1

        placement *= RADIX
    return arr

items = [6, 20, 8, 19, 56, 23, 87, 41, 49, 53]
print(radix_sort(items))
```


---

## **Summary Table**

| Algorithm | Time Complexity (Average) | Stable | In-Place | Example Use Case |
| :-- | :-- | :-- | :-- | :-- |
| Bubble Sort | O(n²) | Yes | Yes | Small or nearly sorted lists |
| Selection Sort | O(n²) | No | Yes | Small lists |
| Insertion Sort | O(n²) | Yes | Yes | Small or nearly sorted lists |
| Merge Sort | O(n log n) | Yes | No | Large lists, external sorting |
| Quick Sort | O(n log n) | No | Yes | General-purpose, fast sorting |
| Radix Sort | O(nk) | Yes | Yes | Sorting integers, large data |


---

You can use any of these algorithms depending on your needs, data size, and whether stability or speed is most important[^1][^2][^3][^4][^5][^6].

<div style="text-align: center">⁂</div>

[^1]: https://www.freecodecamp.org/news/sorting-algorithms-explained-with-examples-in-python-java-and-c/

[^2]: https://en.wikipedia.org/wiki/Sorting_algorithm

[^3]: https://www.xccelerate.co/blog/6-types-of-sorting-algorithms-to-use-in-python

[^4]: https://www.sitepoint.com/best-sorting-algorithms/

[^5]: https://towardsdatascience.com/sorting-algorithms-with-python-4ec7081d78a1/

[^6]: https://www.geeksforgeeks.org/sorting-algorithms-in-python/

[^7]: https://www.geeksforgeeks.org/sorting-algorithms/

[^8]: https://www.programiz.com/dsa/sorting-algorithm

[^9]: https://www.w3schools.com/dsa/dsa_algo_bubblesort.php

[^10]: https://www.cs.usfca.edu/galles/visualization/ComparisonSort.html

[^11]: https://stackoverflow.com/questions/13164047/writing-a-simple-sorting-algorithm-in-c-along-with-a-pseudo-code-version

[^12]: https://dev.to/koladev/8-must-know-sorting-algorithms-5ja

[^13]: https://realpython.com/sorting-algorithms-python/

[^14]: https://www.toptal.com/developers/sorting-algorithms

[^15]: https://www.reddit.com/r/programminghorror/comments/uj34jd/so_i_made_a_sorting_algorithm/

[^16]: https://www.youtube.com/watch?v=RfXt_qHDEPw

[^17]: https://docs.python.org/3/howto/sorting.html

[^18]: https://en.wikipedia.org/wiki/Comparison_sort

[^19]: https://afteracademy.com/blog/comparison-of-sorting-algorithms/

[^20]: https://www.reddit.com/r/algorithms/comments/jbkw7q/list_of_most_common_sorting_algorithms_explained/


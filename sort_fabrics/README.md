## Sort Fabrics
>A fabric is represented by three properties:

- Color (C), a string consisting of lowercase letters of the English alphabet, representing the color of the fabric.
- Durability (D), an integer representing the durability of the fabric.
- Unique identifier (U), an integer representing the ID of the fabric.
>Ada and Charles work at the Kick Start fabric factory. Each day they receive N fabrics, and one of them has to sort it. They sort it using the following criteria:

- Ada sorts in lexicographically increasing order by color (C).
- Charles sorts in ascending order by durability (D).
- They break ties by sorting in ascending order by the unique identifier (U).
>Given N fabrics, count the number of fabrics which end up in the same position regardless of whether Ada or Charles sort them.

### Input
>The first line of the input gives the number of test cases, T. T test cases follow.
Each test case begins with one line consisting of an integer N denoting the number of fabrics. Then N lines follow, each line with a string Ci, an integer Di, and an integer Ui: the color, the durability and the unique identifier of the i-th fabric respectively.

### Output
>For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the number of fabrics which end up in the same position regardless of whether a worker sorts them by color or by durability.

### Limits
> Time limit: 20 seconds.
Memory limit: 1 GB.
1≤T≤100.
1≤ length of string Ci ≤10.
String Ci consists of only lowercase letters of the English alphabet.
No two fabrics have same Ui.
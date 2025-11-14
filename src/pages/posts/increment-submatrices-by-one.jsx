import React from 'react';

const IncrementSubmatricesByOne = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <>
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            So it's today's daily problem and is marked as a <strong>Medium</strong> problem, and I'd say it's rather a really intuitive problem with a concept I didn't know before solving the question today. So, the problem gives us basically a 2d vector called <code>queries</code> which consists of four integers. Now these four integers constitute two opposite corners of a sub-matrix.
          </p>
          <p>
            For instance, <code>[[0,1,1,2]]</code> Represents the following matrix (X represents the particular marked query):
          </p>
          <pre style={{backgroundColor: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', fontFamily: 'var(--font-mono)'}}>
{`[  ] [ X ] [ 0 ] 
[  ] [ 0 ] [ X ]`}
          </pre>
          <p>
            We have been given a matrix of <code>n x n</code> which is filled with zeroes (call it <code>diff</code>) and our task is to add 1 for every space available between <code>{'{r1,c1}'}</code> & <code>{'{r2,c2}'}</code>
          </p>
          <p>
            Ofcourse the first and most basic intuition of this problem is to loop through every element in query and loop through the entire matrix and add one to every element between these two points in square, we will not be diving into that because it's a brute force approach and probably can be coded easily. We will understand the concept of <strong>prefix sum</strong>….
          </p>
        </div>
      </section>

      <section>
        <h2>The Prefix Sum Approach</h2>
        <div className="content-box">
          <p>
            Now, what it basically tells us to do is, add one to every single element of first column, i.e, for <code>n</code> rows, we add 1 to all elements from <code>diff[r1][c1]</code> to <code>diff[r2][c1]</code> and subtract 1 from every element of the column next to <code>c2</code> i.e., for all elements in <code>diff[r1][c2+1]</code> and <code>diff[r2][c2+1]</code> if <code>c2+1</code> doesn't go out of bounds….
          </p>
          <p>
            I found this intuition really weird at the beginning but magic happens in the next step… All we do is, for every row, add the elements to form the prefix sum for that particular cell of elements…. For example if we had query consisting of elements in column 1 and 2 respectively the elements in row 0 would be:
          </p>
          <pre style={{backgroundColor: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', fontFamily: 'var(--font-mono)'}}>
{`[ 0 ] [ 1 ] [ 0 ] [ -1 ] [ 0 ]`}
          </pre>
          <p>
            That row after prefix sum would become:
          </p>
          <pre style={{backgroundColor: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', fontFamily: 'var(--font-mono)'}}>
{`[ 0 ] [ 1 ] [ 1 ] [ 0 ] [ 0 ]`}
          </pre>
          <p>
            <strong>This is how it works!!!!</strong> We added 1 to columns 1 and 2 and all the other elements remain unchanged!! This is how the algorithm actually works!!
          </p>
        </div>
      </section>

      <section>
        <h2>Solution</h2>
        <MultiLanguageCode
          codes={{
            cpp: `class Solution {
public:
    vector<vector<int>> rangeAddQueries(int n, vector<vector<int>>& queries) {
        vector<vector<int>> diff(n, vector<int> (n,0));
        for(auto &query : queries){
            int r1 = query[0];
            int c1 = query[1];
            int r2 = query[2];
            int c2 = query[3];
            for(int i = r1; i <= r2 ; i++){
                diff[i][c1] += 1;
                if(c2 + 1 < n){
                    diff[i][c2+1] -= 1;
                }
            }
        }
        for(int i = 0 ; i < n ; i++){
            for(int j = 1 ; j < n ; j++){
                diff[i][j] += diff[i][j-1];
            }
        }
        return diff;
    }
};`,
            python: `class Solution:
    def rangeAddQueries(self, n: int, queries: List[List[int]]) -> List[List[int]]:
        diff = [[0] * n for _ in range(n)]
        
        for query in queries:
            r1, c1, r2, c2 = query
            for i in range(r1, r2 + 1):
                diff[i][c1] += 1
                if c2 + 1 < n:
                    diff[i][c2 + 1] -= 1
        
        for i in range(n):
            for j in range(1, n):
                diff[i][j] += diff[i][j - 1]
        
        return diff`,
            java: `class Solution {
    public int[][] rangeAddQueries(int n, int[][] queries) {
        int[][] diff = new int[n][n];
        
        for (int[] query : queries) {
            int r1 = query[0];
            int c1 = query[1];
            int r2 = query[2];
            int c2 = query[3];
            
            for (int i = r1; i <= r2; i++) {
                diff[i][c1] += 1;
                if (c2 + 1 < n) {
                    diff[i][c2 + 1] -= 1;
                }
            }
        }
        
        for (int i = 0; i < n; i++) {
            for (int j = 1; j < n; j++) {
                diff[i][j] += diff[i][j - 1];
            }
        }
        
        return diff;
    }
}`
          }}
        />
      </section>

      <section>
        <h2>Complexity Analysis</h2>
        <div className="content-box highlight">
          <p>
            <strong>Time Complexity:</strong>
          </p>
          <p>
            Let's say the number of queries is <code>Q</code> and loops runs from <code>r1</code> to <code>r2</code> everytime for every query in <code>Q</code>…. In worse case scenario it runs from 0 to n-1 making the complexity <strong>O(Q × n)</strong>
          </p>
          <p>
            And then we iterate through every element from diff vector so that's ofcourse a complexity of <strong>O(n²)</strong>
          </p>
          <p>
            Thus the overall time complexity for this algorithm is – <strong>O(n² + Q(n))</strong> which is approximately – <strong>O(n²)</strong>
          </p>
          <p>
            <strong>Space Complexity:</strong>
          </p>
          <p>
            We are using an extra 2d matrix called <code>diff</code> of <code>n x n</code> making the space complexity <strong>O(n²)</strong>
          </p>
          <p>
            This is how we can easily solve this question of leetcode!! Hope you understood the problem!! 😊
          </p>
        </div>
      </section>
    </>
  );
};

export default IncrementSubmatricesByOne;

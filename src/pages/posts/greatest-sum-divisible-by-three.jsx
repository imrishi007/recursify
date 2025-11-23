import React from 'react';

const GreatestSumDivisibleByThree = ({ CodeBlock, MultiLanguageCode }) => {
  const cppCode = `class Solution {
public:
    int maxSumDivThree(vector<int>& nums) {
        int sum = 0;
        int one1 = 1e9, one2 = 1e9;
        int two1 = 1e9, two2 = 1e9;
        for (int num : nums) {
            sum += num;
            if (num % 3 == 1) {
                if (num < one1) {
                    one2 = one1;
                    one1 = num;
                } else if (num < one2) {
                    one2 = num;
                }
            }
            if (num % 3 == 2) {
                if (num < two1) {
                    two2 = two1;
                    two1 = num;
                } else if (num < two2) {
                    two2 = num;
                }
            }
        }
        if (sum % 3 == 0)
            return sum;
        if (sum % 3 == 1) {
            int op1 = one1;
            int op2 = two1 + two2;
            return sum - min(op1, op2);
        } else {
            int op1 = two1;
            int op2 = one1 + one2;
            return sum - min(op1, op2);
        }
    }
};`;

  const pythonCode = `class Solution:
    def maxSumDivThree(self, nums: List[int]) -> int:
        total_sum = 0
        one1, one2 = float('inf'), float('inf')
        two1, two2 = float('inf'), float('inf')
        
        for num in nums:
            total_sum += num
            if num % 3 == 1:
                if num < one1:
                    one2 = one1
                    one1 = num
                elif num < one2:
                    one2 = num
            
            if num % 3 == 2:
                if num < two1:
                    two2 = two1
                    two1 = num
                elif num < two2:
                    two2 = num
        
        if total_sum % 3 == 0:
            return total_sum
        
        if total_sum % 3 == 1:
            op1 = one1
            op2 = two1 + two2
            return total_sum - min(op1, op2)
        else:
            op1 = two1
            op2 = one1 + one2
            return total_sum - min(op1, op2)`;

  const javaCode = `class Solution {
    public int maxSumDivThree(int[] nums) {
        int sum = 0;
        int one1 = Integer.MAX_VALUE, one2 = Integer.MAX_VALUE;
        int two1 = Integer.MAX_VALUE, two2 = Integer.MAX_VALUE;
        
        for (int num : nums) {
            sum += num;
            if (num % 3 == 1) {
                if (num < one1) {
                    one2 = one1;
                    one1 = num;
                } else if (num < one2) {
                    one2 = num;
                }
            }
            if (num % 3 == 2) {
                if (num < two1) {
                    two2 = two1;
                    two1 = num;
                } else if (num < two2) {
                    two2 = num;
                }
            }
        }
        
        if (sum % 3 == 0)
            return sum;
        
        if (sum % 3 == 1) {
            int op1 = one1;
            int op2 = two1 + two2;
            return sum - Math.min(op1, op2);
        } else {
            int op1 = two1;
            int op2 = one1 + one2;
            return sum - Math.min(op1, op2);
        }
    }
}`;

  return (
    <div className="post-content">
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            Given an integer array <code>nums</code>, return <em>the <strong>maximum possible sum</strong> of elements of the array such that it is <strong>divisible by three</strong></em>.
          </p>
        </div>
      </section>

      <section>
        <h2>Examples</h2>
        <div className="content-box">
          <h3>Example 1:</h3>
          <pre><code>{`Input: nums = [3,6,5,1,8]
Output: 18
Explanation: Pick numbers 3, 6, 1 and 8 their sum is 18 (maximum sum divisible by 3).`}</code></pre>
        </div>

        <div className="content-box">
          <h3>Example 2:</h3>
          <pre><code>{`Input: nums = [4]
Output: 0
Explanation: Since 4 is not divisible by 3, do not pick any number.`}</code></pre>
        </div>
      </section>

      <section>
        <h2>Initial Approach & Thought Process</h2>
        <div className="content-box">
          <p>
            This problem is marked as a "medium" level problem but at the first glance I understood that it is an "easy" level problem for sure. At first I thought, we should just sort the numbers in descending order and then iterate through the array while adding numbers and check if the current sum is divisible by 3, if not then, move ahead.. Of course this was such a naive and stupid solution because it would skip whole bunch of numbers in between.
          </p>
          <p>
            The next solution I thought was, it's a recursion problem with memoization…. Classic "Check all possible subsets and store the largest sum divisible by 3, yeah 2^n complexity, reduced with memoization". Again this wasn't a feasible solution.
          </p>
          <p>
            <strong>A short note</strong> - There's a dynamic programming solution that exists for this whose time complexity is O(n) but I will not be discussing that in this blog because I myself am not that good at DP atp 😅
          </p>
        </div>
      </section>

      <section>
        <h2>The Key Intuition</h2>
        <div className="content-box">
          <p>
            So, we must find the maximum sum DIVISIBLE BY 3… The word divisible should definitely pop up the words remainder if you're a good math student lol. And exactly that is my intuition behind solving this problem. We know that maximum possible sum would always be the <code>total_sum</code> of all the integers in the vector… Now, there can be exactly 3 scenarios -
          </p>
          <ol>
            <li>The <code>total_sum</code> is divisible by 3… Bravo this is the solution we need!!</li>
            <li><code>total_sum</code> has a remainder of 1… Need to remove minimum possible "remainder 1 integer"</li>
            <li><code>total_sum</code> has a remainder of 2… Same as previous but with minimum possible "remainder 2 integer"</li>
          </ol>
          <p>
            Now, I immediately coded up the solution for this… But then I realised as I coded "Oh what about a scenario where we need to remove "minimum remainder 1" but we don't have a number with remainder 1??
          </p>
          <p>
            This is where I took some help and came up with an idea… We will store <strong>two smallest numbers</strong> for both scenarios, namely <code>one1</code>, <code>one2</code>, <code>two1</code>, <code>two2</code> which store the two smallest numbers leaving a remainder of 1 and 2 respectively…. And thus our problem is solved!!
          </p>
          <p>
            Now, the solution becomes simple, pick the smallest of <code>one1</code> and <code>(two1 + two2)</code> in first scenario…
          </p>
        </div>
      </section>

      <section>
        <h2>Algorithm Steps</h2>
        <div className="content-box">
          <ol>
            <li>Declare four variables <code>one1</code>, <code>one2</code>, <code>two1</code>, <code>two2</code>, and <code>sum</code> for maintaining the total sum</li>
            <li>Iterate through the array once and update the values of all four variables at once while adding the numbers to <code>sum</code></li>
            <li>After looping through we do the following:
              <ul>
                <li><strong>If sum % 3 == 0:</strong> return sum</li>
                <li><strong>If sum % 3 == 1:</strong>
                  <pre><code>{`op1 = one1;
op2 = two1 + two2;
return sum - min(op1, op2);`}</code></pre>
                </li>
                <li><strong>Else (sum % 3 == 2):</strong>
                  <pre><code>{`op1 = two1;
op2 = one1 + one2;
return sum - min(op1, op2);`}</code></pre>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Code Implementation</h2>
        <MultiLanguageCode
          codes={{
            cpp: cppCode,
            python: pythonCode,
            java: javaCode,
          }}
        />
      </section>

      <section>
        <h2>Complexity Analysis</h2>
        <div className="content-box">
          <ul>
            <li>
              <strong>Time Complexity:</strong> O(n) - We only iterate once through the array.
            </li>
            <li>
              <strong>Space Complexity:</strong> O(1) - We do not use any external data structure.
            </li>
          </ul>
          <p style={{ marginTop: '20px' }}>
            I hope this blog was able to explain the solution to this simple problem… Thanks!!!!
          </p>
        </div>
      </section>
    </div>
  );
};

export default GreatestSumDivisibleByThree;

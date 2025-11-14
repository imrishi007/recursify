import React from 'react';

const CountHillsAndValleys = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <>
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            This problem asks us to count the total number of <code>hills</code> and <code>valleys</code> in an array.
          </p>
          <p>
            The first question that comes to my mind when I see this is, how do we actually identify if a number in the array is a hill or a valley???
          </p>
          <p>
            The answer is simple. Think of it logically and try to visualize the array. If a number is greater than both its left and right neighbors, it is a <code>hill</code>, like a place that is higher than everything around it.
          </p>
          <p>
            Similarly, if a number is less than both of its neighbors, it is a <code>valley</code>, a place that lies at the bottom compared to its surroundings.
          </p>
          <p>
            That's all! All you really need to do is visualize this and apply those two conditions.
          </p>
        </div>
      </section>

      <section>
        <h2>Examples</h2>
        <div className="content-box">
          <h3>Example 1:</h3>
          <pre><code><strong>Input:</strong> nums = [2,4,1,1,6,5]
<strong>Output:</strong> 3
<strong>Explanation:</strong>
- 4 is a hill (2 &lt; 4 &gt; 1).
- 1 (at index 2) is a valley (4 &gt; 1 &lt; 6, considering the next distinct element after the duplicate).
- 6 is a hill (1 &lt; 6 &gt; 5).</code></pre>
          
          <h3>Example 2:</h3>
          <pre><code><strong>Input:</strong> nums = [1,2,3,4,5]
<strong>Output:</strong> 0
<strong>Explanation:</strong> No hills or valleys in a strictly increasing sequence.</code></pre>
        </div>
      </section>

      <section>
        <h2>What if number is equal??</h2>
        <div className="content-box">
          <p>
            Now you might ask — what if the number is equal to one or both of its neighbors?
          </p>
          <p>
            Well, imagine you're on a hill, and the next number is equal, you can assume that the hill is stretched out a bit, like a plateau. They all belong to the same hill. So we can just skip over duplicates in such cases!! makes sense, right?
          </p>
        </div>
      </section>

      <section>
        <h2>Algorithm Steps</h2>
        <div className="content-box">
          <h3>Let's Formulate the Algorithm</h3>
          <p>
            Take a variable to store the final answer (<code>ans</code>) and another to keep track of the previous distinct element.
          </p>
          <ol>
            <li>Loop through the array... but here's a small catch:</li>
            <li>A number can only be considered a hill or a valley if it has neighbors on both sides.</li>
            <li>So we start from index 1 (second element) and go till <code>n - 2</code> (second last element).</li>
            <li>While iterating, at each index check three things:
              <ol type="a">
                <li>Is the current number greater than both neighbors? If yes, it's a hill → increment <code>ans</code></li>
                <li>Is it less than both neighbors? If yes, it's a valley → increment <code>ans</code></li>
                <li>If it's equal to its neighbor(s), just skip and move on</li>
              </ol>
            </li>
            <li>Finally, return the <code>ans</code>.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Solution</h2>
        <MultiLanguageCode
          codes={{
            cpp: `class Solution {
public:
    int countHillValley(vector<int>& nums) {
        int ans = 0, prev = nums[0];
        for (int i = 1 ; i < nums.size()-1;i++){
            if(nums[i] == nums[i+1])continue;
            if(nums[i] > prev && nums[i] > nums[i+1]) ans++;
            else if (nums[i] < prev && nums[i] < nums[i+1]) ans++;
            prev = nums[i];
        }   
        return ans;
    }
};`,
            python: `class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        ans = 0
        prev = nums[0]
        
        for i in range(1, len(nums) - 1):
            if nums[i] == nums[i + 1]:
                continue
            if nums[i] > prev and nums[i] > nums[i + 1]:
                ans += 1
            elif nums[i] < prev and nums[i] < nums[i + 1]:
                ans += 1
            prev = nums[i]
        
        return ans`,
            java: `class Solution {
    public int countHillValley(int[] nums) {
        int ans = 0, prev = nums[0];
        
        for (int i = 1; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) continue;
            if (nums[i] > prev && nums[i] > nums[i + 1]) ans++;
            else if (nums[i] < prev && nums[i] < nums[i + 1]) ans++;
            prev = nums[i];
        }
        
        return ans;
    }
}`
          }}
        />
      </section>

      <section>
        <h2>Complexity Analysis</h2>
        <div className="content-box highlight">
          <p>
            <strong>Time Complexity:</strong> O(N), where N is the number of elements in the <code>nums</code> array.
          </p>
          <p>
            We traverse the array once. Each step involves constant time operations (comparisons and assignments).
          </p>
          <p>
            <strong>Space Complexity:</strong> O(1).
          </p>
          <p>
            We only use a few constant extra variables (<code>ans</code>, <code>prev</code>, and the loop counter <code>i</code>). The memory usage does not scale with the input size.
          </p>
        </div>
      </section>
    </>
  );
};

export default CountHillsAndValleys;

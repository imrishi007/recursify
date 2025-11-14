import React from 'react';

const CountMaxBitwiseOr = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <>
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            Given an integer array <code>nums</code>, find the maximum possible bitwise OR of a subset,
            then return the number of different non-empty subsets with the maximum bitwise OR.
          </p>
        </div>
      </section>

      <section>
        <h2>Approach: Backtracking</h2>
        <p>
          First, find the maximum OR by OR-ing all elements. Then use backtracking to count
          all subsets that achieve this maximum OR.
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <CodeBlock
          language="python"
          code={`class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        max_or = 0
        for num in nums:
            max_or |= num
        
        def backtrack(index, current_or):
            if index == len(nums):
                return 1 if current_or == max_or else 0
            
            # Include current element
            count = backtrack(index + 1, current_or | nums[index])
            
            # Exclude current element
            count += backtrack(index + 1, current_or)
            
            return count
        
        return backtrack(0, 0)`}
        />
      </section>

      <section>
        <h2>Complexity Analysis</h2>
        <div className="content-box highlight">
          <p><strong>Time Complexity:</strong> O(2^n)</p>
          <p><strong>Space Complexity:</strong> O(n) for recursion stack</p>
        </div>
      </section>

      <section>
        <h2>Key Insights</h2>
        <div className="content-box">
          <ul>
            <li>Maximum OR is the OR of all elements</li>
            <li>Use backtracking to explore all subsets</li>
            <li>Count subsets that match maximum OR</li>
            <li>Can optimize with memoization</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CountMaxBitwiseOr;

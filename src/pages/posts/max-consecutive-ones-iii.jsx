import React from 'react';

const MaxConsecutiveOnesIII = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <>
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            Given a binary array <code>nums</code> and an integer <code>k</code>, return the maximum
            number of consecutive 1's in the array if you can flip at most <code>k</code> 0's.
          </p>
        </div>
      </section>

      <section>
        <h2>Examples</h2>
        <h3>Example 1:</h3>
        <div className="content-box">
          <p><strong>Input:</strong> <code>nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2</code></p>
          <p><strong>Output:</strong> <code>6</code></p>
          <p><strong>Explanation:</strong> Flip 0's at index 5 and 10. The longest sequence is from index 4 to 9.</p>
        </div>
      </section>

      <section>
        <h2>Approach: Sliding Window</h2>
        <p>
          This is a classic sliding window problem. We maintain a window that contains at most k zeros.
          When we exceed k zeros, we shrink the window from the left.
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <CodeBlock
          language="python"
          code={`class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        max_len = 0
        zeros = 0
        
        for right in range(len(nums)):
            # Expand window
            if nums[right] == 0:
                zeros += 1
            
            # Shrink window if we have too many zeros
            while zeros > k:
                if nums[left] == 0:
                    zeros -= 1
                left += 1
            
            # Update max length
            max_len = max(max_len, right - left + 1)
        
        return max_len`}
        />
      </section>

      <section>
        <h2>Complexity Analysis</h2>
        <div className="content-box highlight">
          <p><strong>Time Complexity:</strong> O(n) - Each element visited at most twice</p>
          <p><strong>Space Complexity:</strong> O(1) - Only using constant extra space</p>
        </div>
      </section>

      <section>
        <h2>Key Insights</h2>
        <div className="content-box">
          <ul>
            <li>Use two pointers to maintain a sliding window</li>
            <li>Track the number of zeros in current window</li>
            <li>Shrink window when zeros {'>'} k</li>
            <li>Update maximum length at each step</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default MaxConsecutiveOnesIII;

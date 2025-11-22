import React from 'react';

const MaxConsecutiveOnesIII = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <div className="post-content">
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            Given a binary array <code>nums</code> and an integer <code>k</code>, return the maximum number of consecutive <code>1</code>'s in the array if you can flip at most <code>k</code> <code>0</code>'s.
          </p>
        </div>
      </section>

      <section>
        <h2>Examples</h2>
        <h3>Example 1:</h3>
        <div className="content-box">
          <p><strong>Input:</strong> <code>nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2</code></p>
          <p><strong>Output:</strong> <code>6</code></p>
          <p><strong>Explanation:</strong> <code>[1,1,1,0,0,<b>1,1,1,1,1,1</b>]</code> when flipping the last two 0's.</p>
        </div>
        <h3>Example 2:</h3>
        <div className="content-box">
          <p><strong>Input:</strong> <code>nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3</code></p>
          <p><strong>Output:</strong> <code>10</code></p>
          <p><strong>Explanation:</strong> Flip 3 zeros at positions 4, 5, and 9 to get 10 consecutive 1's.</p>
        </div>
        <h3>Example 3:</h3>
        <div className="content-box">
          <p><strong>Input:</strong> <code>nums = [0,0,0,1], k = 4</code></p>
          <p><strong>Output:</strong> <code>4</code></p>
        </div>
      </section>

      <section>
        <h2>Intuition</h2>
        <div className="content-box">
          <p>Whenever you hear something like <b>SUBSTRING</b> or <b>SUBARRAY</b> (SUB-ANYTHING 😂) try to think of a <b>sliding window</b> approach…</p>
          <p>
            The brute force approach would be to traverse the whole array, generate all possible subarrays, and for each, count the zeroes and flip up to <code>k</code> of them. This is highly inefficient (exponential time complexity).
          </p>
          <p>
            Instead, we use the <b>sliding window</b> technique. We use two pointers, <b>LEFT</b> and <b>RIGHT</b>, to maintain a window with at most <code>k</code> zeroes. If the number of zeroes exceeds <code>k</code>, we shrink the window from the left until it is valid again, always updating the maximum window size.
          </p>
          <ul>
            <li>We traverse the array once, expanding the window with the right pointer.</li>
            <li>If zeroes in the window exceed `k`, move the left pointer to shrink the window until valid.</li>
            <li>At each step, update the answer with the current window size.</li>
          </ul>
          <p>
            <b>Time Complexity:</b> O(n) (each element is visited at most twice)<br/>
            <b>Space Complexity:</b> O(1) (no extra data structures)
          </p>
          <p>I hope this made you understand the approach behind solving this easy problem of LeetCode 😊</p>
        </div>
      </section>

      <section>
        <h2>Code Implementation</h2>
        <MultiLanguageCode
          codes={{
            cpp: `class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int left = 0;
        int right = 0;
        int zeroCount = 0;
        int maxLen = 0;

        // Iterate through the array with the right pointer
        for (right = 0; right < nums.size(); ++right) {
            if (nums[right] == 0) {
                zeroCount++;
            }

            // If zero count exceeds k, shrink the window from the left
            while (zeroCount > k) {
                if (nums[left] == 0) {
                    zeroCount--;
                }
                left++;
            }

            maxLen = max(maxLen, right - left + 1);
        }
        return maxLen;
    }
};`,
            python: `class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        zero_count = 0
        max_len = 0

        for right in range(len(nums)):
            if nums[right] == 0:
                zero_count += 1

            while zero_count > k:
                if nums[left] == 0:
                    zero_count -= 1
                left += 1

            max_len = max(max_len, right - left + 1)

        return max_len`,
            java: `class Solution {
    public int longestOnes(int[] nums, int k) {
        int left = 0;
        int zeroCount = 0;
        int maxLen = 0;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] == 0) {
                zeroCount++;
            }

            while (zeroCount > k) {
                if (nums[left] == 0) {
                    zeroCount--;
                }
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }
}`
          }}
        />
      </section>

      <section>
        <h2>Dry Run with Example</h2>
        <div className="content-box">
          <p><b>Input:</b> <code>nums = [1, 1, 0, 0, 1, 1, 1, 0], k = 2</code></p>
          <ul>
            <li><b>Step 1:</b> l=0, r=0, zeroCnt=0, Window=[1] — no zero, extend window</li>
            <li><b>Step 2:</b> l=0, r=1, zeroCnt=0, Window=[1,1] — no zero, extend window</li>
            <li><b>Step 3:</b> l=0, r=2, zeroCnt=1, Window=[1,1,0] — 1 zero, within k</li>
            <li><b>Step 4:</b> l=0, r=3, zeroCnt=2, Window=[1,1,0,0] — 2 zeroes, still valid</li>
            <li><b>Step 5:</b> l=0, r=4, zeroCnt=2, Window=[1,1,0,0,1] — still 2 zeroes, extend</li>
            <li><b>Step 6:</b> l=0, r=5, zeroCnt=2, Window=[1,1,0,0,1,1] — extend</li>
            <li><b>Step 7:</b> l=0, r=6, zeroCnt=2, Window=[1,1,0,0,1,1,1] — max window = 7, still valid</li>
            <li><b>Step 8:</b> l=0, r=7, zeroCnt=3, Window=[1,1,0,0,1,1,1,0] — 3 zeroes &gt; k → shrink from left</li>
            <li><b>Step 9:</b> l=1, r=7, zeroCnt=3, Window=[1,0,0,1,1,1,0] — nums[0]=1 → no effect</li>
            <li><b>Step 10:</b> l=2, r=7, zeroCnt=3, Window=[0,0,1,1,1,0] — nums[1]=1 → no effect</li>
            <li><b>Step 11:</b> l=3, r=7, zeroCnt=2, Window=[0,1,1,1,0] — nums[2]=0 → zeroCnt--</li>
          </ul>
          <p>At this point, window = [0,1,1,1,0] → length = 5<br/>Max remains 7 (from earlier). <b>Final answer = 7</b></p>
        </div>
      </section>
    </div>
  );
};

export default MaxConsecutiveOnesIII;
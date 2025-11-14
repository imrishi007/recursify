import React from 'react';

const CountHillsAndValleys = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <>
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            Given an integer array <code>nums</code>, count the number of hills and valleys.
            A hill is a sequence where an element is strictly greater than its adjacent non-equal elements.
            A valley is where an element is strictly less than its adjacent non-equal elements.
          </p>
        </div>
      </section>

      <section>
        <h2>Solution</h2>
        <MultiLanguageCode
          codes={{
            python: `class Solution:
    def countHillValley(self, nums: List[int]) -> int:
        count = 0
        left = nums[0]
        
        for i in range(1, len(nums) - 1):
            # Skip equal consecutive elements
            if nums[i] == nums[i + 1]:
                continue
            
            # Check for hill or valley
            if (left < nums[i] > nums[i + 1]) or (left > nums[i] < nums[i + 1]):
                count += 1
            
            left = nums[i]
        
        return count`,
            cpp: `class Solution {
public:
    int countHillValley(vector<int>& nums) {
        int count = 0;
        int left = nums[0];
        
        for (int i = 1; i < nums.size() - 1; i++) {
            // Skip equal consecutive elements
            if (nums[i] == nums[i + 1]) {
                continue;
            }
            
            // Check for hill or valley
            if ((left < nums[i] && nums[i] > nums[i + 1]) || 
                (left > nums[i] && nums[i] < nums[i + 1])) {
                count++;
            }
            
            left = nums[i];
        }
        
        return count;
    }
};`,
            java: `class Solution {
    public int countHillValley(int[] nums) {
        int count = 0;
        int left = nums[0];
        
        for (int i = 1; i < nums.length - 1; i++) {
            // Skip equal consecutive elements
            if (nums[i] == nums[i + 1]) {
                continue;
            }
            
            // Check for hill or valley
            if ((left < nums[i] && nums[i] > nums[i + 1]) || 
                (left > nums[i] && nums[i] < nums[i + 1])) {
                count++;
            }
            
            left = nums[i];
        }
        
        return count;
    }
}`
          }}
        />
      </section>

      <section>
        <h2>Complexity Analysis</h2>
        <div className="content-box highlight">
          <p><strong>Time Complexity:</strong> O(n) - Single pass through the array</p>
          <p><strong>Space Complexity:</strong> O(1) - Only constant extra space used</p>
        </div>
      </section>

      <section>
        <h2>Approach Explanation</h2>
        <div className="content-box">
          <ol>
            <li>Maintain a <code>left</code> pointer to track the previous non-equal element</li>
            <li>Iterate through the array from index 1 to n-2</li>
            <li>Skip consecutive equal elements</li>
            <li>Check if current element forms a hill or valley with left and right neighbors</li>
            <li>Update left pointer to current position</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default CountHillsAndValleys;

import React from 'react';

const ReverseInteger = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <>
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            Given a signed 32-bit integer <code>x</code>, return <code>x</code> with its digits reversed.
            If reversing <code>x</code> causes the value to go outside the signed 32-bit integer range
            <code> [-2³¹, 2³¹ - 1]</code>, then return <code>0</code>.
          </p>
          <p>
            <strong>Assume the environment does not allow you to store 64-bit integers (signed or unsigned).</strong>
          </p>
        </div>
      </section>

      <section>
        <h2>Examples</h2>
        
        <h3>Example 1:</h3>
        <div className="content-box">
          <p><strong>Input:</strong> <code>x = 123</code></p>
          <p><strong>Output:</strong> <code>321</code></p>
        </div>

        <h3>Example 2:</h3>
        <div className="content-box">
          <p><strong>Input:</strong> <code>x = -123</code></p>
          <p><strong>Output:</strong> <code>-321</code></p>
        </div>

        <h3>Example 3:</h3>
        <div className="content-box">
          <p><strong>Input:</strong> <code>x = 120</code></p>
          <p><strong>Output:</strong> <code>21</code></p>
        </div>

        <h3>Example 4:</h3>
        <div className="content-box">
          <p><strong>Input:</strong> <code>x = 1534236469</code></p>
          <p><strong>Output:</strong> <code>0</code></p>
          <p><strong>Explanation:</strong> Reversed integer 9646324351 exceeds the 32-bit signed integer range.</p>
        </div>
      </section>

      <section>
        <h2>Constraints</h2>
        <ul>
          <li><code>-2³¹ ≤ x ≤ 2³¹ - 1</code></li>
        </ul>
      </section>

      <section>
        <h2>Approach</h2>
        <p>
          The key challenge here is to reverse the integer while checking for overflow at each step.
          We'll build the reversed number digit by digit by:
        </p>
        <ol>
          <li>Extracting the last digit using modulo operation (<code>x % 10</code>)</li>
          <li>Adding it to our result after multiplying result by 10</li>
          <li>Checking for overflow before adding each digit</li>
          <li>Removing the last digit from x using integer division (<code>x // 10</code>)</li>
        </ol>
      </section>

      <section>
        <h2>Solution</h2>
        
        <MultiLanguageCode
          codes={{
            python: `class Solution:
    def reverse(self, x: int) -> int:
        # Define 32-bit integer limits
        INT_MIN, INT_MAX = -2**31, 2**31 - 1
        
        # Handle negative numbers
        sign = -1 if x < 0 else 1
        x = abs(x)
        
        result = 0
        while x != 0:
            # Get the last digit
            digit = x % 10
            
            # Check for overflow before adding digit
            if result > INT_MAX // 10 or (result == INT_MAX // 10 and digit > 7):
                return 0
            
            # Build the reversed number
            result = result * 10 + digit
            
            # Remove last digit from x
            x //= 10
        
        return sign * result`,
            cpp: `class Solution {
public:
    int reverse(int x) {
        int result = 0;
        
        while (x != 0) {
            int digit = x % 10;
            x /= 10;
            
            // Check overflow before multiplication
            if (result > INT_MAX / 10 || (result == INT_MAX / 10 && digit > 7)) {
                return 0;
            }
            if (result < INT_MIN / 10 || (result == INT_MIN / 10 && digit < -8)) {
                return 0;
            }
            
            result = result * 10 + digit;
        }
        
        return result;
    }
};`,
            java: `class Solution {
    public int reverse(int x) {
        int result = 0;
        
        while (x != 0) {
            int digit = x % 10;
            x /= 10;
            
            // Check overflow before multiplication
            if (result > Integer.MAX_VALUE / 10 || 
                (result == Integer.MAX_VALUE / 10 && digit > 7)) {
                return 0;
            }
            if (result < Integer.MIN_VALUE / 10 || 
                (result == Integer.MIN_VALUE / 10 && digit < -8)) {
                return 0;
            }
            
            result = result * 10 + digit;
        }
        
        return result;
    }
}`
          }}
        />
      </section>

      <section>
        <h2>Complexity Analysis</h2>
        <div className="content-box highlight">
          <p><strong>Time Complexity:</strong> O(log₁₀(n))</p>
          <p>
            We iterate through each digit of the number. The number of digits in n is log₁₀(n).
          </p>
          <p><strong>Space Complexity:</strong> O(1)</p>
          <p>
            We only use a constant amount of extra space for variables.
          </p>
        </div>
      </section>

      <section>
        <h2>Key Insights</h2>
        <div className="content-box">
          <ul>
            <li><strong>Overflow Check:</strong> We must check for overflow <em>before</em> multiplying by 10, not after</li>
            <li><strong>Edge Cases:</strong> Handle negative numbers by working with absolute value and restoring sign at end</li>
            <li><strong>32-bit Limits:</strong> INT_MAX is 2147483647, so when reversed is 7463847412, we check if digit is {'>'} 7</li>
            <li><strong>Trailing Zeros:</strong> Numbers like 120 naturally become 21 when reversed (trailing zeros are dropped)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>❌ Checking overflow after building the number (too late!)</li>
          <li>❌ Using 64-bit integers to detect overflow (violates problem constraints)</li>
          <li>❌ Converting to string (less efficient and not elegant)</li>
          <li>❌ Forgetting to handle negative numbers correctly</li>
        </ul>
      </section>

      <section>
        <h2>Follow-up Questions</h2>
        <div className="content-box">
          <ol>
            <li>How would you handle this if you couldn't use any long/64-bit integers?</li>
            <li>Can you implement this without using the modulo operator?</li>
            <li>What if the input was a string instead of an integer?</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default ReverseInteger;

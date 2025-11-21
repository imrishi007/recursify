import React from 'react';

const UniqueLength3Palindrome = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <div className="post-content">
      <h2>Problem Statement</h2>
      <p>
        Back with another leetcode solution!! This is today's problem in which we have been given a string "s" and we have to find number of subsequences which are of length 3 and palindrome. which are unique.
      </p>

      <p>
        Well, when I saw this problem at first my first intuition/thought was "Oh, it's a recursion problem in which we have to store the results and then go through every possible 3-length subsequence and blah blah blah blah blah…. O(2^n) solution". Which was absolutely WRONGGG!!! This shows how stupid it is to complicate simple problems!!
      </p>

      <h2>Understanding the Problem</h2>
      <p>
        To understand the core of this problem we must understand the patterns this problem is asking us to find… Think about it, how does a palindrome of length == 3 look like??
      </p>

      <p>
        ABA , BXB, DRD, OPO, ONO, PQP, CRC, and the list goes on forever!! {`{Not forever tbh only 26*26 possible solutions}`}
      </p>

      <p>
        Do you observe any pattern?? Yep!! There indeed is a pattern!!
      </p>

      <div className="example-box">
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
          X Y X - where X and Y are any random alphabets!!
        </p>
      </div>

      <p>
        That's the main intuition behind solving this simple problem!!
      </p>

      <p>
        Now that we know the pattern, how exactly can we solve this?? It's simple… All we have to do is, check if the character at current position also exists at some other position in the string i.e., let's say we encounter a "O", we must see if there is any other "O" existing in the given string…. If it does, that's all we need!! We can iterate between them and find all the unique characters, and as we keep going on to find the characters, we add the number of "unique characters" to our ans!!
      </p>

      <p>
        Now, how can we do that? Again, it's simple… All we have to do is, keep a track of "first" and "last" indices of any element in the string… It's simple, we have to just create two data structures of size 26 which keeps the track of first and last index respectively…
      </p>

      <p>
        Next, we run a simple loop for every character in the data structure (26 times) and then check if first index exists, if it does check if there are letters between it, and if it does happen to have characters between them, iterate through them and find all unique ones add them to the answer!!!
      </p>

      <h2>Algorithm</h2>
      <div className="example-box">
        <pre style={{ fontFamily: 'var(--font-mono)', lineHeight: '1.8', fontSize: '0.95rem' }}>
{`1. Form two data structures (size 26 each) used for keeping 
   the track of indices….

2. Iterate through the string and fill each of the data 
   structure with respective indices..

3. a - Iterate through all the 26 characters and check 
       two conditions -
       
       i - Does first index exist? check the second : skip
       
       ii - first index == last index? skip : continue 
            inside the loop

   b - Next, initialize a data structure having boolean 
       values to check if they were seen in the substring 
       between first[i] and last[i] and loop through all 
       the characters and if they exist, add it to the 
       answer!!`}
        </pre>
      </div>

      <h2>Code Implementation</h2>

      <MultiLanguageCode
        codes={{
          cpp: `class Solution {
public:
    int countPalindromicSubsequence(string s) {
        int ans = 0, n = s.length();
        vector<int> first(26, -1), last(26, -1);
        
        // Track first and last occurrence of each character
        for (int i = 0; i < n; i++) {
            char ch = s[i] - 'a';
            if (first[ch] == -1) first[ch] = i;
            last[ch] = i;
        }
        
        // For each character, count unique characters between first and last occurrence
        for (int i = 0; i < 26; i++) {
            if (first[i] == -1 || first[i] == last[i]) continue;
            
            vector<bool> seen(26, 0);
            for (int j = first[i] + 1; j < last[i]; j++) {
                seen[s[j] - 'a'] = true;
            }
            
            int cnt = 0;
            for (int k = 0; k < 26; k++) {
                if (seen[k]) cnt++;
            }
            ans += cnt;
        }
        
        return ans;
    }
};`,
          python: `class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        ans = 0
        n = len(s)
        first = [-1] * 26
        last = [-1] * 26
        
        # Track first and last occurrence of each character
        for i in range(n):
            ch = ord(s[i]) - ord('a')
            if first[ch] == -1:
                first[ch] = i
            last[ch] = i
        
        # For each character, count unique characters between first and last occurrence
        for i in range(26):
            if first[i] == -1 or first[i] == last[i]:
                continue
            
            seen = [False] * 26
            for j in range(first[i] + 1, last[i]):
                seen[ord(s[j]) - ord('a')] = True
            
            cnt = 0
            for k in range(26):
                if seen[k]:
                    cnt += 1
            
            ans += cnt
        
        return ans`,
          java: `class Solution {
    public int countPalindromicSubsequence(String s) {
        int ans = 0;
        int n = s.length();
        int[] first = new int[26];
        int[] last = new int[26];
        
        // Initialize arrays with -1
        for (int i = 0; i < 26; i++) {
            first[i] = -1;
            last[i] = -1;
        }
        
        // Track first and last occurrence of each character
        for (int i = 0; i < n; i++) {
            int ch = s.charAt(i) - 'a';
            if (first[ch] == -1) {
                first[ch] = i;
            }
            last[ch] = i;
        }
        
        // For each character, count unique characters between first and last occurrence
        for (int i = 0; i < 26; i++) {
            if (first[i] == -1 || first[i] == last[i]) {
                continue;
            }
            
            boolean[] seen = new boolean[26];
            for (int j = first[i] + 1; j < last[i]; j++) {
                seen[s.charAt(j) - 'a'] = true;
            }
            
            int cnt = 0;
            for (int k = 0; k < 26; k++) {
                if (seen[k]) {
                    cnt++;
                }
            }
            
            ans += cnt;
        }
        
        return ans;
    }
}`
        }}
      />

      <h2>Complexity Analysis</h2>
      <p>
        Talking about it's complexity,
      </p>
      <ul>
        <li>
          <strong>Time Complexity:</strong> The overall time complexity would be - O(n) {`{for iterating through string}`} + O(26) {`{for iterating through all characters}`} x O(26) {`{for iterating through all characters again to see if unique characters exist}`}
          <br />
          O(26 x 26) is constant so overall time complexity is <strong>O(n)</strong>!
        </li>
        <li>
          <strong>Space Complexity:</strong> O(1) since we are storing merely 26 values which 78 combined… Highly efficient!!
        </li>
      </ul>

      <div>
        <p>
          I hope you understood this solution!! :)
        </p>
      </div>
    </div>
  );
};

export default UniqueLength3Palindrome;

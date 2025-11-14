import React from 'react';

const ZigZagConversion = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <div className="post-content">
      <h2>Problem Statement</h2>
      <p>
        This is a Medium marked problem but I'd say it's rather a relatively easier problem.. We have been given an input string "s" and an integer "numRows".
      </p>
      <p>
        The question it asks is really easy – You are given an input string say "RISHIDSAEXPERT" and we have been given numRows which represents number of rows in which we can write this word in up and down manner.. Let's say numRows is 5, we will write the above string as –
      </p>

      <div className="example-box">
        <pre style={{ fontFamily: 'monospace', lineHeight: '1.8' }}>
{`R               E
I         A     X
S     S         P
H   D           E     T
I               R`}
        </pre>
      </div>

      <p>
        After performing this, we will return the string row-wise as – <strong>REIAXSSPHDETIR</strong>
      </p>

      <h2>Understanding the Problem</h2>
      <p>
        We will write the given string in up-down manner which fits in given numRows. At first it might be little confusing as to how can we even do this?? But if we think it logically it's really simple!! We really only have to do what the problem asks and just iterate through the string and store the elements row-wise… Now how exactly do we do that??
      </p>

      <p>
        The answer is really simple, all we need to know is the direction in which we are going and we only have to do two things –
      </p>

      <div className="algorithm-steps">
        <div className="step">
          <strong>1 →</strong> Increment the rowcount and add string at that index until we reach the maximum row limit i.e., numRows.
        </div>
        <div className="step">
          <strong>2 →</strong> Decrement the rowcount and add string at that index until we reach at the topmost row, i.e., 0th index of rows
        </div>
      </div>

      <p>
        We keep on repeating the above step multiple times until we iterate through the entire string!! Simple as that!!
      </p>

      <h2>Algorithm</h2>
      <p>Thus the only simple thing we have to do in this algorithm is:</p>

      <div className="example-box">
        <pre style={{ fontFamily: 'var(--font-mono)', lineHeight: '1.8', fontSize: '0.95rem' }}>
{`1. Declare currow to keep track of current row

2. Create a vector to store strings of size numRows

3. Create a boolean value to keep track of direction we are moving

4. Iterate through the string s:
   
   for each character in s:
       • Add the element at current index to current currow
       
       • Check if we have reached bottom/above depending on direction:
           if (currow == 0 OR currow == numRows-1):
               → Change the direction
       
       • Move to next row depending on direction:
           if going down:
               → Add 1 to currow
           else:
               → Subtract 1 from currow

5. Iterate through vector row-wise and add it to the result string 
   and return it!!`}
        </pre>
      </div>

      <p>
        This is the simple intuition behind this problem… Just DO AS YOU ARE ASKED!!
      </p>

      <p>
        I hope this simple explanation was helpful and it made the concept of this problem clear 😊
      </p>

      <h2>Code Implementation</h2>

      <MultiLanguageCode
        codes={{
          cpp: `class Solution {
public:
    string convert(string s, int numRows) {
        // If there's only one row or the string is too short for zigzag, return as is
        if (numRows == 1 || numRows >= s.size()) return s;

        // Create a vector of strings to represent each row in the zigzag pattern
        vector<string> rows(numRows);

        int currow = 0;       // Keeps track of the current row we are filling
        bool gd = false;      // Direction flag: true = going down, false = going up

        // Loop through each character in the input string
        for (char a : s) {
            rows[currow] += a;  // Append character to the correct row

            // If we reach the top or bottom, reverse the direction
            if (currow == 0 || currow == numRows -1)
                gd = !gd;

            // Move to the next row based on the current direction
            currow += gd ? 1 : -1;
        }

        // Combine all row strings to get the final result
        string res;
        for (string row : rows)
            res += row;

        return res;
    }
};`,
          python: `class Solution:
    def convert(self, s: str, numRows: int) -> str:
        # If there's only one row or the string is too short for zigzag, return as is
        if numRows == 1 or numRows >= len(s):
            return s
        
        # Create a list of strings to represent each row in the zigzag pattern
        rows = [''] * numRows
        
        currow = 0       # Keeps track of the current row we are filling
        gd = False       # Direction flag: True = going down, False = going up
        
        # Loop through each character in the input string
        for a in s:
            rows[currow] += a  # Append character to the correct row
            
            # If we reach the top or bottom, reverse the direction
            if currow == 0 or currow == numRows - 1:
                gd = not gd
            
            # Move to the next row based on the current direction
            currow += 1 if gd else -1
        
        # Combine all row strings to get the final result
        return ''.join(rows)`,
          java: `class Solution {
    public String convert(String s, int numRows) {
        // If there's only one row or the string is too short for zigzag, return as is
        if (numRows == 1 || numRows >= s.length()) {
            return s;
        }
        
        // Create an array of StringBuilders to represent each row in the zigzag pattern
        StringBuilder[] rows = new StringBuilder[numRows];
        for (int i = 0; i < numRows; i++) {
            rows[i] = new StringBuilder();
        }
        
        int currow = 0;       // Keeps track of the current row we are filling
        boolean gd = false;   // Direction flag: true = going down, false = going up
        
        // Loop through each character in the input string
        for (char a : s.toCharArray()) {
            rows[currow].append(a);  // Append character to the correct row
            
            // If we reach the top or bottom, reverse the direction
            if (currow == 0 || currow == numRows - 1) {
                gd = !gd;
            }
            
            // Move to the next row based on the current direction
            currow += gd ? 1 : -1;
        }
        
        // Combine all row strings to get the final result
        StringBuilder res = new StringBuilder();
        for (StringBuilder row : rows) {
            res.append(row);
        }
        
        return res.toString();
    }
}`
        }}
      />

      <h2>Complexity Analysis</h2>
      <ul>
        <li>
          <strong>Time Complexity:</strong> O(n) where n is the length of the string. We iterate through the string once.
        </li>
        <li>
          <strong>Space Complexity:</strong> O(n) for storing the rows and the result string.
        </li>
      </ul>
    </div>
  );
};

export default ZigZagConversion;

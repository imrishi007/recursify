import React from 'react';

const SudokuSolver = ({ CodeBlock, MultiLanguageCode }) => {
  return (
    <>
      <section>
        <h2>Problem Statement</h2>
        <div className="content-box">
          <p>
            Write a program to solve a Sudoku puzzle by filling the empty cells.
            A sudoku solution must satisfy all of the following rules:
          </p>
          <ul>
            <li>Each of the digits 1-9 must occur exactly once in each row.</li>
            <li>Each of the digits 1-9 must occur exactly once in each column.</li>
            <li>Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes.</li>
          </ul>
          <p>The <code>'.'</code> character indicates empty cells.</p>
        </div>
      </section>

      <section>
        <h2>Approach: Backtracking</h2>
        <p>
          This is a classic backtracking problem. We try placing digits 1-9 in empty cells,
          and backtrack if we reach an invalid state.
        </p>
      </section>

      <section>
        <h2>Solution</h2>
        <CodeBlock
          language="python"
          code={`class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        def is_valid(row, col, num):
            # Check row
            for j in range(9):
                if board[row][j] == num:
                    return False
            
            # Check column
            for i in range(9):
                if board[i][col] == num:
                    return False
            
            # Check 3x3 box
            box_row, box_col = 3 * (row // 3), 3 * (col // 3)
            for i in range(box_row, box_row + 3):
                for j in range(box_col, box_col + 3):
                    if board[i][j] == num:
                        return False
            
            return True
        
        def backtrack():
            for i in range(9):
                for j in range(9):
                    if board[i][j] == '.':
                        for num in '123456789':
                            if is_valid(i, j, num):
                                board[i][j] = num
                                
                                if backtrack():
                                    return True
                                
                                board[i][j] = '.'  # Backtrack
                        
                        return False
            return True
        
        backtrack()`}
        />
      </section>

      <section>
        <h2>Complexity Analysis</h2>
        <div className="content-box highlight">
          <p><strong>Time Complexity:</strong> O(9^m) where m is the number of empty cells</p>
          <p><strong>Space Complexity:</strong> O(1) if we don't count the recursion stack</p>
        </div>
      </section>

      <section>
        <h2>Key Insights</h2>
        <div className="content-box">
          <ul>
            <li>Use backtracking to try all possibilities</li>
            <li>Validate each placement against Sudoku rules</li>
            <li>Undo invalid placements and try next digit</li>
            <li>Return true when all cells are filled validly</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SudokuSolver;

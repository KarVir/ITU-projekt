/**
 * @file coordinates.js
 * 
 * @author Karolína Virágová (xvirag00)
 * 
 * @description A function that maps a numeric value to specific coordinates (row and column).
 *              The function returns the corresponding row and column for a given `value`. 
 *              If the value does not match any predefined values, it returns `{ row: null, col: null }`.
 *
 */

export const getCoordinatesFromValue = (value) => {
    if (value === 0) return { row: 4, col: 0 }
    if (value === 1) return { row: 4, col: 1 }
    if (value === 2) return { row: 4, col: 2 } 
    if (value === 3) return { row: 4, col:3 }
    if (value === 4) return { row: 4, col: 4 }
    if (value === 5) return { row: 3, col: 4 }
    if (value === 6) return { row: 2, col: 4 }
    if (value === 7) return { row: 1, col: 4 }
    if (value === 8) return { row: 0, col: 4 }
    if (value === 9) return { row: 0, col: 5 }
    if (value === 10) return { row: 0, col: 6 }
    if (value === 11) return { row: 1, col: 6 }
    if (value === 12) return { row: 2, col: 6 }
    if (value === 13) return { row: 3, col: 6 }
    if (value === 14) return { row: 4, col: 6 }
    if (value === 15) return { row: 4, col: 7 }
    if (value === 16) return { row: 4, col: 8 }
    if (value === 17) return { row: 4, col: 9 }
    if (value === 18) return { row: 4, col: 10 }
    if (value === 19) return { row: 5, col: 10 }
    if (value === 20) return { row: 6, col: 10 }
    if (value === 21) return { row: 6, col: 9 }
    if (value === 22) return { row: 6, col: 8 }
    if (value === 23) return { row: 6, col: 7 }
    if (value === 24) return { row: 6, col: 6 }
    if (value === 25) return { row: 7, col: 6 }
    if (value === 26) return { row: 8, col: 6 }
    if (value === 27) return { row: 9, col: 6 }
    if (value === 28) return { row: 10, col: 6 }
    if (value === 29) return { row: 10, col: 5 }
    if (value === 30) return { row: 10, col: 4 }
    if (value === 31) return { row: 9, col: 4 }
    if (value === 32) return { row: 8, col: 4 }
    if (value === 33) return { row: 7, col: 4 }
    if (value === 34) return { row: 6, col: 4 }
    if (value === 35) return { row: 6, col: 3 }
    if (value === 36) return { row: 6, col: 2 }
    if (value === 37) return { row: 6, col: 1 }
    if (value === 38) return { row: 6, col: 0 }
    if (value === 39) return { row: 5, col: 0 }


  return { row: null, col: null };
};


export const home = (value) => {
  if (value === 0) return { row: 0, col: 0 }   
  if (value === 1) return { row: 0, col: 1 }
  if (value === 2) return { row: 1, col: 0 }
  if (value === 3) return { row: 1, col: 1 }

  if (value === 40) return { row: 5, col: 1 }
  if (value === 41) return { row: 5, col: 2 }
  if (value === 42) return { row: 5, col: 3 }
  if (value === 43) return { row: 5, col: 4 }
  return { row: null, col: null };
}

export const home1 = (value) => {
  if (value === 0) return { row: 0, col: 9 }   
  if (value === 1) return { row: 1, col: 9 }
  if (value === 2) return { row: 0, col: 10 }
  if (value === 3) return { row: 1, col: 10 }

  if (value === 40) return { row: 1, col: 5 }
  if (value === 41) return { row: 2, col: 5 }
  if (value === 42) return { row: 3, col: 5 }
  if (value === 43) return { row: 4, col: 5 }
  return { row: null, col: null };

}

export const home2 = (value) => {
  if (value === 0) return { row: 9, col: 9 }   
  if (value === 1) return { row: 9, col: 10 }
  if (value === 2) return { row: 10, col: 9 }
  if (value === 3) return { row: 10, col: 10 }

  if (value === 40) return { row: 9, col: 5 }
  if (value === 41) return { row: 8, col: 5 }
  if (value === 42) return { row: 7, col: 5 }
  if (value === 43) return { row: 6, col: 5 }
  return { row: null, col: null };
}


export const home3 = (value) => {
  if (value === 0) return { row: 9, col: 0 }   
  if (value === 1) return { row: 9, col: 1 }
  if (value === 2) return { row: 10, col: 0 }
  if (value === 3) return { row: 10, col: 1 }
  
  if (value === 40) return { row: 9, col: 5 }
  if (value === 41) return { row: 8, col: 5 }
  if (value === 42) return { row: 7, col: 5 }
  if (value === 43) return { row: 6, col: 5 }
  return { row: null, col: null };
}
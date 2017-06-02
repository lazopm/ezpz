# Peitho 
[![npm version](https://badge.fury.io/js/peitho.svg)](https://badge.fury.io/js/peitho)
[![Build Status](https://travis-ci.org/lazopm/peitho.svg?branch=master)](https://travis-ci.org/lazopm/peitho)  
ezpz js inline styles :ok_hand:

### border
`border.bottom(2).color(red)`
```css
border-bottom-width: .25rem;
border-color: red;
```

`border.bottom(2).colorBottom('red')`
```css
border-bottom-width: .25rem;
border-bottom-style: solid;
border-bottom-color: red;
```

`border(2).vertical(null, null, red)`
```css
border-width: .25rem;
border-bottom-color: red;
border-top-color: red;
```

### borderRadius
`borderRadius(1)`
```css
border-radius: .125rem;
```

`borderRadius(1).topLeft(0)`
```css
border-radius: .125rem;
border-radius-top-left: 0;
```

### font
`font(1).italic.family('arial')`
```css
font-size: 1rem;
font-style: italic;
font-family: 'arial';
```

# ezpz
[![npm version](https://badge.fury.io/js/peitho.svg)](https://badge.fury.io/js/peitho)
[![Build Status](https://travis-ci.org/lazopm/peitho.svg?branch=master)](https://travis-ci.org/lazopm/peitho)
[![Coverage Status](https://coveralls.io/repos/github/lazopm/peitho/badge.svg?branch=master)](https://coveralls.io/github/lazopm/peitho?branch=master)  

ezpz js inline styles :ok_hand:

very early wip do not use this

## Roadmap
- [ ] implement a good way to deal with more complex properties like border 
- [ ] implement a way to override default value and unit computation
- [ ] create modules for all common css properties
- [ ] memoize and optimize computation functions
- [ ] expose api in a good way so people can create custom properties
- [ ] add hooks for middleware stuff like browser affixing, using with other libraries, etc

## Modules
all modules come with a default value scale, rem is the preferred unit 

if you pass in a number it will compute from the scale, if you pass in a string it will use it as-is:  
`padding(2)       => padding: .5rem`  
`padding('123px') => padding: 123px`

### padding
`padding(1)`
```
padding: .25rem;
```

`padding(1).vertical(0)`
```
padding-top: 0;
padding-bottom: 0;
padding-left: .25rem;
padding-right: .25rem;
```
### borderRadius
`borderRadius(1)`
```
border-radius: .125rem;
```

`borderRadius(1).topLeft(0)`
```
border-radius: .125rem;
border-radius-top-left: 0;
```

### font
`font(1).italic.family('arial')`
```
font-size: 1rem;
font-style: italic;
font-family: 'arial';
```

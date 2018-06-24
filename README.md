# ezpz
[![npm version](https://badge.fury.io/js/ezpz.svg)](https://badge.fury.io/js/ezpz)
[![Build Status](https://travis-ci.org/lazopm/ezpz.svg?branch=master)](https://travis-ci.org/lazopm/ezpz)
[![Coverage Status](https://coveralls.io/repos/github/lazopm/ezpz/badge.svg?branch=master)](https://coveralls.io/github/lazopm/ezpz?branch=master)  

ezpz js inline styles :ok_hand:
I started working on this to learn how to release an npm package.
I'm no longer developing this, as I realized this adds unnecessary complexity to small projects, and is not flexible enough for bigger ones.

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

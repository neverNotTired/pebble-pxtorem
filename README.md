# Pebble Pxtorem
`pebble-pxtorem`

A webpack loader for converting `px` to `rem` for your webpack

This is custom version / updated version of webpack-px-to-rem: fixes deprecation issues

## Table of Contents
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)

## Introduction
Pebble Pxtorem is a custom Webpack loader that converts pixel (px) units to rem units in your CSS.

## Installation

Install the package from the GitHub repository:

npm:  
```bash
npm install pebble-pxtorem
```  
git:  
```bash
npm install neverNotTired/pebble-pxtorem
```  

## Usage
```javascript
// in your webpack.config.js

module.exports={
   ...
    module:{
        // or loaders
        rules:[
            {
                test:/\.jsx$/,
                loader:'pebble-pxtorem',
                // the query is optional
                 query:{
                    // 1rem=npx default 10
                    basePx:10,
                    // only convert px greater than the given value default 0
                    // For the reason that tiny rem may be smaller than 1px and disappeare in tiny device
                    min:1,
                    // the rem value only has specific decimal places default 3
                    floatWidth:3
                }
                
            }
        ]
    }
    ...
  }
```

## Credit
Credit: this is an updated version / continued support of `https://www.npmjs.com/package/webpack-px-to-rem?activeTab=code`
# Gatsby-Strapi Portfolio Starter

## Overview

The project aims to create an easy-modified portfolio and it allows user can easy maintain their CV and project

## Framework

The project uses Gatsby, a React-based open source framework.
https://www.gatsbyjs.com/
The bakcend uses Strapi, an open-source headless CMS.
https://strapi.io/

## Setup Notes

1. Used Hello World Starter (all packages included)
2. All components ready to go (including imports)
3. main.css - all styles ready to go
4. No font plugin
5. React-icons
6. Limit amount of components - better overview
7. Use constants to avoid repetition
8. Favicon in Static
9. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

## Install

1. git clone the project
2. gatsbyPortfolio/`npm install`
3. gatsbyPortfolio/backend/`npm install`
4. gatsbyPortfolio/backend/ `npm run develop` (strapi need to run first)
5. gatsbyPortfolio/`npm start`

## strapi data structire

![](https://i.imgur.com/yTp8YhH.png)
![](https://i.imgur.com/hfzQD5A.png)

## edit your data

![](https://i.imgur.com/0lNZIjN.jpg)

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100

        // Older Plugin Version 0.0.12 (used in the starter)
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        // New Plugin Version 1+ (npm install gatsby-source-strapi@latest)
        // collectionTypes: [`jobs`, `projects`, `blogs`, ],

        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```

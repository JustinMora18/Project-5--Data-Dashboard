# Web Development Project 5 - **Data Dashboard - VIDEOGAMEDASH**

Submitted by: **Justin Mora**

![Videogamedash!](Dashboard-preview.png)

This web app: **is a simple dashboard that shows a list of video games fetched from an API. You can search games by name and filter them by platform, rating, and release year. The dashboard also shows some basic stats like total games, average rating, and how many games were released recently. Filters update the list instantly as you type or select options. It’s built with React using hooks like useEffect and useState and makes asynchronous calls to get the data.**

Time spent: **15** hours spent in total
Time spent: **10** hours spent in total


## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    -- Total count
    -- Average rating
    -- Count filtered by (year, platform, etc)
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter


  The following **required** functionality for **part 2** is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [x] The user can enter specific bounds for filter values

The following **optional** features for **part 2** are implemented:

- [x] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [x] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

**part 1**
<img src='Dashboard-Video-Walkthrough.gif' width='500px' title='Video Walkthrough' width='' alt='Video Walkthrough' />

**part 2**
<img src='Dashboard-Video-Walkthrough-part2.gif' width='500px' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with
[Kap](https://getkap.co/) for macOS

## Notes

Describe any challenges encountered while building the app.
- [x] Figuring out how to properly filter the data using multiple criteria at the same time.
- [x] Understanding the structure of the API response, especially nested objects like platforms.
- [x] Learning how to work with async/await inside useEffect for data fetching.

## License

    Copyright [2025] [Justin Mora]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
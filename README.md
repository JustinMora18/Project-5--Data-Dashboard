# Web Development Project 5 - **Data Dashboard - VIDEOGAMEDASH**

Submitted by: **Justin Mora**

![Videogamedash!](Dashboard-preview.png)

This web app: **is a simple dashboard that shows a list of video games fetched from an API. You can search games by name and filter them by platform, rating, and release year. The dashboard also shows some basic stats like total games, average rating, and how many games were released recently. Filters update the list instantly as you type or select options. It’s built with React using hooks like useEffect and useState and makes asynchronous calls to get the data.**

Time spent: **15** hours spent in total

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

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [x] The user can enter specific bounds for filter values

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='Dashboard-Video-Walkthrough.gif' width='500px' title='Video Walkthrough' width='' alt='Video Walkthrough' />

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
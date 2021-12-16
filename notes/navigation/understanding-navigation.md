# [Understanding Navigation](https://material.io/design/navigation/understanding-navigation.html)
1. > Navigation is the act of moving between screens of an app
2. organize the app's pages/screens in a hierarchy
3. navigation directions: lateral, forward or reverse
4. every page on the root level should be accessible through the primary navigation component

| component | level | destinations | device |
| --- | --- | --- | --- |
| drawer | top | 5+ | any |
| bottom tab | top | 3 - 5 | mobile |
| tabs | any | 2+ | any |

5. three types of forward navigation: downward the hierarchy, sequential flow or direct jump
6. forward navigation methods: content contains, buttons, links, in-app search
7. two types of reverse navigation: 
   + chronological: platform's back button/api
   + hierarchical: implement for all child screens
8. after a reverse navigation, restore previous state if possible, inform user if not
9. 

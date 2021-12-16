# [Component Behavior](https://material.io/design/layout/component-behavior.html)
1.
| term  | definition |
| ------------- | ------------- |
| above, below | y position |
| in front, behind | z position |
| left, right, center | x position |
| top, bottom | y position relative to edge |
| top, bottom | y position relative to edge |
| vertically centered | x and y position of an element centered relative to edge |
| sticky |  scrolls with ui and locks at a point |
| floating | fixed in front of scrolling content |
| leading edge | edge that content begins from |
| trailing edge | edge where content ends |
2. change the visual presentation or swap out the whole component to suit screen size or use case
3. components' sizes can be fixed or responsive; responsiveness may cause sizes to be too large or too small
4. define the position and alignment of internal elements when scaling
5. internal composition should accommodate the device
6. exchange components with similar functionality

   | component type  | mobile | tablet | desktop
   | -------- | --------- | --------- | --------- |
   | navigation | bottom tab | navigation rail | navigation drawer |
   | navigation drawer | modal | modal | permanent |
   | dialog | full-screen | modal | modal |
   | action | bottom sheet | menu | menu |
7. responsive patterns:
    + reveal: show additional ui when space is available
    + reposition: move ui components around

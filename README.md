# sheets-modal
I routinely use google sheets as a service to manage data models
The challenge is that when you have a model that contains a lot of columns and rows
and you move around in that model
you can easily lose you place and waste time trying to return to the start
to move on to the next record

you can go ahead and resize your columns
even group or hide them
and perhaps even colour code groupings

add in the option of adding a filter to the column headings

Wouldn't it be cool if you could select a row 
and bring up a form with the details for that row in a separate tab

The challenge with that would be that then you could easily
have a whole bunch of open tabs that could clutter your workspace

herein lies an alternate solution - a modal window

adding this appscript
(and authorizing it)
produces a new menu and menu option
'Custom Menu' \ 'Show Row Details'

Select any field in a row
and then select 'Show Row Details'
and a (modal) dialog box will appear 
which includes the fields in that record
prefaced by its respective column heading

Close the dialog box (using the 'x' at the top
and you can move to the next record
and repeat to your hearts desire
without ever cluttering your workspace

Notes:
======
This initial iteration expects that the first row is column headers
  If you have blank rows at the top, 
  the dialog box will still appear 
  but not have any headings preceding them
  an easy fix in the script
  if you care to adjust it yourself
It is provided without support or warranties, implied or otherwise

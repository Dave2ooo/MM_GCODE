# MM_GCODE

https://dave2ooo.github.io/MM_GCODE/

This little site edits your GCODE so that it can be used without an automatic filament changer.

It adds the command 
* M0 Change Filament ;
* M108 ;

after every **CP TOOLCHANGE LOAD**


and removes every "T0" and "T1".

**Don't forget to disable the filament sensor.**


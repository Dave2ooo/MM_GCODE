# MM_GCODE

https://dave2ooo.github.io/MM_GCODE/

This little site edits your GCODE so that it can be used without an automatic filament changer.

It adds the command 
* M0 Change Filament ;
* M108 ;

after every **CP TOOLCHANGE LOAD**


and removes every "T0" and "T1".

**Don't forget to disable the filament sensor.**


## PrusaSlicer settings

### Printer Settings

![Printer_Settings_General](https://user-images.githubusercontent.com/71500391/227709417-6e402787-df2d-42ba-92cf-1a52b5e91934.jpg)

![Printer_Settings_Custom_G-code](https://user-images.githubusercontent.com/71500391/227722368-93772a4b-0c29-43a8-af59-026e0be51057.jpg)

![Printer_Settings_Single_extruder_MM_setup](https://user-images.githubusercontent.com/71500391/227709421-16a973a2-9c48-459f-9f8e-43d224922f0c.jpg)

Values for Prusa i3 MK3

### Filament Settings

![Filament_Settings_Advanced](https://user-images.githubusercontent.com/71500391/227709424-c2be0685-fb07-46f0-8ebf-758213c5f8c9.jpg)

### Print Settings

![Print_Settings_Multiple_Extruders](https://user-images.githubusercontent.com/71500391/227709430-fad606d9-d1a2-4a37-895d-4b01bc57eac9.jpg)


### Wipe Tower

![Purging_volumes](https://user-images.githubusercontent.com/71500391/227714090-ff16dcd9-2dd5-49d7-bfa2-5c223859eb3b.png)

![Wipe_tower_Purging_volume](https://user-images.githubusercontent.com/71500391/227714049-1e14c109-95c7-41c8-bf69-9d80a2d3f3c5.jpg)

### Edit GCODE

![Webpage](https://user-images.githubusercontent.com/71500391/227726286-9732675c-60b7-490d-a9a4-08e6e4095395.png)



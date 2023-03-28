# How to print multi-color prints without automatic filament changer

This guide shows you the settings ans process for multi-color prints using PrusaSlicer 2.5.0.

This is only tested on a Prusa i3 MK3S+

## 1 Printer settings

Turn off the filament sensor on your printer.

Menu -> Settings -> Fil. sensor -> [Off]

*for Prusa i3 MK3*

## 2 PrusaSlicer settings

Select the **Print Settings**, **Filament** and **Printer** that you want the new profiles to be based on.

![Before](https://user-images.githubusercontent.com/71500391/227737885-51774879-1ed2-42fc-b0ca-dfc7285b26a1.jpg)

### 2.1 Printer Settings

Apply the following settings.

![Printer_Settings_General](https://user-images.githubusercontent.com/71500391/227709417-6e402787-df2d-42ba-92cf-1a52b5e91934.jpg)

![Printer_Settings_Custom_G-code](https://user-images.githubusercontent.com/71500391/227722368-93772a4b-0c29-43a8-af59-026e0be51057.jpg)

![Printer_Settings_Single_extruder_MM_setup](https://user-images.githubusercontent.com/71500391/227709421-16a973a2-9c48-459f-9f8e-43d224922f0c.jpg)

| Parameter    | Description |
|---------------------------|-----------------------------------------------------------------|
| Cooling tube position     | Distance between the nozzle and the center of the cooling tube  |
| Cooling tube length       | Length of the cooling tube                                      |
| Filament parking position | Distance between the nozzle and the extruder gear               |
| Extra loading distance    | Extra distance when loading                                     |

These are values for a Prusa i3 MK3S+.

Save the settings and give them a proper name e.g. * *"Prusa i3 - MM"* *.

### 2.2 Filament Settings

Set the number of **cooling moves** to one to save some time when changing filament.

![Filament_Settings_Advanced](https://user-images.githubusercontent.com/71500391/227709424-c2be0685-fb07-46f0-8ebf-758213c5f8c9.jpg)

Save the settings and give them a proper name e.g. * *"PLA - Standard - MM"* *.

### 2.3 Print Settings

Enable the **wipe tower**.

Set the **brim width** to zero (optionally).

![Print_Settings_Multiple_Extruders](https://user-images.githubusercontent.com/71500391/227709430-fad606d9-d1a2-4a37-895d-4b01bc57eac9.jpg)

Save the settings and give them a proper name e.g. *"0.3mm - MM"*.

### 2.4 Purging volumes

I like to decrease the **Purging volumes**.

![Purging_volumes](https://user-images.githubusercontent.com/71500391/227714090-ff16dcd9-2dd5-49d7-bfa2-5c223859eb3b.png)

![Wipe_tower_Purging_volume](https://user-images.githubusercontent.com/71500391/227714049-1e14c109-95c7-41c8-bf69-9d80a2d3f3c5.jpg)

## 3 Edit GCODE

Export G-code from PrusaSlicer.

Open the [GCODE Editor](https://dave2ooo.github.io/MM_GCODE/).

Follow the steps in the image.
1. Select your G-code file.
2. Load file into the textbox.
3. Apply changes to the G-code (adding pauses).
4. Download new G-code file.

![Webpage](https://user-images.githubusercontent.com/71500391/227739678-4bbb0aee-7574-4e4a-a0a1-d39bd8da92a9.png)

This adds a pause to every time a filament is loaded.

## 4 Print

Save the new G-code file to a SD card and print as usual.

When the print pauses:
1. Remve the loaded filament.
2. Insert the new filament.
3. Press the knob to load the filament and contimue printing.


## 5 Troubleshoot

If you have any troubles or comments feel free to create an [issue](https://github.com/Dave2ooo/MM_GCODE/issues).


# Artnet-Module
[Open stage control](http://openstagecontrol.ammd.net/) artnet module

This module converts OSC messages into artnet. 

#### Usage

##### send artnet
in O-S-C set the osc address to : 
`/artnet/3` to update channel 3 of universe 1 
`/artnet/1/3` to update channel 3 of universe 1 
`/artnet/2/4` to update channel 4 of universe 2

##### forward sACN
This module can forward sacn. So when it receives an OSC message from an application, sacn is updated

#### TODO
- dynamically open/close universes 
- ability to save/recall snapshots of a frame with intensity 
- define fineChannel
- ...
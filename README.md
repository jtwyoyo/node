Functional requirement 
The Gemini system operates at one of three separate levels: Observing, Maintenance, or Test.
The software imposes multiple access modes (Observing, Monitoring, Operation, Planning, Testing, and Administrative) on the Gemini system at each level, and a user can access the system through multiple modes at once.
The Gemini system is typically controlled through a computer program provided by the sequencer to maximize its efficiency with the Gemini telescope. 
Interactive operation is supported, but always through the Observatory Control System (OCS) 
There is a visual user interface to the OCS to allow for changes to the viewing program 
Astronomical data must be stored efficiently using available technology, with minimal disk access and data transfer times, as determined by detector type and intended use 
Interaction via automatic sequencer is a top priority requirement with initial implementation in "pass through" mode 
The primary mode for collecting scientific data is queue-based observing.
The observing program must be fully automated. 
The system must have a full telescope simulator for testing observing programs with virtual telescope environment. 
All control software must provide support for simulated use within the virtual telescope. 
System must have software to assist in object selection across observing programs to optimize observing efficiency, considering target positions, weather conditions and instrument configurations. 
The syntax of control flow commands is to be consistent across the system, whether accessing workstation software or IOC software. 
All subsystems must respond to a common set of commands to test operational status, inquiries as to version, perform self-tests, etc. 
All IOC subsystems must respond to additional common commands for such activities as
start, stop, initialize, reset parameters, etc. 
The system must have the ability to bridge between communication sections and isolate traffic in relevant sections only. 
Software modules for the Gemini 8m Telescope must have test specifications for normal operation, used for acceptance and online testing 
Regression tests should be a part of every Gemini 8m Telescopes software package. 
Subsystems must notify the user when faults occur. This notification must be specific as to origin and problem.
All communication must follow standard protocols with retry procedures for software redundancy.
The software for each Gemini subsystem must have a simulator and user interface module.
Each Gemini subsystem package must include modules for testing and diagnosing the subsystem.
Instrument control software must provide full access to all instrument functionality and different user interface modules present different parts of this functionality. Information for each interface module is in the Functional Requirements for each instrument.  
All Gemini software must be version labeled, both in source and binary form. The version information is to be retrievable from executing software via control commands.  
Gemini subsystem should be as self-contained and autonomous as possible, thereby decreasing the functional width of the interface to the rest of the Gemini system.  
No subsystem package should make any assumptions about the surrounding environment beyond that provided in the interface specifications.

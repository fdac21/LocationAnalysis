# Location Analysis

This proposed project will result in an end-to-end suite of software to discover location data of a user, upload the data to a remote database, perform analysis on the data, and visualize the data in a consumable and simple format. Such software would provide several benefits to a user:
- Observing exactly where a user spends the most time, both in their local area and in the context of the entire globe.
- Observing the furthest and shortest distance a user has traveled in a single day. These data points could even reveal information to the user such as how many miles they have added to their vehicle in a timeframe.
- Observing how often a user is on the move.
- Allowing a user to remember where they have been recently, in the event that they have forgotten, or they need to provide evidence of their travel history.

## Technology

To acquire the data, a mobile application will need to be installed on the user’s phone. This application will be written in Swift to target most iOS devices and it will use built-in functionality to obtain highly accurate GPS location readings.

The readings coming from the mobile device will be immediately transferred to a remote database operating in the AWS cloud. Specifically, the data will be stored in an DynamoDB database with interfacing abilities provided through a RESTful API designed with AWS Lambda Functions.

To analyze and visualize the data, a React frontend will be constructed in conjunction with open-source visualization libraries such as heatmap.js to represent which locations are most frequently visited for example.

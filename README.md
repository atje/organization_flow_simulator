# Organization Flow Simulator

[![Release and update app version](https://github.com/atje/organization_flow_simulator/actions/workflows/release.yml/badge.svg)](https://github.com/atje/organization_flow_simulator/actions/workflows/release.yml)
[![Deploy static content to Pages](https://github.com/atje/organization_flow_simulator/actions/workflows/deploy_to_github_pages.yml/badge.svg)](https://github.com/atje/organization_flow_simulator/actions/workflows/deploy_to_github_pages.yml)

Click [here for latest deployed version](https://atje.github.io/organization_flow_simulator/).

## Data model

```mermaid
flowchart LR
  subgraph Configuration
    Browser["Browser localStorage"]
    Saved["Saved configurations"]
    Config["Configuration<br/>name, version"]
    Params["Simulation parameters<br/>work item count, arrival interval,<br/>speed, variability"]
    Team["Team<br/>name, rework settings"]
    Stage["Stage<br/>name, duration, WIP limit"]

    Browser --> Saved --> Config
    Config --> Params
    Config --> Team
    Team -->|"ordered stages"| Stage
    Team -->|"directed handoffs"| Team
  end

  subgraph Runtime["Simulation runtime"]
    State["Simulation state<br/>running, paused, lastFrame<br/>nextArrival, 
    simulationTime<br/>nextWorkItemId<br/>workItems[], workItemRecords[]<br/>joinBuffers<br/>terminalTeamIds[], 
    leadTimes[]<br/>parameters, teams[]"]
    Record["Work item record<br/>start, processing time, lead time,<br/>completion, terminal outputs"]
    Execution["Team work item<br/>stage, status, timing"]
    Join["Join buffer<br/>arrivals and processing times"]
    Chart["Live metrics and chart"]

    State -->|"creates"| Record
    Record -->|"one execution per team/branch"| Execution
    Execution -->|"assigned to"| Team
    Execution -->|"advances through"| Stage
    Execution -->|"branches / hands off"| Join
    Join -->|"releases when upstream teams finish"| Execution
    Record -->|"aggregated into"| Chart
  end

  Config -. "loaded into" .-> State
  Params -. "drive" .-> State
```

Each work item record represents one item entering the simulation. It can have multiple team work items
while work proceeds along parallel branches; a join buffer holds downstream work
until all upstream teams have completed.

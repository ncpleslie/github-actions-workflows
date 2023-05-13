# GitHub Actions

This repo contains a collection of useful, reusable, GitHub Actions that can be used in your next project.

## Directory of Actions

- [Backend](./backend)
  - [.NET](./backend/.net)
  - [JavaScript/TypeScript](./backend/javascript/)
- [Frontend](./frontend)
- [Full Examples](./full-examples/)
  - [Azure Static Web Apps](./full-examples/azure-static-web-apps/)
- [Infrastructure](./infrastructure)
  - [Azure](./infrastructure/azure/)
- [Other](./other)

## TL:DR - Got any full working examples I can just copy-paste?

In the [full-examples](./full-examples/) directory you will find some complete examples that could be simply copy and pasted into your application.

## What is GitHub Actions?

GitHub Actions is a way of writing our automated pipelines to test, build, deploy our code. Among many other things. More can be found [here](https://docs.github.com/en/actions) along with the official documentation.

The official description is:

```TEXT
GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.
```

GitHub Actions are `yaml` files located in your applications `.github/workflows` directory.

They can be triggered by many things such as pushes to a branch, when a pull request is created, or when manually triggered. A full list of triggers can be found [here](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)

The structure of a GitHub Action workflow is as follows:

```YAML
name: Example # Name of the action
on: [trigger-here] # What triggers the workflow
jobs: # The tasks the workflow contains. What is actually run
    a-name: # The name of a job
    runs-on: # The operating system to run on
    steps: # Each step of the workflow
        - uses: actions/example@v1 # A workflow provided by someone else on the market place.
...
```

## How do I import an action here into my project

Create a directory in the root of your repo `.github/workflows` and copy any of the example actions from this repo.

Import an action into your main workflow with the following:

```YAML
...
jobs:
  example:
    name: Example
    uses: ./.github/workflows/example.yml # full path is required

  another-example:
    name: Another example
    uses: ./.github/workflows/another-example.yml
...
```

## Tips for effective workflows

### Ignore irrelevant paths

Adding `paths-ignore: - <some-path>` will prevent unnecessary runs of your actions. These paths could be `"**.md"` to exclude the README.md or RELEASENOTES.md, etc. Or "Documentation/\*\*" to ignore irrelevant files about the application. These can be anything.

```YAML
...
on:
  push:
    paths-ignore:
      - "Documentation/**"
      - "**.md"
...
```

### Prevent concurrent actions

Preventing concurrent actions can be a good way to reduce unnecessary runs between quick pushes to a branch, for example.

```YAML
...
concurrency:
  group: ${{ github.workflow }}-${{ github.head_ref || github.ref_name }}
  cancel-in-progress: true
...
```

## Contributor Guide

If you have an Action that is missing, please feel free to create an pull request adding that action, along with an updated README on how to use that action.

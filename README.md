# Themys - Player Access

## About this App

Themys Project is a TTRPG assistant focused on providing players with direct access to essential information about their characters, campaigns, and — especially — access to the Dungeons & Dragons SRD 5.2 for reference. For this course, the scope of this project will comprise only the basic steps needed to create and manage player characters.

Project developed for exam activities at UTFPR - Guarapuava, Internet Systems program.

## Development environment and tools

This repository contains the frontend only and will communicate with a backend developed in a separate repository. This project is being developed with:

- [Expo 51](https://expo.dev/);
- [Nativewind](https://www.nativewind.dev/).

## Core Functionalities (Priority for Implementation)

- [ ] Character Creation: A series of screens that will facilitate the process of creating a Dungeons & Dragons character;
- [ ] Character Dashboard: Displays basic character information, including stats, conditions, and skills;
- [ ] Journal: Provides a place for players to write their storyline summaries, major plot points, and notes;
- [ ] Inventory: Allows access to a simple inventory list where players can manually add items;
- [ ] Keywords: Highlights certain words that, when interacted with, will open a tooltip to help players understand their meaning and gameplay mechanics;
- [ ] Character Profile Picture: Enables players to change their character’s profile picture;
- [ ] Add Campaign: Provides a way for players to group their characters into campaigns.

This checklist will be updated at each checkpoint to reflect completed functionalities and provide a clear development timeline for the app. If time allows, this checklist will also be updated with new functionalities.

## Interactive Prototype

You can access the full prototype at the link bellow. Note that this prototype also includes the Dungeon Master's view, which will _not_ be implemented in this project.

[Figma Prototype Presentation](https://www.figma.com/proto/SrQJozaia8PIFqpcG9C8YB/Themis?node-id=978-3057&node-type=frame&t=RAgKJZajLkuNOlV6-0&scaling=scale-down&content-scaling=fixed&page-id=978%3A2765&starting-point-node-id=978%3A3057)
[Project's Screens](https://www.figma.com/design/SrQJozaia8PIFqpcG9C8YB/Themis?node-id=978-2765&t=meL8K1telyqV6vQS-1)

## Database Diagram

Themys will use Postgres as its main database. Bellow this message, you will find it's database diagram hosted on dbdiagram.io. Again, note that this diagram also includes the complete API planned for this application, which will _not_ be implemented in this project.

[Diagram on DB Diagram](https://dbdiagram.io/d/themys_tcc-66eb48f5a0828f8aa64e39e9)

## Sprint Planning

This section outlines the sprint schedule for the development this app. Each sprint is planned to align with the checkpoints defined in the course.
Later on, those sprints will be replaced by YouTrack, an agile project management tool from JetBrains, to better organize and update each sprint.

| **Sprint** | **Functionality**                           | **Estimated Duration** | **Due Date**     |
|------------|---------------------------------------------|------------------------|------------------|
| Sprint 1   | Add Campaign / Character Creation           | 2 weeks                 | 11 Nov 2024      |
| Sprint 2   | Character Dashboard / Journal / Inventory   | 2 weeks                 | 25 Nov 2024      |
| Sprint 3   | Character Profile Picture                   | 1 week                  | 02 Dec 2025      |
| Sprint 4   | Keywords                                    | 2 weeks                 | 16 Dec 2025      |
| Sprint 5   | Backend Integration                         | 1 week                  | 23 Dec 2025      |
| Sprint 6   | Final Adjustments, testing and release      | 3 weeks                 | 13 Jan 2026      |

## Getting Started

### Clone Repository

```sh
git clone git@github.com:adnir-andrade/pdm2_course_project.git
cd pmd2_course_project
```

### Install Dependencies

```sh
yarn install
```

### Start the Project
```sh
npx expo start
```
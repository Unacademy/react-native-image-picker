# react-native-image-picker

> :sunrise_over_mountains: A React Native module that allows you to use native UI to select media from the device library or directly from the camera.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Repository Structure](#repository-structure)
4. [Key Components](#key-components)
5. [Setup & Installation](#setup--installation)
6. [Running the Application](#running-the-application)
7. [Infrastructure & CI/CD](#infrastructure--cicd)
8. [Contributing](#contributing)

---

## Overview

**react-native-image-picker** is part of the [Unacademy](https://github.com/unacademy) engineering ecosystem.

:sunrise_over_mountains: A React Native module that allows you to use native UI to select media from the device library or directly from the camera.

**Topics / Tags:** `approvers-1`

---

## Tech Stack

| Attribute | Value |
|-----------|-------|
| **Primary Language** | Java |
| **Framework / Platform** | Java |
| **Package Manager** | Gradle |

### Dependencies

**Dev Dependencies:**
- `flow-bin`
- `husky`
- `lint-staged`
- `prettier`


---

## Repository Structure

```
react-native-image-picker/
├── .circleci
├── .flowconfig
├── .github/
│   ├── ISSUE_TEMPLATE.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── stale.yml
├── .gitignore
├── .npmignore
├── .prettierrc
├── .watchmanconfig
├── LICENSE.md
├── README.md
├── android/
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
├── docs/
│   ├── Install.md
│   ├── Reference.md
├── example/
│   ├── .babelrc
│   ├── .buckconfig
│   ├── .flowconfig
│   ├── .gitattributes
│   ├── .gitignore
├── images/
│   ├── android-image.png
│   ├── ios-image.png
├── index.d.ts
├── index.js
├── index.js.flow
├── ios/
│   ├── ImagePickerManager.h
│   ├── ImagePickerManager.m
│   ├── RNImagePicker.xcodeproj
... (truncated)
```

---

## Key Components

Below is an analysis of the key files and modules:

| File / Directory | Purpose |
|-----------------|---------|
| `LICENSE.md` | Source file |
| `README.md` | Source file |
| `android/build.gradle` | Source file |
| `android/gradle.properties` | Source file |
| `android/gradle/wrapper/gradle-wrapper.jar` | Source file |
| `android/gradle/wrapper/gradle-wrapper.properties` | Source file |
| `android/gradlew` | Source file |
| `android/gradlew.bat` | Source file |
| `android/src/main/AndroidManifest.xml` | Source file |
| `android/src/main/java/com/imagepicker/FileProvider.java` | Source file |
| `android/src/main/java/com/imagepicker/ImagePickerModule.java` | Source file |

> **Note:** Only the first 20 non-trivial files are listed. See the repository tree above for the complete structure.

---

## Setup & Installation

### Prerequisites

- Git (`git --version`)
- Java runtime installed



### Steps

```bash
git clone git@github.com:unacademy/react-native-image-picker.git
cd react-native-image-picker
# Open in Android Studio or IntelliJ IDEA
# Sync Gradle dependencies
```


---

## Running the Application

_Refer to the project's build system or CI configuration._

---

## Infrastructure & CI/CD

- Test suite present — run tests before submitting PRs

---

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Commit your changes: `git commit -m "feat: describe your change"`
3. Push and open a PR targeting `master`
4. Ensure all CI checks pass before requesting review

---

## Original README (Excerpt)

> # React Native Image Picker

[![npm version](https://badge.fury.io/js/react-native-image-picker.svg)](https://badge.fury.io/js/react-native-image-picker)
[![npm](https://img.shields.io/npm/dt/react-native-image-picker.svg)](https://npmcharts.com/compare/react-native-image-picker?minimal=true)
![MIT](https://img.shields.io/dub/l/vibe-d.svg)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg)
[![Gitter chat](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/react-native-image-picker/Lobby)

A React Native module that allows you to use na

---

*This README was auto-generated on 2026-09-14 by the Unacademy repo-summarizer tool.*
*For corrections or additions, edit this file directly or open an issue.*

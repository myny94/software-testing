# software-testing
Project repository for the course Software Testing (COMP.SE.200-2020-2021-1) at Tampere University

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

## Run test suites

```bash
# run only unit test cases
npm run test:unit

# run only integration test cases
npm run test:integration

# run both test cases
npm test
```

## Generate test reports

```bash
# generate only unit test report
npm run report:unit

# generate only integration test report
npm run report:integration

# generate both test reports
npm run report
```

The reports can be found in the root directory.
  - unit-test-report.html
  - integration-test-report.html

## Test coveralls

```bash
npm run coveralls
```

# coverage badge
[![Coverage Status](https://coveralls.io/repos/github/myny94/software-testing/badge.svg)](https://coveralls.io/github/myny94/software-testing)
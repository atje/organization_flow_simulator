## [1.4.0-beta.1](https://github.com/atje/organization_flow_simulator/compare/v1.3.1-beta.1...v1.4.0-beta.1) (2026-11-09)

### Features

* Team Editor hidden when simulation is started ([9cdc077](https://github.com/atje/organization_flow_simulator/commit/9cdc077d3478758d38be0db5bed26cb94e99a04d))

### Refactoring

* panel visibility simplified ([c865ac6](https://github.com/atje/organization_flow_simulator/commit/c865ac6b08bdb62910b625cc21519d8bb912bb8d))

## [1.3.1-beta.1](https://github.com/atje/organization_flow_simulator/compare/v1.3.0...v1.3.1-beta.1) (2026-11-09)

### Bug fixes

* App version number now fetched from release information ([ff94d5b](https://github.com/atje/organization_flow_simulator/commit/ff94d5bc45e4508c7f94092af50a8dd859bea9d5))
* correction of .releaserc file naming ([f52c5e7](https://github.com/atje/organization_flow_simulator/commit/f52c5e78b5500b719a103584c5d2426bc3ff938a))
* removed commented code ([ae25bf6](https://github.com/atje/organization_flow_simulator/commit/ae25bf67de5a02ccaf639e8631157074e0138c9c))
* testing version update ([093345a](https://github.com/atje/organization_flow_simulator/commit/093345abce785040a3322cf1789e74e4a87b3995))

### Style

* Chart styling changed for legend and title ([1234383](https://github.com/atje/organization_flow_simulator/commit/12343836752dc406ae6b39aeb098ab68cf33e8f5))
* version information styling changed ([173609d](https://github.com/atje/organization_flow_simulator/commit/173609d9c3f2d5654d4c3eaae0ef85fe58c51b1d))

### Refactoring

* chart rendering moved into separate file. A few unit tests added for charts. ([9d2f2a6](https://github.com/atje/organization_flow_simulator/commit/9d2f2a6071e4cf72802218eb8effc44e9514380f))
* Moved About text into a separate html file about.html ([7e11f46](https://github.com/atje/organization_flow_simulator/commit/7e11f46b68e71212475c85a029ca780c7f1681bf))
* removed NPMKEY line in main.yml to get rid of warning. It's not used anyway since the package is not to be published... ([bbcbc04](https://github.com/atje/organization_flow_simulator/commit/bbcbc04d287c21bfa7957c5da292516b2ef0d025))
* replaced code duplication when rendering team stage config fields in the UI ([7e68532](https://github.com/atje/organization_flow_simulator/commit/7e685328611dab1fd53254a9d64b9df8c0b553ec))

### Chores

* **release:** 1.0.2-beta.1 [skip ci] ([253b90f](https://github.com/atje/organization_flow_simulator/commit/253b90f7d518efb196276e8f5423862db9830804))
* **release:** 1.0.2-beta.2 [skip ci] ([dbd8c4f](https://github.com/atje/organization_flow_simulator/commit/dbd8c4fca5edfcf496277a50b17c4399e232c400))
* **release:** 1.2.1-beta.1 ([9d7689b](https://github.com/atje/organization_flow_simulator/commit/9d7689b92183f6feac7434c88ff915195c2c0125))

### Continuous Integration changes

* added Git ignore of Vitest coverage files ([e5e5d11](https://github.com/atje/organization_flow_simulator/commit/e5e5d11f4a66b427a4250347aeb2b07d221c9486))
* another g oat fixing the main.yml syntax ([8020e7f](https://github.com/atje/organization_flow_simulator/commit/8020e7f0f1526ba767a976054d2d5b5454617843))
* changed version handling to avoid reading package.json. Instead, semantic-release plugin updates appVersion const in app.js directly ([03a6e5b](https://github.com/atje/organization_flow_simulator/commit/03a6e5b876e8bb7237bf863bc6b847c187066e94))
* deploy trigger change ([0a8779b](https://github.com/atje/organization_flow_simulator/commit/0a8779b8ac1caba871e4d9e521dc8a2a1d02d0a7))
* fixed main.yml syntax ([87edc35](https://github.com/atje/organization_flow_simulator/commit/87edc359125ccc5d0e87174ac380a63fabdce7e4))
* Yet another attempt to get version update working ([04fad9f](https://github.com/atje/organization_flow_simulator/commit/04fad9fb7af84fce420239c55f41a13e17d6774e))

## [1.3.0](https://github.com/atje/organization_flow_simulator/compare/v1.2.0...v1.3.0) (2026-11-09)

### Features

* chart removed ([0349807](https://github.com/atje/organization_flow_simulator/commit/03498078def523055405794d6856299582e97fb5))

### Testing

* increase chart.js coverage ([f00b314](https://github.com/atje/organization_flow_simulator/commit/f00b31443e93440a48752e68d558067ec104c155))

### Continuous Integration changes

* change semantic-release not to trigger release update for chore, ci, and other changes ([a88135d](https://github.com/atje/organization_flow_simulator/commit/a88135d376f4a30acede8fcab8f26515a33e6088))
* release deployment trigger changed to release ([895104b](https://github.com/atje/organization_flow_simulator/commit/895104b9fa8db7a630f4aec0e1dac12b271e70c7))

## [1.2.0](https://github.com/atje/organization_flow_simulator/compare/v1.1.20...v1.2.0) (2026-11-09)

### Features

* Work in process item chart data added ([fdcc3f9](https://github.com/atje/organization_flow_simulator/commit/fdcc3f96fcc5c2ae3183c0c0337ae67b96766e4c))

## [1.1.20](https://github.com/atje/organization_flow_simulator/compare/v1.1.19...v1.1.20) (2026-11-09)

### Refactoring

*  Completed work items chart data calculation refactor ([ad02e25](https://github.com/atje/organization_flow_simulator/commit/ad02e259977942732a051ba8e47c691a6fcd1ef1))

## [1.1.19](https://github.com/atje/organization_flow_simulator/compare/v1.1.18...v1.1.19) (2026-11-08)

### Chores

* **deps:** update mcr.microsoft.com/devcontainers/javascript-node docker tag to v26 ([#20](https://github.com/atje/organization_flow_simulator/issues/20)) ([3f715cc](https://github.com/atje/organization_flow_simulator/commit/3f715cc01f9e7e7a460bf5812772a0136d510807))

## [1.1.18](https://github.com/atje/organization_flow_simulator/compare/v1.1.17...v1.1.18) (2026-11-08)

### Chores

* **deps:** update dependency semantic-release to v25 ([#19](https://github.com/atje/organization_flow_simulator/issues/19)) ([078e8ee](https://github.com/atje/organization_flow_simulator/commit/078e8eeb02ce3bb8e175e475d16e3f5717727d8b))

## [1.1.17](https://github.com/atje/organization_flow_simulator/compare/v1.1.16...v1.1.17) (2026-11-07)

### Continuous Integration changes

* lint JSON and YAML files in PRs ([#18](https://github.com/atje/organization_flow_simulator/issues/18)) ([bf9b5ee](https://github.com/atje/organization_flow_simulator/commit/bf9b5eefeb176862ad23887b92c442e8e0d9a824))

## [1.1.16](https://github.com/atje/organization_flow_simulator/compare/v1.1.15...v1.1.16) (2026-11-07)

### Continuous Integration changes

* lint Markdown files in PRs ([#17](https://github.com/atje/organization_flow_simulator/issues/17)) ([cafd479](https://github.com/atje/organization_flow_simulator/commit/cafd4798468cab2a0f08a0f7cb0b894118f5aa9d))

## [1.1.15](https://github.com/atje/organization_flow_simulator/compare/v1.1.14...v1.1.15) (2026-11-07)

### Chores

* **deps:** update dependency node to v26 ([#16](https://github.com/atje/organization_flow_simulator/issues/16)) ([18e9627](https://github.com/atje/organization_flow_simulator/commit/18e9627325b523ec08d640687af84c1b5f2db823))

## [1.1.14](https://github.com/atje/organization_flow_simulator/compare/v1.1.13...v1.1.14) (2026-11-07)

### Continuous Integration changes

* change page deployment trigger to only run after successful release of new version on main branch ([d0c47bf](https://github.com/atje/organization_flow_simulator/commit/d0c47bf7bc31e3d09ee0921006912537098ec4ae))

## [1.1.13](https://github.com/atje/organization_flow_simulator/compare/v1.1.12...v1.1.13) (2026-11-07)

### Chores

* **deps:** update dependency conventional-changelog-conventionalcommits to v10 ([#15](https://github.com/atje/organization_flow_simulator/issues/15)) ([137910a](https://github.com/atje/organization_flow_simulator/commit/137910a7415b869036579a47516578b3f291f08b))
* downgrade of conventionalcommits ([4ccf777](https://github.com/atje/organization_flow_simulator/commit/4ccf77732c417f3aed7400e5c24a4d0755f26c76))

### Continuous Integration changes

* renovate config changes ([d1b8908](https://github.com/atje/organization_flow_simulator/commit/d1b89085193bd6b53eb40f63296d1455eb6fc001))

## [1.1.12](https://github.com/atje/organization_flow_simulator/compare/v1.1.11...v1.1.12) (2026-11-06)

### Chores

* **deps:** update actions/upload-pages-artifact action to v5 ([#14](https://github.com/atje/organization_flow_simulator/issues/14)) ([337e5dc](https://github.com/atje/organization_flow_simulator/commit/337e5dcc44826ba8065387f0fcf7d15eba0d167b))

## [1.1.11](https://github.com/atje/organization_flow_simulator/compare/v1.1.10...v1.1.11) (2026-11-06)

### Chores

* **deps:** update actions/setup-node action to v7 ([#13](https://github.com/atje/organization_flow_simulator/issues/13)) ([d046da3](https://github.com/atje/organization_flow_simulator/commit/d046da3e369eade747f2f3cc0f0ef5ee29ee7bd2))

## [1.1.10](https://github.com/atje/organization_flow_simulator/compare/v1.1.9...v1.1.10) (2026-11-06)

### Bug fixes

* conventional-changelog install, plus yml file for nodee update removed ([9cf6339](https://github.com/atje/organization_flow_simulator/commit/9cf6339be69340a5ab0bd55b624e56d67bc5807c))

### Chores

* **deps:** update actions/checkout action to v7 ([#10](https://github.com/atje/organization_flow_simulator/issues/10)) ([8d07e62](https://github.com/atje/organization_flow_simulator/commit/8d07e62e9edc22c4d4831370bc5684db3eca1c74))
* **deps:** update actions/configure-pages action to v6 ([#11](https://github.com/atje/organization_flow_simulator/issues/11)) ([5e923ba](https://github.com/atje/organization_flow_simulator/commit/5e923ba3b9da666f714212fdf7891ba86aebb04d))
* forced version os semantic-release changelog-conventionalcommits ([3ccd287](https://github.com/atje/organization_flow_simulator/commit/3ccd28728224581bb66f251dc8fe402b76ce5795))
* package version upde in package-lock.json ([06f41fd](https://github.com/atje/organization_flow_simulator/commit/06f41fd63605416cfe8c0f23fec6a5e178fc3ce3))
* update conventional-changelog-writer version ([ad3d928](https://github.com/atje/organization_flow_simulator/commit/ad3d928bc7f0601ccfec9d1333e75324ddac6955))
* update deps (2026-11-04) ([#7](https://github.com/atje/organization_flow_simulator/issues/7)) ([c75d8fe](https://github.com/atje/organization_flow_simulator/commit/c75d8fe15325b0dae4ac6fc975383312834f39dd))
* update deps (2026-11-04) ([#8](https://github.com/atje/organization_flow_simulator/issues/8)) ([c54dec7](https://github.com/atje/organization_flow_simulator/commit/c54dec70e6b0d79de265020c8b97125243d3fbca))
* update deps (2026-11-05) ([#9](https://github.com/atje/organization_flow_simulator/issues/9)) ([1e37dc4](https://github.com/atje/organization_flow_simulator/commit/1e37dc4935b54ecce72b9d7faaa8c3a4d8444e90))

### Continuous Integration changes

* renovate config addition ([b25fec9](https://github.com/atje/organization_flow_simulator/commit/b25fec93d07099fb60ca51ece7cfcd9c5c1bf9aa))

## <small>1.1.9 (2026-11-04)</small>

* Merge branch 'main' of https://github.com/atje/organization_flow_simulator ([a429702](https://github.com/atje/organization_flow_simulator/commit/a429702))
* ci: fixed action for updating node deps ([4bce7bb](https://github.com/atje/organization_flow_simulator/commit/4bce7bb))

## <small>1.1.8 (2026-11-04)</small>

* ci:  file .nvmrc added + package npm-check-updates ([546bde6](https://github.com/atje/organization_flow_simulator/commit/546bde6))

## <small>1.1.7 (2026-11-03)</small>

* chore: allow manual update of node deps ([99b76c7](https://github.com/atje/organization_flow_simulator/commit/99b76c7))

## <small>1.1.6 (2026-11-03)</small>

* Merge branch 'main' of https://github.com/atje/organization_flow_simulator ([9d19f44](https://github.com/atje/organization_flow_simulator/commit/9d19f44))
* ci: add github action to update node dependencies ([5fde0f3](https://github.com/atje/organization_flow_simulator/commit/5fde0f3))

## <small>1.1.5 (2026-11-03)</small>

* docs(no-release): Update README with deployment details ([956831a](https://github.com/atje/organization_flow_simulator/commit/956831a))

## <small>1.1.4 (2026-11-03)</small>

* Merge branch 'main' of https://github.com/atje/organization_flow_simulator ([2a0ff8b](https://github.com/atje/organization_flow_simulator/commit/2a0ff8b))
* ci: page deployment made dependent on successful release update ([d5ea35f](https://github.com/atje/organization_flow_simulator/commit/d5ea35f))

## <small>1.1.3 (2026-11-03)</small>

* chore: commit format change to conventional ([57f640e](https://github.com/atje/organization_flow_simulator/commit/57f640e))

## [1.1.2](https://github.com/atje/organization_flow_simulator/compare/v1.1.1...v1.1.2) (2026-11-03)

## [1.1.1](https://github.com/atje/organization_flow_simulator/compare/v1.1.0...v1.1.1) (2026-11-03)

# [1.1.0](https://github.com/atje/organization_flow_simulator/compare/v1.0.1...v1.1.0) (2026-11-03)


### Features

* Simulation button change, and feature chart addition ([fe3a2f1](https://github.com/atje/organization_flow_simulator/commit/fe3a2f1906d09e5aab846d0a9548d57193ffc79c))

## [1.0.2-beta.2](https://github.com/atje/organization_flow_simulator/compare/v1.0.2-beta.1...v1.0.2-beta.2) (2026-10-15)


### Bug Fixes

* correction of .releaserc file naming ([f52c5e7](https://github.com/atje/organization_flow_simulator/commit/f52c5e78b5500b719a103584c5d2426bc3ff938a))
* testing version update ([093345a](https://github.com/atje/organization_flow_simulator/commit/093345abce785040a3322cf1789e74e4a87b3995))

## [1.0.2-beta.1](https://github.com/atje/organization_flow_simulator/compare/v1.0.1...v1.0.2-beta.1) (2026-10-14)


### Bug Fixes

* removed commented code ([ae25bf6](https://github.com/atje/organization_flow_simulator/commit/ae25bf67de5a02ccaf639e8631157074e0138c9c))

## [1.0.1](https://github.com/atje/organization_flow_simulator/compare/v1.0.0...v1.0.1) (2026-10-14)


### Bug Fixes

* Changed github repo name ([541f365](https://github.com/atje/organization_flow_simulator/commit/541f365681d14164e9ca3d7d0f33bdaccc1c0316))

# 1.0.0 (2026-10-14)


### Bug Fixes

* added semantic-release plugins in Github action ([8644e00](https://github.com/atje/organization_flow_simulator/commit/8644e00eed95033f89b6c21262e89c6867a5ed9b))
* branch name fix in main.yml ([324d51f](https://github.com/atje/organization_flow_simulator/commit/324d51fa3246ffc30ce79a767c8fe5b2ba0adc74))
* Comment change in main.yml to trigger runner ([d1d2013](https://github.com/atje/organization_flow_simulator/commit/d1d2013494bf6ad79ade29ab0e0f5e4f655b58e0))
* disabled npm release in .releaserc ([b16200c](https://github.com/atje/organization_flow_simulator/commit/b16200c8fdd54d79dcc1ca705edd451c52d430cb))
* Github action changes to fix runner problem ([13f629f](https://github.com/atje/organization_flow_simulator/commit/13f629fa6d395b90b9797e0e6273f9561921540b))
* main.yml change ([e56538e](https://github.com/atje/organization_flow_simulator/commit/e56538e55d0d30db35c784cdea451dc60a33061c))
* node and semantic-version bumped to 24 ([227ff5b](https://github.com/atje/organization_flow_simulator/commit/227ff5b52f122a28961945423e5b45865fe64cec))
* updated app version in package.json ([38959ea](https://github.com/atje/organization_flow_simulator/commit/38959ea3a97e857c9fb24ab9c4b442dfb08913df))
* updated semantic-release cfg ([8e00b44](https://github.com/atje/organization_flow_simulator/commit/8e00b4400268f02ae30a28d42d4084d280e77f97))

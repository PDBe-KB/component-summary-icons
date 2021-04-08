PDBe-KB Summary Icons Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-summary-icons.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-summary-icons)
[![codecov](https://codecov.io/gh/PDBe-KB/component-summary-icons/branch/main/graph/badge.svg?token=ZE5F4YID7I)](https://codecov.io/gh/PDBe-KB/component-summary-icons)
[![Maintainability](https://api.codeclimate.com/v1/badges/97aa515784475bfac9e1/maintainability)](https://codeclimate.com/github/PDBe-KB/component-summary-icons/maintainability)

This repository is for the codebase of a lightweight Angular v7 web component that displays icons and item counts for data such as the number of available PDB entries or the number of associated publications.

This web component is used on PDBe-KB Aggregated Views of Proteins to display such summary information.

**Important:** This web component depends on the "superpose" and "download" components which are available from [https://github.com/PDBe-KB/component-superpose](https://github.com/PDBe-KB/component-superpose) and [https://github.com/PDBe-KB/component-download](https://github.com/PDBe-KB/component-download) respectively.

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-summary-icons/main/pdbe-kb-summary-icons.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-summary-icons.git
cd component-summary-icons
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

This web component embeds two other PDBe web components: [https://github.com/PDBe-KB/component-superpose](https://github.com/PDBe-KB/component-superpose) and [https://github.com/PDBe-KB/component-download](https://github.com/PDBe-KB/component-download)

In order to use all the features of this web component, retrieve the superpose and download components and replace the contents of the `src/app/superpose` and `src/app/download` folders with those files.

The main template (i.e. `index.html` by default) should also have the following CSS imports:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular v7 apps.

#### 1.) Import the component:

Import the component in `app.module.ts` by default.
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SummaryIconComponent } from './summary-icon/summary-icon.component';
import { SuperposeComponent } from './superpose/superpose.component';
import { DownloadComponent } from './download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryIconComponent,
    SuperposeComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

#### 2.) Add the component to a template:
```angular2html
<app-summary-icon [data]="summaryIcons" [downloadModalData]="downloadModalData"
                  [accession]="accession" [hasSuperposition]="hasSuperpositionData" [parentAccession]="parentAccession"></app-summary-icon>
```

Data such as "downloadModalData", "accession", "hasSuperpositionData" and "parentAccession" are required by the dependency web components.

The data model for the input data is described in 
`src/app/summary-icon/summary-icon.models.ts`

##### Example input data

```angular2html
[
      {
        label: 'Summary',
        icon_class: 'icon-generic',
        icon_data_icon: 'H',
        section_div_id: 'summary',
        counts: null,
        description: ''
      }
]
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-summary-icons/tags).

## Authors

* **Mihaly Varadi** - *Initial Implementation* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-summary-icons/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.

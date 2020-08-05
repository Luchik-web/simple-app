# SimpleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


------------------------------------------------------------------------------------------------------------------------

# DEV ENVIROMENT SETTINGS

## VSCode

### VSCode General workspace configuration

To Manage Settings:
1. Go to `Code / Preferences / Settings`
2. Open settings as file (icon on top right corner)
3. Manage your configuration. Json format configuration can be opened by clicking the icon `Open Settings (JSON)` icon on top right corner

Workspace configuration:

```
{
    "editor.wordWrapColumn": 140,
    // When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.
    "editor.detectIndentation": false,
    // Insert spaces when pressing Tab. This setting is overridden based on the file contents when `editor.detectIndentation` is on.
    "editor.insertSpaces": true,
    // The number of spaces a tab is equal to. This setting is overridden based on the file contents when `editor.detectIndentation` is on.
    "editor.tabSize": 4,
    "editor.wordWrap": "on",
    "files.trimTrailingWhitespace": true,
    // Quote style
    "javascript.preferences.quoteStyle": "single",
    // Quote style
    "typescript.preferences.quoteStyle": "single",
    // Type Scrip formatter
    "tsfmt.configPath": "./tsfmt.json",
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features",
        "editor.formatOnSave": true,
        "editor.formatOnPaste": true
    },
    // Configures if the built-in HTML language suggests HTML5 tags, properties and values.
    "html.suggest.html5": true
}
```

### VSCode Plugins: TSLint (required)

TSLint plugin `tslint` is requred for fronten developers.

Install plugin and add following lines to your config
```
    // path to tslint config
    "tslint.configFile": "./tslint.json"
```

### VSCode Ruby Plugins

Can use `ruby` and `ruby-rubocop`
This section need to be checked :)

```
    "[ruby]": {
        "editor.formatOnSave": false,
        "editor.formatOnPaste": false,
        "editor.tabSize": 2
    },
    "ruby.format": "rubocop",
    // If not specified searches for 'rubocop' executable available on PATH (default and recommended)
    "ruby.rubocop.executePath": "",
    // You can use specific path
    // "ruby.rubocop.executePath": "/Users/you/.rbenv/shims/"
    // "ruby.rubocop.executePath": "/Users/you/.rvm/gems/ruby-2.3.2/bin/"
    // "ruby.rubocop.executePath": "D:/bin/Ruby22-x64/bin/"
    // If not specified, it assumes a null value by default.
    "ruby.rubocop.configFilePath": "/vivo/vor/.rubocop.yml",
    // default true
    "ruby.rubocop.onSave": true
```

### If not familiar with VSCode

#### VSCode Keyboard settings

To set keyboard combination go to `Code / Preferences / Keyboard Shortcut`

#### VSCode My User config

```
{
    "workbench.colorTheme": "Default Light+",
    "workbench.list.openMode": "singleClick",
    "workbench.editor.enablePreview": false,
    "workbench.tree.indent": 16, // ident for right side nav (with files)

    "files.trimTrailingWhitespace": true,

    "explorer.autoReveal": false,

    "editor.wordWrapColumn": 140,
    "editor.renderWhitespace": "all",
    "editor.tabSize": 4,

    "javascript.preferences.quoteStyle": "single",

    "typescript.preferences.quoteStyle": "single",
}
```

Good to have:

*Local History plugin"

Id: xyz.local-history
Description: Save files into local history
Version: 1.7.0
Publisher: xyz
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=xyz.local-history

Settings:
```
    "local-history.daysLimit":  30,  // A day number to purge local history. (0: no purge)
    "local-history.maxDisplay": 10,  // A max files to display with local history commands
    "local-history.saveDelay":   0,  // A delay in seconds to save file in local history. {0: no delay}
    //"local-history.dateLocale":     // The locale to use when displaying date (e.g.: "fr-CH" or "en-GB" or ...)

    // Specify another location for .history folder (null: use workspaceFolder)
    "local-history.path": "${workspaceFolder}/.vscode",
    // Save absolute or relative path in local-history.path
    //    true:  (absolute) // <local-history.path>/.history/<absolutePath>
    //    false: (relative) // (default) <local-history.path>/.history/<workspaceFolder.basename>/<relativePath>
    "local-history.absolute": false,

    "local-history.enabled": "Workspace", // Always

    //"local-history.exclude": ['**/.history/**', '**/.vscode**', '**/node_modules/**', '**/typings/**', '**/out/**']
```
*Web Accessibility*

Id: maxvanderschee.web-accessibility
Description: Web Accessibility for Visual Studio Code
Version: 0.2.7
Publisher: Max van der Schee
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=MaxvanderSchee.web-accessibility

*HTML vscode formatter plugin*

Id: vscode-angular-html
Description: Angular HTML Template Syntax Highlighting
Version: 1.3.1
Publisher: Guilherme Haschel
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html


------------------------------------------------------------------------------------------------------------------------

# GENERATE APP SAMPLES

If you are not familiar with angular or just it easer to copy-past commands, there are commands used on app creation

### Build app commands

Dependencies that were used on app creation:

```
    npm install -g npm@latest
    npm install -g @angular/cli
    npm install --save @angular/cdk @angular/animations @angular/flex-layout
    npm install --save @angular/cdk @angular/animations @angular/material
    npm install --save @angular/http
    npm install --save rxjs-compat ngx-cookie-service
    ng new ng-app

    ng add @angular/material

```

### Generate Core samples

```
    ng generate module layouts/layouts
    ng generate component layouts/layouts/layouts/app-layout --module=layouts
    ng generate component layouts/layouts/layouts/static-layout --module=layouts
    ng generate component layouts/layouts/layouts/error-layout --module=layouts
    ng generate component layouts/layouts/components/app-header-nav --module=layouts
    ng generate component layouts/layouts/components/app-footer --module=layouts

    ng generate module routing/errors-routing
    ng generate component routing/errors-routing/pages/not-found-page --module=errors-routing
    ng generate module routing/static-routing
    ng generate component routing/static-routing/pages/about --module=static-routing
    ng generate component routing/static-routing/pages/task --module=static-routing
    ng generate module routing/users-routing
    ng generate component routing/users-routing/pages/user --module=users-routing
    ng generate module routing/manage-users-routing
    ng generate component routing/manage-users-routing/pages/edit-form --module=manage-users-routing

    ng generate module core
    ng generate class core/config/icons-autogenerated
    ng generate class core/domain/models/user-entity/user-entity
    ng generate class core/domain/models/user-entity/user-entity-factory

    ng generate module shared/ui
    ng generate component shared/ui/components/inline-loader --module=ui


    ng generate enum core/infrastructure/acl/acl-roles-enum
    ng generate service core/infrastructure/log/log --module=core
    ng generate service core/infrastructure/unsplash/unsplash-adapter/unsplash-adapter
```

### Generate Modules samples

```
    ng generate module modules/user

    ng generate pipe modules/search/pipes/filter-by-field/filter-by-field --module=search
    ng generate service modules/auth/services/auth/auth-auth --module=auth
    ng generate component modules/milestone-def/components/milestone-def-card --module=milestone-def

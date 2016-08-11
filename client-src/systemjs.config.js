System.config({
    baseURL: '/',
    warnings: true,
    map: {
        '@calle/ng2-browser-storage': 'node_modules/@calle/ng2-browser-storage',
        '@calle/ng2-request-form': 'node_modules/@calle/ng2-request-form',
        '@calle/ng2-table': 'node_modules/@calle/ng2-table',
        '@angular': 'node_modules/@angular',
        '@ngrx': 'node_modules/@ngrx',
        'rxjs': 'node_modules/rxjs'
    },
    packages: {
        '': { defaultExtension: 'js', main: 'index.js' },
        'client-src': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        '@calle/ng2-browser-storage': { defaultExtension: 'js', main: 'index.js' },
        '@calle/ng2-request-form': { defaultExtension: 'js', main: 'index.js' },
        '@calle/ng2-table': { defaultExtension: 'js', main: 'index.js' },
        '@angular/common': { defaultExtension: 'js', main: 'index.js' },
        '@angular/compiler': { defaultExtension: 'js', main: 'index.js' },
        '@angular/core': { defaultExtension: 'js', main: 'index.js' },
        '@angular/forms': { defaultExtension: 'js', main: 'index.js' },
        '@angular/http': { defaultExtension: 'js', main: 'index.js' },
        '@angular/platform-browser': { defaultExtension: 'js', main: 'index.js' },
        '@angular/platform-browser-dynamic': { defaultExtension: 'js', main: 'index.js' },
        '@angular/router': { defaultExtension: 'js', main: 'index.js' },
        '@angular/testing': { defaultExtension: 'js', main: 'index.js' },
        '@angular/upgrade': { defaultExtension: 'js', main: 'index.js' },
        '@ngrx/store': { defaultExtension: 'js', main: 'index.js' },
        '@ngrx/core': { defaultExtension: 'js', main: 'index.js' }
    }
});
//# sourceMappingURL=systemjs.config.js.map
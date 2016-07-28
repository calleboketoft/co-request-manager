System.config({
    baseURL: '/',
    warnings: true,
    map: {
        'co-browser-storage': 'node_modules/co-browser-storage',
        'co-request-form': 'node_modules/co-request-form',
        'co-list-view-table': 'node_modules/co-list-view-table',
        '@angular': 'node_modules/@angular',
        '@ngrx': 'node_modules/@ngrx',
        'rxjs': 'node_modules/rxjs'
    },
    packages: {
        'client-src': { defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        'co-browser-storage': { defaultExtension: 'js' },
        'co-request-form': { defaultExtension: 'js' },
        'co-list-view-table': { defaultExtension: 'js' },
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
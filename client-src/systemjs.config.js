System.config({
    baseURL: '/',
    warnings: true,
    map: {
        '@calle/ng2-browser-storage': 'node_modules/@calle/ng2-browser-storage',
        '@calle/ng2-request-form': 'node_modules/@calle/ng2-request-form',
        '@calle/ng2-table': 'node_modules/@calle/ng2-table',
        '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
        '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
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
        '@angular/common': { defaultExtension: 'js' },
        '@angular/compiler': { defaultExtension: 'js' },
        '@angular/core': { defaultExtension: 'js' },
        '@angular/forms': { defaultExtension: 'js' },
        '@angular/http': { defaultExtension: 'js' },
        '@angular/platform-browser': { defaultExtension: 'js' },
        '@angular/platform-browser-dynamic': { defaultExtension: 'js' },
        '@ngrx/store': { defaultExtension: 'js', main: 'index.js' },
        '@ngrx/core': { defaultExtension: 'js', main: 'index.js' }
    }
});
//# sourceMappingURL=systemjs.config.js.map
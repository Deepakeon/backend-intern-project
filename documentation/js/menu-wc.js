'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">weather-report documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-75f0e5f81d8babc76689c7d70e6575e7c5f7104104da2079739e41ce5df44a29bd42fb607d3df46c5bb4f1ac711cf5150304c36c88ef56b414cb80867112ffe7"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-75f0e5f81d8babc76689c7d70e6575e7c5f7104104da2079739e41ce5df44a29bd42fb607d3df46c5bb4f1ac711cf5150304c36c88ef56b414cb80867112ffe7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-75f0e5f81d8babc76689c7d70e6575e7c5f7104104da2079739e41ce5df44a29bd42fb607d3df46c5bb4f1ac711cf5150304c36c88ef56b414cb80867112ffe7"' :
                                        'id="xs-injectables-links-module-PrismaModule-75f0e5f81d8babc76689c7d70e6575e7c5f7104104da2079739e41ce5df44a29bd42fb607d3df46c5bb4f1ac711cf5150304c36c88ef56b414cb80867112ffe7"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WeatherSyncModule.html" data-type="entity-link" >WeatherSyncModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-WeatherSyncModule-fa97826c7ed207f21377850ab8b1e1c5442c695c4f09e545480f285c8d7290b2484a60e94fca33a05ceb34f09260b98b766cd05b16f01622d4fbbf70257700f0"' : 'data-bs-target="#xs-controllers-links-module-WeatherSyncModule-fa97826c7ed207f21377850ab8b1e1c5442c695c4f09e545480f285c8d7290b2484a60e94fca33a05ceb34f09260b98b766cd05b16f01622d4fbbf70257700f0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-WeatherSyncModule-fa97826c7ed207f21377850ab8b1e1c5442c695c4f09e545480f285c8d7290b2484a60e94fca33a05ceb34f09260b98b766cd05b16f01622d4fbbf70257700f0"' :
                                            'id="xs-controllers-links-module-WeatherSyncModule-fa97826c7ed207f21377850ab8b1e1c5442c695c4f09e545480f285c8d7290b2484a60e94fca33a05ceb34f09260b98b766cd05b16f01622d4fbbf70257700f0"' }>
                                            <li class="link">
                                                <a href="controllers/WeatherSyncController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WeatherSyncController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-WeatherSyncModule-fa97826c7ed207f21377850ab8b1e1c5442c695c4f09e545480f285c8d7290b2484a60e94fca33a05ceb34f09260b98b766cd05b16f01622d4fbbf70257700f0"' : 'data-bs-target="#xs-injectables-links-module-WeatherSyncModule-fa97826c7ed207f21377850ab8b1e1c5442c695c4f09e545480f285c8d7290b2484a60e94fca33a05ceb34f09260b98b766cd05b16f01622d4fbbf70257700f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WeatherSyncModule-fa97826c7ed207f21377850ab8b1e1c5442c695c4f09e545480f285c8d7290b2484a60e94fca33a05ceb34f09260b98b766cd05b16f01622d4fbbf70257700f0"' :
                                        'id="xs-injectables-links-module-WeatherSyncModule-fa97826c7ed207f21377850ab8b1e1c5442c695c4f09e545480f285c8d7290b2484a60e94fca33a05ceb34f09260b98b766cd05b16f01622d4fbbf70257700f0"' }>
                                        <li class="link">
                                            <a href="injectables/WeatherSyncService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WeatherSyncService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/WeatherSyncController.html" data-type="entity-link" >WeatherSyncController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/GetWeatherSyncFilterDto.html" data-type="entity-link" >GetWeatherSyncFilterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WeatherSyncDeltaParamsDto.html" data-type="entity-link" >WeatherSyncDeltaParamsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WeatherSyncDto.html" data-type="entity-link" >WeatherSyncDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WeatherSyncService.html" data-type="entity-link" >WeatherSyncService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
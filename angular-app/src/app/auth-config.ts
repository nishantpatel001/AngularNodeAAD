/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
export const msalConfig: Configuration = {
    // API client id: e0fa75b3-4383-456c-9b66-581cac815f1f
    // APP client id: b77cd122-9f25-4932-a1cb-1ed5772f4a37
    auth: {
        clientId: '72cc9c3a-67a0-45ed-b23a-939f713b7061', // This is the ONLY mandatory field that you need to supply.
        authority: 'https://login.microsoftonline.com/organizations', // Defaults to "https://login.microsoftonline.com/common"
        redirectUri: '/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback(logLevel: LogLevel, message: string) {
                console.log(message);
            },
            logLevel: LogLevel.Verbose,
            piiLoggingEnabled: false
        }
    }
}

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    graphApi: {
        endpoint: "https://graph.microsoft.com/v1.0/users",
        scopes: ["User.Read.All"]
    },
    todoListApi: {
        endpoint: "https://app-aad-node.azurewebsites.net/api",
        scopes: ["api://075b1383-a53b-47f1-b52f-80d2f9107b64/.default"],
    },
}

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [...protectedResources.todoListApi.scopes] // If you would like the admin-user to explicitly consent via "Admin" page, instead of being prompted for admin consent during initial login, remove this scope.
};
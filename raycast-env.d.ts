/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Show Folders - Show folders as separate navigable items in the connection list */
  "showFolders": boolean,
  /** Show Recent - Show recently used connections in a separate Recent section */
  "showRecent": boolean,
  /** Show Recent at Start of List - Place the Recent section at the start of the list instead of after folders and connections */
  "showRecentAtStart": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-connections` command */
  export type SearchConnections = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-connections` command */
  export type SearchConnections = {}
}


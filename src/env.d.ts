/// <reference path="../.astro/types.d.ts" />
declare global {

    interface String {
  
      truncate(cutOff: number): string;
  
    }
  
}

export {};
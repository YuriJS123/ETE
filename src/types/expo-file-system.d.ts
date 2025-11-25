declare module 'expo-file-system' {
    export const documentDirectory: string | null;
    export const cacheDirectory: string | null;
  
    export interface FileInfo {
      exists: boolean;
      isDirectory: boolean;
      uri: string;
      size?: number;
      modificationTime?: number;
      md5?: string;
    }
  
    export function getInfoAsync(
      fileUri: string,
      options?: { md5?: boolean }
    ): Promise<FileInfo>;
  
    export function copyAsync(options: {
      from: string;
      to: string;
    }): Promise<void>;
  }
  
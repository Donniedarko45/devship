import fs from 'fs';
import path from 'path';

export const getAllFiles = (folderPath: string): string[] => {
    const files: string[] = [];
    const excludeFiles = ['.git', '.gitignore', 'README.md'];

    const getFiles = (folderPath: string) => {
        const entries = fs.readdirSync(folderPath);

        for (const entry of entries) {
            const fullPath = path.join(folderPath, entry);
            
            // Skip excluded files
            if (excludeFiles.includes(entry)) continue;

            try {
                const stat = fs.lstatSync(fullPath);

                if (stat.isDirectory()) {
                    getFiles(fullPath);
                } else if (stat.isFile() && !stat.isSymbolicLink()) {
                    files.push(fullPath);
                }
            } catch (error) {
                // Skip inaccessible files
                continue;
            }
        }
    };

    getFiles(folderPath);
    return files;
};
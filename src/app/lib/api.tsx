import {promises as fs } from 'fs';
const path = process.cwd()  + '/src/data'

async function readJsonFile(filePath:any) {
    try {
        const file = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(file);
    } catch (error) {
        console.error(`Error reading JSON file at ${filePath}:`, error);
        throw error;
    }
}

export async function Sejarah(){
    return readJsonFile(`${path}/sejarah.json`)
}

export async function Team(){
    return readJsonFile(`${path}/team.json`)
}

export async function LandingPage() {
    return readJsonFile(`${path}/landing-page.json`)
}

export async function HargaTiket() {
    return readJsonFile(`${path}/harga-tiket.json`)
}

export async function Keunikan() {
    return readJsonFile(`${path}/keunikan.json`)
}


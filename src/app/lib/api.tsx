import path from "path";
import fs from "fs/promises";

const dataPath = path.join(process.cwd(), "src/data");

async function readJsonFile(filePath: string) {
  try {
    const file = await fs.readFile(path.join(dataPath, filePath), "utf-8");
    return JSON.parse(file);
  } catch (error) {
    console.error(`Error reading JSON file at ${filePath}:`, error);
    throw error;
  }
}

export async function Sejarah() {
  return readJsonFile("sejarah.json");
}

export async function Team() {
  return readJsonFile("team.json");
}

export async function LandingPage() {
  return readJsonFile("landing-page.json");
}

export async function HargaTiket() {
  return readJsonFile("harga-tiket.json");
}

export async function Keunikan() {
  return readJsonFile("keunikan.json");
}

export async function Blog() {
  return readJsonFile("blog.json");
}

export async function getBlogData(): Promise<Blog[]> {
  return readJsonFile('blog.json');
}

// export async function Blog() {
//   return import("../../data/blog.json").then((module) => module.default);
// }
